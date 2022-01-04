const { TestWatcher } = require("jest")
const Potion = require("../lib/Potion.js")

//test if the potion object has a name and value
test("creates a health potion object", () => {
    const potion = new Potion();

    expect(potion.name).toEqual(expect.any(String));
    expect(potion.name.length).toBeGreaterThan(0);
    expect(potion.value).toEqual(expect.any(Number));
});

