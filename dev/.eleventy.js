module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("pages/js");
  eleventyConfig.addPassthroughCopy("pages/css");
  eleventyConfig.addPassthroughCopy("pages/fonts");
  eleventyConfig.addPassthroughCopy("pages/assets");
  
  eleventyConfig.addGlobalData("founder", "Kai (解)");

  return {
    dir: {
      input: "pages",
      output: ".."
    }
  };
};