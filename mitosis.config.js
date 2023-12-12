/** @type {import('@builder.io/mitosis').MitosisConfig} */
module.exports = {
  files: "src/**",
  dest: "./lib",
  targets: ["vue3", "vue2", "react", "taro"],
  options: {
    vue3: {
      api: "composition",
    },
    react: {
      stylesType: "styled-components",
    },
  },
};
