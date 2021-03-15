import * as lsdl from '../src/main';

describe('All async function', () => {
    test('Async function (Default Sticker)', (): void => {
        expect(lsdl.async("7457240", "downloads")).toBeUndefined();
    }, 5000000);

    test('Async function (404 Error)', () => {
        const URL: string = "nviusr83749huivih8798JUhdbGT367874876839736gyuyusdg7q8UI98bHQhIUcnsudiniuhoi";
        expect((): void => {
            lsdl.async(URL, "downloads")
        }).toThrow('Subprocess failed: 1');
    }, 5000000);
});