import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";

export default [
  {
    input: "./src/index.ts",
    output: {
      dir: "dist/miniprogram_dist",
      format: "esm",
      entryFileNames: "[name].js"
    },
    plugins: [resolve(), commonjs(), typescript(), terser()]
  }
];
