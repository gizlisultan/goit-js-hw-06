class StringBuilder {
    #value
    constructor(initialValue) {
        this.#value = initialValue
    };
    getValue() {
        return this.#value;
    };
    padEnd(srt) {
        this.#value = this.#value + srt;
    };
    padStart(str) {
        this.#value = str + this.#value; 
    };
    padBoth(str) {
        this.#value = str + this.#value + str;
    }
}
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="