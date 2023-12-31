// babel-plugin-macros.config.js
// In .babelrc.js
module.exports = {
  presets: [["next/babel", { "preset-react": { runtime: "automatic" } }]],
  plugins: [
    "babel-plugin-macros",
    ["babel-plugin-styled-components", { ssr: true }],
  ],
};
