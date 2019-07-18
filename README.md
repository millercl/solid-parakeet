# solid-parakeet - color model for complex numbers <img src="https://licensebuttons.net/p/zero/1.0/88x31.png" height="20"/>

![logo](drawing.svg)

equivalent to the suface depicted as the riemann sphere.
hue is the argument. lightness the absolute value. 100% saturation; gray is NaN.

```js
> solidparakeet( 0, 1 ) // i
'hsla(90, 100%, 50%, 1)' // "lime"
```

[online demo](https://millercl.github.io/solid-parakeet/test/script.html)

## browser
```html
<script src="solid-parakeet.js"></script>
<script>
  solidparakeet( 0, 1 )
</script>
```

## npm
```shell
npm install --save solid-parakeet
```
```js
var solidparakeet = require( 'solid-parakeet' )
```

## requirejs
```html
<script src="require.js"></script>
<script>
  requirejs( ['solid-parakeet'], function ( solidparakeet ) {
    document.body.style.backgroundColor = solidparakeet( 0, 1 )
  } )
</script>
```
