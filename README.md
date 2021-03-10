# `lsdl-wrapper`
Node wrapper around [`line-sticker-downloder`](github.com/redpeacock78/line-sticker-downloder).

## 🛠 Usage
```typescript
import * as lsdl from 'lsdl-wrapper';

const stiker: Promise<void> = lsdl("7457240");
sticker.then(() => {
    // Behavior when successful
    // The file is saved in the current directory
});

lsdl.async("7457240", "downloads");
// The file is saved in the downloads directory

const options: { [keys: string]: boolean } = {
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

## 🔗 API
### `lsdl(sticker: string, out_path?: string, options?: {}) => Promise<void>`
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
### `lsdl.async(sticker: string, out_path?: string, options?: {}) => undefined`
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
MIT