# `lsdl-wrapper`
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/redpeacock78/lsdl-wrapper/blob/master/LICENSE) [![npm version](https://badge.fury.io/js/lsdl-wrapper.svg)](https://badge.fury.io/js/lsdl-wrapper) [![Npm Publish](https://github.com/redpeacock78/lsdl-wrapper/actions/workflows/npm-publish.yml/badge.svg?branch=master)](https://github.com/redpeacock78/lsdl-wrapper/actions/workflows/npm-publish.yml) [![Maintainability](https://api.codeclimate.com/v1/badges/a9ef35818a2256bc4785/maintainability)](https://codeclimate.com/github/redpeacock78/lsdl-wrapper/maintainability)  
Node wrapper around [`line-sticker-downloder`](https://github.com/redpeacock78/line-sticker-downloder).

## 🛠 Usage
```typescript
import * as lsdl from 'lsdl-wrapper';

const sticker: Promise<void> = lsdl("7457240");
sticker.then(() => {
    // Behavior when successful
    // The file is saved in the current directory
});

lsdl.async("7457240", "downloads");
// The file is saved in the downloads directory

const options: { [key: string]: boolean } = {
    animation: true,
    gif: true,
    sound: true
};
lsdl("11978", "downloads", options);
// or: lsdl("11978", "", options);
// or: lsdl("11978", null, options);
// or: lsdl("https://store.line.me/stickershop/product/11978/ja", "downloads", options);
// or: lsdl.async("11978", "downloads", options);
```
### ⚙ Example
#### 📄 example.ts
```typescript
import * as lsdl from 'lsdl-wrapper';

const ID_or_URL = "7457240"; // https://store.line.me/stickershop/product/7457240/ja
const dir = "downloads";
const sticker: Promise<void> = lsdl(ID_or_URL, dir);
sticker.then((): void => {
    console.log('OK!');
});
```
#### 🖥 On Terminal
```console
$ ts-node example.ts
OK!
$ tree downloads
downloads
└── Akatsuki_UNI_sticker_#1
    ├── @2x_key_png
    │   ├── 180117102@2x_key.png
    │   ├── 180117103@2x_key.png
    │   ├── 180117104@2x_key.png
    │   ├── 180117106@2x_key.png
    │   ├── 180117108@2x_key.png
    │   ├── 180117110@2x_key.png
    │   ├── 180117112@2x_key.png
    │   ├── 180117114@2x_key.png
    │   ├── 180117116@2x_key.png
    │   ├── 180117118@2x_key.png
    │   ├── 180117120@2x_key.png
    │   ├── 180117122@2x_key.png
    │   ├── 180117124@2x_key.png
    │   ├── 180117126@2x_key.png
    │   ├── 180117128@2x_key.png
    │   ├── 180117129@2x_key.png
    │   ├── 180117130@2x_key.png
    │   ├── 180117131@2x_key.png
    │   ├── 180117133@2x_key.png
    │   ├── 180117134@2x_key.png
    │   ├── 180117135@2x_key.png
    │   ├── 180117136@2x_key.png
    │   ├── 180117137@2x_key.png
    │   └── 180117142@2x_key.png
    ├── @2x_png
    │   ├── 180117102@2x.png
    │   ├── 180117103@2x.png
    │   ├── 180117104@2x.png
    │   ├── 180117106@2x.png
    │   ├── 180117108@2x.png
    │   ├── 180117110@2x.png
    │   ├── 180117112@2x.png
    │   ├── 180117114@2x.png
    │   ├── 180117116@2x.png
    │   ├── 180117118@2x.png
    │   ├── 180117120@2x.png
    │   ├── 180117122@2x.png
    │   ├── 180117124@2x.png
    │   ├── 180117126@2x.png
    │   ├── 180117128@2x.png
    │   ├── 180117129@2x.png
    │   ├── 180117130@2x.png
    │   ├── 180117131@2x.png
    │   ├── 180117133@2x.png
    │   ├── 180117134@2x.png
    │   ├── 180117135@2x.png
    │   ├── 180117136@2x.png
    │   ├── 180117137@2x.png
    │   └── 180117142@2x.png
    ├── key_png
    │   ├── 180117102_key.png
    │   ├── 180117103_key.png
    │   ├── 180117104_key.png
    │   ├── 180117106_key.png
    │   ├── 180117108_key.png
    │   ├── 180117110_key.png
    │   ├── 180117112_key.png
    │   ├── 180117114_key.png
    │   ├── 180117116_key.png
    │   ├── 180117118_key.png
    │   ├── 180117120_key.png
    │   ├── 180117122_key.png
    │   ├── 180117124_key.png
    │   ├── 180117126_key.png
    │   ├── 180117128_key.png
    │   ├── 180117129_key.png
    │   ├── 180117130_key.png
    │   ├── 180117131_key.png
    │   ├── 180117133_key.png
    │   ├── 180117134_key.png
    │   ├── 180117135_key.png
    │   ├── 180117136_key.png
    │   ├── 180117137_key.png
    │   └── 180117142_key.png
    └── png
        ├── 180117102.png
        ├── 180117103.png
        ├── 180117104.png
        ├── 180117106.png
        ├── 180117108.png
        ├── 180117110.png
        ├── 180117112.png
        ├── 180117114.png
        ├── 180117116.png
        ├── 180117118.png
        ├── 180117120.png
        ├── 180117122.png
        ├── 180117124.png
        ├── 180117126.png
        ├── 180117128.png
        ├── 180117129.png
        ├── 180117130.png
        ├── 180117131.png
        ├── 180117133.png
        ├── 180117134.png
        ├── 180117135.png
        ├── 180117136.png
        ├── 180117137.png
        └── 180117142.png

5 directories, 96 files
```
---

## 🔗 API
### `lsdl(sticker: string, out_path?: string, options?: {[key: string]: boolean}): Promise<void>`
Write the sticker data from the `sticker` to `out_path`. Returns a Promise which is resolved when `out_path` exists.  
If `out_path` is omitted, it defaults to current directory.  
You can specify not only a sticker ID but also a URL for the `sticker`.
#### ✅ `options`
- `animation`: Save the animation stickers as APNG.
- `effect`: Save the effect stickers as APNG.
- `gif`: Convert animation stickers or effect stickers to GIF and save.
- `sound`: Save sticker sounds with sound in m4a.
- `custom`: Custom sticker download Only. (Cannot be used with any other option)
- `manga`: Manga sticker download Only. (Cannot be used with any other option)  

***All `options` values ​​are set with `boolean`.***
### `lsdl.async(sticker: string, out_path?: string, options?: {[key: string]: boolean}): undefined`
Writes sticker data from `sticker` to `out_path` synchronously.  
If `out_path` is omitted, it defaults to current directory.  
You can specify not only a sticker ID but also a URL for the `sticker`.
#### ✅ `options`
- `animation`: Save the animation stickers as APNG.
- `effect`: Save the effect stickers as APNG.
- `gif`: Convert animation stickers or effect stickers to GIF and save.
- `sound`: Save sticker sounds with sound in m4a.
- `custom`: Custom sticker download Only. (Cannot be used with any other option)
- `manga`: Manga sticker download Only. (Cannot be used with any other option)  

***All `options` values ​​are set with `boolean`.***

## 🥝 Lisence
[MIT](https://github.com/redpeacock78/lsdl-wrapper/blob/master/LICENSE)