import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";

export default {
    entry: "src/assets/main.js",
    format: "iife",
    plugins: [ resolve({ main: true }), babel() ],
    dest: "out/assets/main.js"
};
