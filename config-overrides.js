const { override, fixBabelImports, addLessLoader } = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      "primary-color": "#4267b2",
      "menu-dark-bg": "@primary-color",
      "layout-header-background": "@primary-color",
      "layout-sider-background": "#e9ebee",
      "layout-body-background": "#e9ebee",
      "menu-bg": "#e9ebee"
    }
  })
);
