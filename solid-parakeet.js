( function ( root ) {

  function call( a, b ) {
    var m = map( a, b )
    return hsla( theta( m.z ), phi( m.x, m.y ) )
  }

  function hsla( theta, phi ) {
    function fn( h, s, l, a ) {
      return 'hsla('
        + h
        + ', '
        + s
        + '%, '
        + l
        + '%, '
        + a
        + ')'
    }
    function h( phi ) {
      return phi * ( 180 / Math.PI )
    }
    var s = 100
    function l( theta ) {
      return ( Math.PI - theta ) / Math.PI * 100
    }
    var a = 1
    if ( Number.isNaN( h( phi ) ) || Number.isNaN( l( theta ) ) ) {
      return fn( 0, 0, 50, a)
    }
    return fn( h( phi ), s, l( theta ), a )
  }

  function map( a, b ) {
    function x( a, b ) {
      return ( 2 * a ) / ( a*a + b*b + 1 )
    }
    function y( a, b ) {
      return ( 2 * b ) / ( a*a + b*b + 1 )
    }
    function z( c ) {
      return ( a*a + b*b - 1 ) / ( a*a + b*b + 1 )
    }
    if ( Math.abs( a ) == Infinity || Math.abs( b ) == Infinity ) {
      return { x: 0, y: 0, z: 1 }
    }
    return { x: x( a, b ), y: y( a, b ), z: z( a, b ) }
  }

  function phi( x, y ) {
    return Math.atan2( y, x )
  }

  function theta( z ) {
    return Math.acos( z )
  }

  if ( typeof define === 'function' && define.amd ) {
    define( [], function () {
      return call
    } )
  } else if ( typeof exports === 'object' ) {
    module.exports = call
  } else {
    root.solidparakeet = call
  }

} )( this )
