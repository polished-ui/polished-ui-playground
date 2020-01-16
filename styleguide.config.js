module.exports = {
  components: "src/**/[A-Z]*.js",
  theme: "styleguide.theme.js",
  styles: "styleguide.styles.js",
  pagePerSection: true,
  sections: [
    {
      name: "Core",
      components: "src/components/**/*.js",
      exampleMode: "hide",
    },
  ],
}
