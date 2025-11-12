const assert = require('assert');
const { countWords, toUpper } = requiere('../code/textTools');

// Test para counWords
try {
    assert.strictEqual(countWords("Hola mundo"), 2);
    assert.strictEqual(countWords("  tres palabras aqui "), 3);
    console.log("countWords: OK");
} catch (err) {
    console.error("countWords: FAILED ->", err.message);
    process.exit(1);
}

// Test para toUpper
try {
    assert.strictEqual(toUpper("hola"), "HOLA");
    assert.strictEqual(toUpper("Git flow"), "GIT FLOW");
    console.log("toUpper: OK");
} catch (err) {
    console.error("toUpper: FAILED ->", err.message);
    process.exit(1);
}

// Test para validaciones
try {
    let failed = false;
    try { countWords(123); } catch { failed = true; }
    assert.ok(failed, "countWords should reject non-string");

    failed = false;
    try { toUpper(null); } catch { failed = true; }
    assert.ok(failed, "toUpper should reject non-string");

    console.log("validation tests: OK");
} catch (err) {
    console.error("validation tests: FAILED ->", err.message);
    process.exit(1);
}

console.log("All test passed!");
