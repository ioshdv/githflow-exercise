// Utilidades de texto básicas

function countWords(sentence) {
    if (typeof sentence !== "string") {
        throw new Error("Input must be a string");
    }
    return sentence.trim().split(\s+\).filter(Boolean).length;
}

function toUpper(Text) {
    if (typeof text !== "string") {
    throw new Error("Input must be a string");
    }
    return text.toUpperCase();
}

module.exports = { countWords, toUpper };
