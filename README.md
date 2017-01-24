# solid-parakeet - color model for complex numbers
[![npm](https://img.shields.io/npm/v/solid-parakeet.svg)](https://www.npmjs.com/package/solid-parakeet)
[![cc0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

<img align=right alt=hsl src=https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/HSL_sphere_color_solid.png/320px-HSL_sphere_color_solid.png title=SharkD@wikimedia.org />
equivalent to the suface depicted as the riemann sphere.
hue is the imaginary componet. lightness the real. 100% saturation; gray is NaN.

```js
> solidparakeet( 0, 1 ) // i
'hsla(90, 100%, 50%, 1)' // "lime"
```
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

## require.js
```html
<script src="require.js"></script>
<script>
  requirejs( ['solid-parakeet'], function ( solidparakeet ) {
    document.body.style.backgroundColor = solidparakeet( 0, 1 )
  } )
</script>
```
