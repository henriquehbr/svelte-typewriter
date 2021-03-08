# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased](https://github.com/Kylescottw/svelte-typewriter/compare/v2.4.5...HEAD)

### Merged

- refactor: convert example components to typescript [`#35`](https://github.com/Kylescottw/svelte-typewriter/pull/35)

### Commits

- build: migrate from rollup to esbuild (#35) [`25b15be`](https://github.com/Kylescottw/svelte-typewriter/commit/25b15be1170638d5068cc0072864790128311774)
- build: remove rollup [`5b7d8aa`](https://github.com/Kylescottw/svelte-typewriter/commit/5b7d8aab39a3a9534393aaaa0a8270b049a4c971)
- feat: end loop [`c008d69`](https://github.com/Kylescottw/svelte-typewriter/commit/c008d69b87a32cc52f6125666db560f1403bf2a6)
- refactor: convert example project to typescript (#35) [`74f6d59`](https://github.com/Kylescottw/svelte-typewriter/commit/74f6d59ae3f3d1ce2a3c701084f8506e0e51d7e0)
- refactor!: remove scramble mode [`1c8ece8`](https://github.com/Kylescottw/svelte-typewriter/commit/1c8ece82abd203fb9132ca5427aab78f7a71cce8)
- chore(example): remove old build script [`332225f`](https://github.com/Kylescottw/svelte-typewriter/commit/332225fee2f01c33c1470f925a162916054f705e)
- refactor: remove unused parent element references (#35) [`d5bffa0`](https://github.com/Kylescottw/svelte-typewriter/commit/d5bffa001fe41d08a580f257abc98eefd0342a5c)
- refactor: prop name [`4048355`](https://github.com/Kylescottw/svelte-typewriter/commit/4048355e589c7252600b77bea64de7ab37e9ab6c)
- chore(example): remove unnecessary dependency [`9cb6e69`](https://github.com/Kylescottw/svelte-typewriter/commit/9cb6e6911e505d482fa2efea1f91f4bf6b5a596f)
- refactor(helpers): avoid circular dependencies (#35) [`a501778`](https://github.com/Kylescottw/svelte-typewriter/commit/a501778dd5ffd51d1303484321bcaa8de69558f9)
- refactor(example): add alias for svelte-typewriter src [`0be8d46`](https://github.com/Kylescottw/svelte-typewriter/commit/0be8d462b19a8cddc872749b427cc16a7d65547a)
- refactor: remove unneeded types (#35) [`164164b`](https://github.com/Kylescottw/svelte-typewriter/commit/164164b10cdd4b3f334a50ec564d19d869d41d48)
- chore(example): remove svelte-preprocessor-esbuild (lukeed/svelte-preprocessor-esbuild#4) [`69e660f`](https://github.com/Kylescottw/svelte-typewriter/commit/69e660fb425b360a8de552f3e0e1cf7774258436)
- cleanup: example loop page [`4a1db38`](https://github.com/Kylescottw/svelte-typewriter/commit/4a1db3807a7f4a3f3b2748aa66fbad30c170772e)
- chore: remove redundant script `example:start` from package.json [`5d6d34e`](https://github.com/Kylescottw/svelte-typewriter/commit/5d6d34ed99810288fba2b40a9527aea48ea6f0ff)

## [v2.4.5](https://github.com/Kylescottw/svelte-typewriter/compare/v2.4.4...v2.4.5) - 2020-12-24

### Merged

- refactor: unify both cascade and default modes [`#33`](https://github.com/Kylescottw/svelte-typewriter/pull/33)

### Commits

- build: replace tsc with rollup for building typescript [`96d620d`](https://github.com/Kylescottw/svelte-typewriter/commit/96d620d8ea4a843230fd29b543bc95c232b25c3d)
- chore(example): add a component for each animation mode [`4c52161`](https://github.com/Kylescottw/svelte-typewriter/commit/4c521617c58c87b0d858e8083d1736772f140f42)
- refactor: convert helpers and modes to typescript (#33) [`4683a02`](https://github.com/Kylescottw/svelte-typewriter/commit/4683a02978a2b2608268cf5d136071d1993ad2e4)
- refactor: add proper types for helpers and modes (#33) [`23ac8bc`](https://github.com/Kylescottw/svelte-typewriter/commit/23ac8bc7800166b7cdd4912ad3a092cde6b3ae46)
- refactor: convert "utils" into separated "helpers" (#33) [`fb6158d`](https://github.com/Kylescottw/svelte-typewriter/commit/fb6158d296e2f99dde8ec7e5a39a6edf39087911)
- refactor: reinitialize component on state update [`5c2415b`](https://github.com/Kylescottw/svelte-typewriter/commit/5c2415b07a825aa7a486016a958e82e1f86c07dc)
- refactor: unify loop and loopRandom modes [`914ef72`](https://github.com/Kylescottw/svelte-typewriter/commit/914ef722e84152f581546cd7e7bba8f168ad144e)
- refactor: modularize getRandomElement from loop mode (#33) [`6fd55b7`](https://github.com/Kylescottw/svelte-typewriter/commit/6fd55b7c739073bbc49f482073fffbab19a1aed0)
- refactor(utils): integrate loop logic into "writeEffect" (#33) [`1ba9750`](https://github.com/Kylescottw/svelte-typewriter/commit/1ba975028c1e1b068c231fb03967796f7ad0821e)
- chore: remove unnecessary "any" types [`0e205bd`](https://github.com/Kylescottw/svelte-typewriter/commit/0e205bd2e1fc4b1cca60dfd6f7ada0a1b1cde490)
- refactor(helpers): add writeEffect [`939a86b`](https://github.com/Kylescottw/svelte-typewriter/commit/939a86b73780d4b2857fdabb1a7f0f2ed49a4416)
- refactor: modularize cursor hiding module (#33) [`652895f`](https://github.com/Kylescottw/svelte-typewriter/commit/652895fb7a95f0d9e778ea4edbd3301e28b9d3db)
- chore: bump dependencies [`1444f38`](https://github.com/Kylescottw/svelte-typewriter/commit/1444f38c26cec088998f93d34ec04841408d8b2c)
- chore(example): add import alias [`bd6aee8`](https://github.com/Kylescottw/svelte-typewriter/commit/bd6aee8e408e0744a3a1a03b38161bd1f52cc707)
- refactor(default): modularize "getLongestTextElement" [`41e7b02`](https://github.com/Kylescottw/svelte-typewriter/commit/41e7b02ffd33914057790a2f04ecd7b2550f5e20)
- refactor(getLongestTextElement): return Element rather TypewriterElement [`a915357`](https://github.com/Kylescottw/svelte-typewriter/commit/a915357c84cf7da7c61b52e550239c9f267165e9)
- chore(modes): switch from default to named exports [`119119e`](https://github.com/Kylescottw/svelte-typewriter/commit/119119ea2793c1ce9d835e6a5af3fcb97765db7e)
- chore: bump dependencies [`41978b5`](https://github.com/Kylescottw/svelte-typewriter/commit/41978b5abbadf1eefe055c13f9c3152f8ca1fc28)
- chore: remove duplicated "isInRange" helper types [`951052d`](https://github.com/Kylescottw/svelte-typewriter/commit/951052dbb492c2119b6b987cd43cf14b61b0c4af)
- chore(cascade): remove unnecessary cursor hiding function [`d26afa6`](https://github.com/Kylescottw/svelte-typewriter/commit/d26afa60818872fce5c704c0aac6f6a5c8ae541e)
- chore(example): replace cursor radio button by color picker [`ea46b51`](https://github.com/Kylescottw/svelte-typewriter/commit/ea46b51724b1779160246148addc8fb638ffae3a)

## [v2.4.4](https://github.com/Kylescottw/svelte-typewriter/compare/v2.4.3...v2.4.4) - 2020-12-15

### Fixed

- fix(utils): escape ampersand unicode entity, closes #31 [`#31`](https://github.com/Kylescottw/svelte-typewriter/issues/31)
- fix(utils): properly filter innerHTML tags, closes #32 [`#32`](https://github.com/Kylescottw/svelte-typewriter/issues/32)

### Commits

- chore: bump dependencies [`46cf177`](https://github.com/Kylescottw/svelte-typewriter/commit/46cf17746734193a0d3b34a83f9ef703b5e63bda)
- chore(example): output css to ./public/build [`898bbd4`](https://github.com/Kylescottw/svelte-typewriter/commit/898bbd4d45a10cdf2ca0af40ab06dd074c2f509d)

## [v2.4.3](https://github.com/Kylescottw/svelte-typewriter/compare/v2.4.2...v2.4.3) - 2020-12-11

### Fixed

- fix(cascade): re-add cursor, closes #30 [`#30`](https://github.com/Kylescottw/svelte-typewriter/issues/30)
- fix(loopRandom): preserve element attributes, closes #29 [`#29`](https://github.com/Kylescottw/svelte-typewriter/issues/29)

### Commits

- chore: set changelog template to "keepachangelog" [`bdc50d1`](https://github.com/Kylescottw/svelte-typewriter/commit/bdc50d14607b8fd9bdf970a979e078e5e5d628a1)
- fix(loop): preserve element attributes (#29) [`dfae70f`](https://github.com/Kylescottw/svelte-typewriter/commit/dfae70f83e9aefc256388e20742b712cfca01e86)
- docs: add contribution steps [`57c3551`](https://github.com/Kylescottw/svelte-typewriter/commit/57c355185862e2abcd1007cd2788974f56c359ad)

## [v2.4.2](https://github.com/Kylescottw/svelte-typewriter/compare/v2.4.1...v2.4.2) - 2020-12-10

### Merged

- fix(cascade): properly animate nested elements [`#27`](https://github.com/Kylescottw/svelte-typewriter/pull/27)

### Commits

- chore: bump dependencies [`798ff61`](https://github.com/Kylescottw/svelte-typewriter/commit/798ff61ca834125a69b2dbd36fac853ae9e09d7a)
- fix(cascade): properly animate nested elements (#25) [`519ce6c`](https://github.com/Kylescottw/svelte-typewriter/commit/519ce6c9594125adb81b72d15352c7ad6639cb20)
- fix(scramble): adjust to work with "getElements" changes (#25) [`ae7b457`](https://github.com/Kylescottw/svelte-typewriter/commit/ae7b4570d41ef8069fa90f3cd87e1a9ab99f78d8)

## [v2.4.1](https://github.com/Kylescottw/svelte-typewriter/compare/v2.4.0...v2.4.1) - 2020-11-12

### Commits

- fix(loopRandom): properly animate single text nodes [`ffe37a1`](https://github.com/Kylescottw/svelte-typewriter/commit/ffe37a1fdeb62ca40dd4b2447f070c233ce10092)

## [v2.4.0](https://github.com/Kylescottw/svelte-typewriter/compare/v2.3.2...v2.4.0) - 2020-11-12

### Merged

- Add "loopRandom" mode [`#24`](https://github.com/Kylescottw/svelte-typewriter/pull/24)

### Commits

- chore: bump dependencies [`5fd8bae`](https://github.com/Kylescottw/svelte-typewriter/commit/5fd8baedd0edd0790536c702a0cdb5dcc7602312)
- feat: add "loopRandom" mode #23 [`75579eb`](https://github.com/Kylescottw/svelte-typewriter/commit/75579ebea856c1ae6440787ab7841ae33cfd55cc)
- refactor(loop,loopRandom): dedupe "typewriterEffect" [`0cf223f`](https://github.com/Kylescottw/svelte-typewriter/commit/0cf223fff824ab11f7d0b5ea99502368af39f420)
- docs: add "loopMode" details #23 [`d30f52c`](https://github.com/Kylescottw/svelte-typewriter/commit/d30f52c61b9cf3e8382cdfda6e7c3cfe1d39f1ef)
- docs: improve description of "loop" and "loopRandom" [`445fbeb`](https://github.com/Kylescottw/svelte-typewriter/commit/445fbeb85d4d01c20a86a1e7f6c9322cb47e0409)
- refactor(loop,loopRandom): dedupe "cleanChilNodes" [`44e7317`](https://github.com/Kylescottw/svelte-typewriter/commit/44e731732dd546618b873860c96978b36ffa7586)
- docs: write jsdoc annotations for "cleanChildNodes" [`54ba41e`](https://github.com/Kylescottw/svelte-typewriter/commit/54ba41e3997359cb11e833e1661ee0c964ac8d4f)

## [v2.3.2](https://github.com/Kylescottw/svelte-typewriter/compare/v2.3.1...v2.3.2) - 2020-11-11

### Commits

- refactor: rewrite changelog generation scripts [`df8a593`](https://github.com/Kylescottw/svelte-typewriter/commit/df8a5938507d2cb39b9ab0cff2bba79316aeae4e)
- chore: bump rollup from 2.32.1 to 2.33.0 [`c50ee34`](https://github.com/Kylescottw/svelte-typewriter/commit/c50ee344a1697ea43c192253fee77b72c98207f9)
- chore: automate pushing of git tags to remote [`26a26a6`](https://github.com/Kylescottw/svelte-typewriter/commit/26a26a68907608ad7346d22b449f7c2025d51498)
- chore: remove "git push" from "post-commit" hook [`36a511b`](https://github.com/Kylescottw/svelte-typewriter/commit/36a511bdaee2c6210772c7a495b4abac0bf00933)

## [v2.3.1](https://github.com/Kylescottw/svelte-typewriter/compare/v2.3.0...v2.3.1) - 2020-10-30

### Commits

- chore: bump dependencies [`bb3a056`](https://github.com/Kylescottw/svelte-typewriter/commit/bb3a056023ac662d6478f70648f9745c22fbc40a)
- docs: add missing import on example [`233e1e6`](https://github.com/Kylescottw/svelte-typewriter/commit/233e1e6e68b2c55427a0967d37144c7de4d1ac06)

## [v2.3.0](https://github.com/Kylescottw/svelte-typewriter/compare/v2.2.0...v2.3.0) - 2020-10-20

### Merged

- Add "scramble" animation mode [`#22`](https://github.com/Kylescottw/svelte-typewriter/pull/22)

### Commits

- docs: move jsdoc annotations into a single file [`f6df25b`](https://github.com/Kylescottw/svelte-typewriter/commit/f6df25bd914288ed1fd31f4a50ba9f1d681a819e)
- feat: add proof-of-concept version of scramble mode [`37f8e9c`](https://github.com/Kylescottw/svelte-typewriter/commit/37f8e9ce666453b535c9bd4a88650b602fc212ec)
- fix(scramble): solve animation issue with multiple elements [`f582f02`](https://github.com/Kylescottw/svelte-typewriter/commit/f582f02c5410db69cdc6d2099f27f51e617f8c2c)
- refactor: split scramble mode into smaller functions [`b3386a7`](https://github.com/Kylescottw/svelte-typewriter/commit/b3386a72a768afc6f6243e66c6e7d9932d1a846f)
- fix(scramble): properly emit "done" event [`cc5b23e`](https://github.com/Kylescottw/svelte-typewriter/commit/cc5b23e11badf8f23b167e26db1e355e9dab2ead)
- refactor(scramble): simplify helper functions [`11d6925`](https://github.com/Kylescottw/svelte-typewriter/commit/11d69253664e6ae2a2332fc63b6c0fbc12d82a79)
- docs: add `scramble` mode details [`9ee2a20`](https://github.com/Kylescottw/svelte-typewriter/commit/9ee2a20c6a0ccc74b0d55a691cbca9d83ade5b3f)
- fix: properly animate single text elements on scramble mode [`2c491c4`](https://github.com/Kylescottw/svelte-typewriter/commit/2c491c41ba2d98e28efeea2166b8fba0add292ae)
- docs: add npm stats badges [`e54fc12`](https://github.com/Kylescottw/svelte-typewriter/commit/e54fc12b89da77960abb5a278be19521c510b867)
- docs: add notice about dynamic imports issue on rollup #21 [`930ddde`](https://github.com/Kylescottw/svelte-typewriter/commit/930dddec9cd82f059fe41ed9a9be1ebf616b4330)

## [v2.2.0](https://github.com/Kylescottw/svelte-typewriter/compare/v2.1.17...v2.2.0) - 2020-10-06

### Commits

- docs: add jsdoc annotations to animation modes [`82e8504`](https://github.com/Kylescottw/svelte-typewriter/commit/82e85041ce4880df846fcd02802a0c30b2ebf65a)
- feat: implement `delay` prop [`86bd9b5`](https://github.com/Kylescottw/svelte-typewriter/commit/86bd9b5ec1561ddf00896c0055c511646513f672)
- docs: add `delay` prop details [`ae22b08`](https://github.com/Kylescottw/svelte-typewriter/commit/ae22b084da5f5103e291943cfa68c5db8a2c1205)
- chore: remove changelog "Unreleased" section on `publish` script [`5f9c5fa`](https://github.com/Kylescottw/svelte-typewriter/commit/5f9c5fa540d2ff6261a7a843c6d032ec567a853c)
- fix: solve regression in package.json `files` field #18 [`59c89f7`](https://github.com/Kylescottw/svelte-typewriter/commit/59c89f78d1b2c7eea082a037049c38bc1cef8d5e)

## [v2.1.17](https://github.com/Kylescottw/svelte-typewriter/compare/v2.1.16...v2.1.17) - 2020-10-06

### Merged

- chore(deps): bump node-fetch from 2.6.0 to 2.6.1 [`#19`](https://github.com/Kylescottw/svelte-typewriter/pull/19)

### Commits

- refactor: modularize modes and actions #15 [`3bc5e44`](https://github.com/Kylescottw/svelte-typewriter/commit/3bc5e4452f310435c76906e79509412d6b54cf24)
- build: generate ESM and UMD compatible bundles [`8619f46`](https://github.com/Kylescottw/svelte-typewriter/commit/8619f46d544891c70deba13da29bfe666abd6016)
- refactor: implement new architecture PoC #15 [`731368c`](https://github.com/Kylescottw/svelte-typewriter/commit/731368ca6fa161d52d1b919096c5ef6aeb9c6833)
- refactor: split non-loop into default and cascade modes [`ef1cb5c`](https://github.com/Kylescottw/svelte-typewriter/commit/ef1cb5c85eaeca414671b63ec9148079896f3dff)
- refactor: replace mode components with actions #15 [`4582316`](https://github.com/Kylescottw/svelte-typewriter/commit/4582316183823748fb6fd58a854001b643bd4f5f)
- docs: annotate `utils` and `typewriter-effect` with jsdoc #15 [`4231014`](https://github.com/Kylescottw/svelte-typewriter/commit/42310149e4838f0e995c2eeb06763959207c7196)
- refactor: move cursor styles to Typewriter.svelte [`e9f0d3c`](https://github.com/Kylescottw/svelte-typewriter/commit/e9f0d3c0c0e54995b6348c85ed5c5a3fe26a496b)
- build: add build script to example app [`40e4997`](https://github.com/Kylescottw/svelte-typewriter/commit/40e4997850fd216b9e6e4ffb16896369602eafd9)
- refactor: simplify `getElements` function [`c71a2c1`](https://github.com/Kylescottw/svelte-typewriter/commit/c71a2c1b409b7474ad0859cab46ca633f4f52d37)
- refactor(loop): remove unnecessary code [`2023b33`](https://github.com/Kylescottw/svelte-typewriter/commit/2023b33107d3e32308f47868fb4901a8000a63d2)
- fix(utils): solve single text node elements regression [`df753be`](https://github.com/Kylescottw/svelte-typewriter/commit/df753be689b6ef3a0a9d460fb7b63de86b31e4c9)
- build: disable hash on bundle filenames [`36c1e0c`](https://github.com/Kylescottw/svelte-typewriter/commit/36c1e0ca2d26bd25137089bf7b8e889ac7af6c94)
- build: set `summaryOnly` to true on rollup-plugin-analyzer [`fa7b25f`](https://github.com/Kylescottw/svelte-typewriter/commit/fa7b25fd747209f9a3c58421d1ecbaa16dd29c64)
- chore: add build script to pre-commit hook [`04878e6`](https://github.com/Kylescottw/svelte-typewriter/commit/04878e6b4445cce44ca8485c07f1fc672cf8d9d6)
- chore: add favicon [`7c1cd9d`](https://github.com/Kylescottw/svelte-typewriter/commit/7c1cd9d6f60050a6c26396923e3bcaf1eaee170c)

## [v2.1.16](https://github.com/Kylescottw/svelte-typewriter/compare/v2.1.15...v2.1.16) - 2020-09-06

### Commits

- chore(changelog): refactor changelog generation script [`5af084a`](https://github.com/Kylescottw/svelte-typewriter/commit/5af084aad7f488ce8f4b8369b4486d9fdce82d1d)
- chore: bump dependencies [`55ac97a`](https://github.com/Kylescottw/svelte-typewriter/commit/55ac97a7cf5c1185228c2137738ff8243250709d)
- docs(readme): update "Modes" and "Event listeners" sections [`cc70d08`](https://github.com/Kylescottw/svelte-typewriter/commit/cc70d08e50d778a142c4533d78d51eca9e83ef66)

## [v2.1.15](https://github.com/Kylescottw/svelte-typewriter/compare/v2.1.14...v2.1.15) - 2020-09-06

### Commits

- fix: change loop mode behavior to use all child tags [`bd46032`](https://github.com/Kylescottw/svelte-typewriter/commit/bd460320b75449eda1365dda820213b82476597c)

## [v2.1.14](https://github.com/Kylescottw/svelte-typewriter/compare/v2.1.13...v2.1.14) - 2020-09-05

### Commits

- docs(README): refactor documentation [`c202bea`](https://github.com/Kylescottw/svelte-typewriter/commit/c202bea7bd6087f53219b8958efd8c53d43bf347)
- fix: solve imprecise trigger of `on:done` event on default mode [`abf4ee2`](https://github.com/Kylescottw/svelte-typewriter/commit/abf4ee28a76a16fe47f6328f0d0ef8e6082038e9)

## [v2.1.13](https://github.com/Kylescottw/svelte-typewriter/compare/v2.1.12...v2.1.13) - 2020-09-03

### Commits

- fix: solve problem with on:done listener on loop mode [`e5b947e`](https://github.com/Kylescottw/svelte-typewriter/commit/e5b947e8d8525357cc0be7da121eccdb02acf093)

## [v2.1.12](https://github.com/Kylescottw/svelte-typewriter/compare/v2.1.11...v2.1.12) - 2020-07-18

### Commits

- chore: add husky pre-push hook for changelog generation [`abdff18`](https://github.com/Kylescottw/svelte-typewriter/commit/abdff188ffc585936826c5377af7a25a48e81016)
- chore: include "Unreleased" commits on changelog [`ebdaf21`](https://github.com/Kylescottw/svelte-typewriter/commit/ebdaf21b60e52ca93fb6abe46438796a162b819d)
- lint: change printWidth from 120 to 80 [`8c48357`](https://github.com/Kylescottw/svelte-typewriter/commit/8c48357de785f241e14727dd5ba78153c3d5fe96)
- chore: modify options related to changelog generation [`b8b8b8d`](https://github.com/Kylescottw/svelte-typewriter/commit/b8b8b8dc2dcde7fa22b8780b12887d9aaa8b2ef6)
- refactor: simplify conditional expressions [`1fde2ba`](https://github.com/Kylescottw/svelte-typewriter/commit/1fde2ba8a5a3cfaf1c05f2cd9e972a493db8073d)
- chore: add prettier script to husky hooks [`cca400f`](https://github.com/Kylescottw/svelte-typewriter/commit/cca400fd867a281c9bfc1a89cc4d610faca38da8)
- chore: update CHANGELOG.md [`18ffa6a`](https://github.com/Kylescottw/svelte-typewriter/commit/18ffa6a19db96614cf4b8bf826090be426765b25)

## [v2.1.11](https://github.com/Kylescottw/svelte-typewriter/compare/v2.1.10...v2.1.11) - 2020-07-16

### Commits

- bump "example" directory dependencies [`1fea39d`](https://github.com/Kylescottw/svelte-typewriter/commit/1fea39d7bb8b448e2dbf64eed901eb8e4e7ff86f)
- chore: add "build" directory to .gitignore [`5f70071`](https://github.com/Kylescottw/svelte-typewriter/commit/5f7007194f3404b4831fd3f1b1b74f218bfe1729)
- chore: add prettier linting script [`b446ccd`](https://github.com/Kylescottw/svelte-typewriter/commit/b446ccda7f2ad4a1874c47c2102afca9dbfbf1f0)
- chore: add typings to rollup config [`a6333b2`](https://github.com/Kylescottw/svelte-typewriter/commit/a6333b2ef6db3c1c954ba13e3767f35e82636049)
- chore: bump "auto-changelog" from 1.16.2 to 2.2.0 [`1b50aaa`](https://github.com/Kylescottw/svelte-typewriter/commit/1b50aaa760898cfe5e6828752b70347d2b1ca72a)

## [v2.1.10](https://github.com/Kylescottw/svelte-typewriter/compare/v2.1.9...v2.1.10) - 2020-05-26

### Merged

- Removed console.log, added event on loopMode [`#9`](https://github.com/Kylescottw/svelte-typewriter/pull/9)

### Commits

- Delete package-lock.json [`0157ae9`](https://github.com/Kylescottw/svelte-typewriter/commit/0157ae92e6c3d1204452e4eb55898594f070efef)
- Delete package-lock.json [`2758c85`](https://github.com/Kylescottw/svelte-typewriter/commit/2758c85f114ac7dc2409e96a942782987b9d1da2)
- Kill loop on component dismount. [`a67deb7`](https://github.com/Kylescottw/svelte-typewriter/commit/a67deb7d4b671d18366bc414ed80037a22d970a2)

## [v2.1.9](https://github.com/Kylescottw/svelte-typewriter/compare/v2.1.8...v2.1.9) - 2020-03-10

### Commits

- chore: add `example` directory for testing purposes [`b14a18b`](https://github.com/Kylescottw/svelte-typewriter/commit/b14a18b3b9d2fefeb7a30f975e91487327c03122)
- fix: solve animation issue on nested DOM elements [`4c5aa70`](https://github.com/Kylescottw/svelte-typewriter/commit/4c5aa7041974a4eafe794b1f4ff86e50b9937769)

## [v2.1.8](https://github.com/Kylescottw/svelte-typewriter/compare/v2.1.4...v2.1.8) - 2020-02-25

### Commits

- chore: change svelte version from latest to 3.x [`2b53f0d`](https://github.com/Kylescottw/svelte-typewriter/commit/2b53f0d8aacd7546ef41df7125ca460606606195)
- lint: remove .prettierignore [`5f5884b`](https://github.com/Kylescottw/svelte-typewriter/commit/5f5884b5be79aafe5cf1caa90d04e3324eeba5ff)

## [v2.1.4](https://github.com/Kylescottw/svelte-typewriter/compare/v2.1.1...v2.1.4) - 2020-02-10

### Commits

- chore: bump svelte from 3.17.2 to 3.18.2 [`c3a2699`](https://github.com/Kylescottw/svelte-typewriter/commit/c3a26996ec8843d1e157690c17f995ac9ff994ae)

## [v2.1.1](https://github.com/Kylescottw/svelte-typewriter/compare/v2.1.0...v2.1.1) - 2020-01-23

### Fixed

- docs(README): add `on:done` section, closes #8 [`#8`](https://github.com/Kylescottw/svelte-typewriter/issues/8)

## [v2.1.0](https://github.com/Kylescottw/svelte-typewriter/compare/v2.0.3...v2.1.0) - 2020-01-23

### Commits

- feat: implement animation callback event #8 [`63ef3c1`](https://github.com/Kylescottw/svelte-typewriter/commit/63ef3c164b636f36589caa51a29508f30b1cbde2)

## [v2.0.3](https://github.com/Kylescottw/svelte-typewriter/compare/v2.0.2...v2.0.3) - 2020-01-20

### Commits

- docs(README): add "Made with Svelte" badge [`d410971`](https://github.com/Kylescottw/svelte-typewriter/commit/d4109715c29a62035b0952258d0e83c4385eb219)

## [v2.0.2](https://github.com/Kylescottw/svelte-typewriter/compare/v2.0.0...v2.0.2) - 2020-01-12

### Commits

- docs(README): remove directives deprecation notice [`c9589fb`](https://github.com/Kylescottw/svelte-typewriter/commit/c9589fbe88ba66a80e549447aa1055341dddc1da)
- docs(README): update directives deprecation notice [`823f202`](https://github.com/Kylescottw/svelte-typewriter/commit/823f202146eb215c06ce94873cc879694a9dc72e)
- docs(README): add demo repl for `cursor` option [`1e8221c`](https://github.com/Kylescottw/svelte-typewriter/commit/1e8221c729db97b88e9d9e88b7c93b5a9371f6e0)
- docs(README): add repl link for `loop` option [`78202cc`](https://github.com/Kylescottw/svelte-typewriter/commit/78202cce1659f85843f7b6e1f15a9041e65aedcf)

## [v2.0.0](https://github.com/Kylescottw/svelte-typewriter/compare/v1.5.5...v2.0.0) - 2019-12-23

### Fixed

- v2.0.0 (closes #7) [`#7`](https://github.com/Kylescottw/svelte-typewriter/issues/7)

### Commits

- BREAKING CHANGES: remove directive-based animation [`9eab55f`](https://github.com/Kylescottw/svelte-typewriter/commit/9eab55f1800856b47a78fa8afae6e8147e5a8a07)
- docs(README): document `cursor` option #7 [`85be9a2`](https://github.com/Kylescottw/svelte-typewriter/commit/85be9a2932d4fd9756b1c6b4b321ad94a1032005)

## [v1.5.5](https://github.com/Kylescottw/svelte-typewriter/compare/v1.5.4...v1.5.5) - 2019-12-15

### Commits

- refactor: simplify verification of animation props [`c48db9f`](https://github.com/Kylescottw/svelte-typewriter/commit/c48db9f86c1fab6b2cfe217dab1bf6f8b0b46b56)

## [v1.5.4](https://github.com/Kylescottw/svelte-typewriter/compare/v1.5.3...v1.5.4) - 2019-12-14

### Commits

- fix: resolve `use` directive not working on single text node elements [`5722811`](https://github.com/Kylescottw/svelte-typewriter/commit/572281123b1c2f6066d877d2c07e992fba19dd1e)

## [v1.5.3](https://github.com/Kylescottw/svelte-typewriter/compare/v1.5.2...v1.5.3) - 2019-12-12

### Commits

- dependencies: bump `svelte` from "^3.15.0" to "^3.16.4" [`cb2e7f2`](https://github.com/Kylescottw/svelte-typewriter/commit/cb2e7f2c2a37419f8b6560c8ecd61d19b55b0676)

## [v1.5.2](https://github.com/Kylescottw/svelte-typewriter/compare/v1.5.1...v1.5.2) - 2019-12-11

### Commits

- docs(README): document the "directive-based" animation approach [`34e9e39`](https://github.com/Kylescottw/svelte-typewriter/commit/34e9e398f283859feb55081c442873c7d9f3e35e)

## [v1.5.1](https://github.com/Kylescottw/svelte-typewriter/compare/v1.5.0...v1.5.1) - 2019-12-11

### Commits

- fix: remove unused properties from default parameters object [`cc2c031`](https://github.com/Kylescottw/svelte-typewriter/commit/cc2c03172f72c0a29e33620a953d5ace524f3555)

## [v1.5.0](https://github.com/Kylescottw/svelte-typewriter/compare/v1.4.2...v1.5.0) - 2019-12-11

### Fixed

- feat: create `use:typewriter` directive, closes #6 [`#6`](https://github.com/Kylescottw/svelte-typewriter/issues/6)

## [v1.4.2](https://github.com/Kylescottw/svelte-typewriter/compare/v1.4.1...v1.4.2) - 2019-12-11

### Commits

- refactor: rewrite typewriter function for svelte `use` directive [`ea81c4e`](https://github.com/Kylescottw/svelte-typewriter/commit/ea81c4e2c6489ed15b2e4d85a3f46eb630b622c7)

## [v1.4.1](https://github.com/Kylescottw/svelte-typewriter/compare/v1.4.0...v1.4.1) - 2019-11-21

### Commits

- fix(loop): change the default value of `loop` to false [`5733038`](https://github.com/Kylescottw/svelte-typewriter/commit/5733038d8d58c65bf7a1c477444dddb4a274514f)

## [v1.4.0](https://github.com/Kylescottw/svelte-typewriter/compare/v1.3.4...v1.4.0) - 2019-11-21

### Fixed

- docs(README): add custom timing array to `interval` section, closes #4 [`#4`](https://github.com/Kylescottw/svelte-typewriter/issues/4)

### Commits

- feat: enable custom timing on `interval` #4 [`b7e59b0`](https://github.com/Kylescottw/svelte-typewriter/commit/b7e59b04a1224c5585f69a2a5818c929ab1534fb)

## [v1.3.4](https://github.com/Kylescottw/svelte-typewriter/compare/v1.3.0...v1.3.4) - 2019-11-21

### Commits

- fix(fouc): prevent flash of unstyled content [`f373766`](https://github.com/Kylescottw/svelte-typewriter/commit/f37376623ed7a37779df40076e7f7699908570c0)

## [v1.3.0](https://github.com/Kylescottw/svelte-typewriter/compare/v1.2.1...v1.3.0) - 2019-11-20

### Fixed

- feat(loop): add `loop` option, closes #3 [`#3`](https://github.com/Kylescottw/svelte-typewriter/issues/3)

### Commits

- generate CHANGELOG.md [`5e01481`](https://github.com/Kylescottw/svelte-typewriter/commit/5e014817e84ab476e3f2450159ec29d5d52054f7)
- chore: add auto-changelog `version` script [`356e9af`](https://github.com/Kylescottw/svelte-typewriter/commit/356e9af9585ef091255ed8b7940e7c2a6b7aee2b)
- chore: change CHANGELOG generation commit message [`d6dc3fa`](https://github.com/Kylescottw/svelte-typewriter/commit/d6dc3fa8fe5a20d2f3f8104685e23c348dc7bcbc)

## [v1.2.1](https://github.com/Kylescottw/svelte-typewriter/compare/v1.1.1...v1.2.1) - 2019-11-15

### Commits

- feat: add `interval` and `cascade` options [`a3ff23e`](https://github.com/Kylescottw/svelte-typewriter/commit/a3ff23e0060c2b3db338c718b7f6e09f5aecdad2)
- create CHANGELOG.md [`bf5a6df`](https://github.com/Kylescottw/svelte-typewriter/commit/bf5a6dfeb024acfbbee62b50358b945d98f93e62)
- docs(README): add separated demos for each option [`37c1dfc`](https://github.com/Kylescottw/svelte-typewriter/commit/37c1dfc4029820403eb75996802e2d3c1a65cb28)
- docs(README): update svelte version on demo link [`8a7e644`](https://github.com/Kylescottw/svelte-typewriter/commit/8a7e644aa16b3b366b1920c4e29d8e323aec62ec)
- Create CNAME [`7cdcdfb`](https://github.com/Kylescottw/svelte-typewriter/commit/7cdcdfbe5604d4164386a215e2c36486c5cc121f)

## [v1.1.1](https://github.com/Kylescottw/svelte-typewriter/compare/v1.1.0...v1.1.1) - 2019-11-12

### Commits

- chore(README): add PR's welcome badge [`98604d3`](https://github.com/Kylescottw/svelte-typewriter/commit/98604d3da4f80bdb0fba8986c236d7bcff17d6d4)

## [v1.1.0](https://github.com/Kylescottw/svelte-typewriter/compare/v1.0.1...v1.1.0) - 2019-11-12

### Merged

- Adds REPL demo [`#1`](https://github.com/Kylescottw/svelte-typewriter/pull/1)
- Changes to capitalisation and element binding [`#2`](https://github.com/Kylescottw/svelte-typewriter/pull/2)

### Commits

- chore: update the main field [`accd841`](https://github.com/Kylescottw/svelte-typewriter/commit/accd84140ce9864c459be38e89a304cf03cda2e6)
- Merge branches 'master' and 'master' of github.com:henriquehbr/svelte-typewriter [`4231d73`](https://github.com/Kylescottw/svelte-typewriter/commit/4231d7305ec10dd2d11de71ce3d2e044b587c55a)
- Create LICENSE [`b03bb60`](https://github.com/Kylescottw/svelte-typewriter/commit/b03bb60f4197aa02f9a5a722339d89f59f7d0a22)

## v1.0.1 - 2019-11-12

### Commits

- Initial commit [`c61cb9b`](https://github.com/Kylescottw/svelte-typewriter/commit/c61cb9b0d74dc0ab70dad80e682bccec46129d48)
