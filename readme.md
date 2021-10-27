# collapse-white-space

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Collapse white space to a single space.

## Contents

*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`collapseWhiteSpace(value)`](#collapsewhitespacevalue)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Related](#related)
*   [Contribute](#contribute)
*   [License](#license)

## Install

This package is [ESM only][esm].
In Node.js (version 12.20+, 14.14+, or 16.0+), install with [npm][]:

```sh
npm install collapse-white-space
```

In Deno with [Skypack][]:

```js
import {collapseWhiteSpace} from 'https://cdn.skypack.dev/collapse-white-space@2?dts'
```

In browsers with [Skypack][]:

```html
<script type="module">
  import {collapseWhiteSpace} from 'https://cdn.skypack.dev/collapse-white-space@2?min'
</script>
```

## Use

```js
import {collapseWhiteSpace} from 'collapse-white-space'

collapseWhiteSpace('\tfoo \n\tbar  \t\r\nbaz') //=> ' foo bar baz'
```

## API

This package exports the following identifier: `collapseWhiteSpace`.
There is no default export.

### `collapseWhiteSpace(value)`

Collapse white space to a single space.

###### Parameters

*   `value` (`string`)
    – value to collapse white space in

###### Returns

`value` (`string`) – value with collapsed white space.

## Types

This package is fully typed with [TypeScript][].

## Compatibility

This package is at least compatible with all maintained versions of Node.js.
As of now, that is Node.js 12.20+, 14.14+, and 16.0+.
It also works in Deno and modern browsers.

## Security

This package is safe.

## Related

*   [`wooorm/is-whitespace-character`](https://github.com/wooorm/is-whitespace-character)
    — check if a character is a white space character
*   [`wooorm/detab`](https://github.com/wooorm/detab)
    — convert tabs to spaces
*   [`wooorm/trim-lines`](https://github.com/wooorm/trim-lines)
    — remove tabs and spaces around line-breaks

## Contribute

Yes please!
See [How to Contribute to Open Source][contribute].

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/wooorm/collapse-white-space/workflows/main/badge.svg

[build]: https://github.com/wooorm/collapse-white-space/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/collapse-white-space.svg

[coverage]: https://codecov.io/github/wooorm/collapse-white-space

[downloads-badge]: https://img.shields.io/npm/dm/collapse-white-space.svg

[downloads]: https://www.npmjs.com/package/collapse-white-space

[size-badge]: https://img.shields.io/bundlephobia/minzip/collapse-white-space.svg

[size]: https://bundlephobia.com/result?p=collapse-white-space

[npm]: https://docs.npmjs.com/cli/install

[skypack]: https://www.skypack.dev

[license]: license

[author]: https://wooorm.com

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[typescript]: https://www.typescriptlang.org

[contribute]: https://opensource.guide/how-to-contribute/
