import * as lsdl from '../src/main';

describe('All main function', () => {
    test('Main function (Default Sticker)', async (): Promise<void> => {
        const result: string = await lsdl("7457240", "downloads").then((): string => {
            return "success";
        });
        expect(result).toBe("success");
    }, 5000000);

    test('Main function (Animation with gif Sticker)', async (): Promise<void> => {
        const URL: string = "https://store.line.me/stickershop/product/4409/ja";
        const options: { [key: string]: boolean } = {
            animation: true,
            gif: true
        };
        const result: string = await lsdl(URL, "downloads", options).then((): string => {
            return "success";
        });
        expect(result).toBe("success");
    }, 5000000);

    test('Main function (Effect with gif Sticker)', async (): Promise<void> => {
        const URL: string = "https://store.line.me/stickershop/product/18704/ja";
        const options: { [key: string]: boolean } = {
            effect: true,
            gif: true
        };
        const result: string = await lsdl(URL, "downloads", options).then((): string => {
            return "success";
        });
        expect(result).toBe("success");
    }, 5000000);

    test('Main function (Animation with gif and Sound Sticker)', async (): Promise<void> => {
        const URL: string = "https://store.line.me/stickershop/product/11978/ja";
        const options: { [key: string]: boolean } = {
            animaion: true,
            gif: true,
            sound: true
        };
        const result: string = await lsdl(URL, "downloads", options).then((): string => {
            return "success";
        });
        expect(result).toBe("success");
    }, 5000000);

    test('Main function (Sound Only Sticker)', async (): Promise<void> => {
        const URL: string = "https://store.line.me/stickershop/product/19654/ja";
        const options: { [key: string]: boolean } = {
            sound: true
        };
        const result: string = await lsdl(URL, "downloads", options).then((): string => {
            return "success";
        });
        expect(result).toBe("success");
    }, 5000000);

    test('Main function (Custom Sticker)', async (): Promise<void> => {
        const URL: string = "https://store.line.me/stickershop/product/17065/ja";
        const options: { [key: string]: boolean } = {
            custom: true
        };
        const result: string = await lsdl(URL, "downloads", options).then((): string => {
            return "success";
        });
        expect(result).toBe("success");
    }, 5000000);

    test('Main function (Manga Sticker)', async (): Promise<void> => {
        const URL: string = "https://store.line.me/stickershop/product/17610/ja";
        const options: { [key: string]: boolean } = {
            manga: true
        };
        const result: string = await lsdl(URL, "downloads", options).then((): string => {
            return "success";
        });
        expect(result).toBe("success");
    }, 5000000);

    test('Main function (404 Error)', async (): Promise<void> => {
        const URL: string = "https://store.line.me/stickershop/product/1761089089809809808/ja";
        const result: string | void = await lsdl(URL, "downloads").catch((): string => {
            return "404 Error";
        });
        expect(result).toBe("404 Error");
    }, 5000000);
});