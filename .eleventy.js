module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./pages");
  eleventyConfig.addPassthroughCopy("./pages/_data");
  eleventyConfig.addGlobalData("kai_placeholder", "**Kai (解)**");

  return {
    dir: {
      input: "./pages",
      output: "./docs",
      includes: "_includes",
    },
  };
};
