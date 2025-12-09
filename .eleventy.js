module.exports = function (eleventyConfig) {
  const add_data = eleventyConfig.addGlobalData.bind(eleventyConfig);

  eleventyConfig.addPassthroughCopy("./pages");
  eleventyConfig.addPassthroughCopy("./pages/_data");
  
  add_data("kai_placeholder", "Kai (解)");
  add_data("year_range", `2025/${new Date().getFullYear()}`);
  
  add_data("company_legal_name", "COMING SOON");
  add_data("company_display_name", "HARMONY連");
  add_data("company_vat", "COMING SOON");
  add_data("company_residence", "COMING SOON");

  return {
    dir: {
      input: "./pages",
      output: "./docs",
      includes: "_includes",
    },
  };
};
