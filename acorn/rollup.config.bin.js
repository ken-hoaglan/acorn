import buble from "rollup-plugin-buble"

export default {
  entry: "acorn/src/bin/acorn.js",
  dest: "acorn/dist/bin.js",
  format: "cjs",
  external: ["fs", "path", "acorn"],
  paths: {acorn: "./acorn.js"},
  plugins: [buble()]
}
