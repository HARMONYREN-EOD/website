const { exec } = require("child_process");

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

  eleventyConfig.on("afterBuild", () => {
    console.log("Starting Python HTTP server on 0.0.0.0:8081 ...");
    const server = exec(
      "python.exe -m http.server 8081 --bind 0.0.0.0",
      { cwd: "./docs" }
    );

    server.stdout.on("data", (data) => console.log(data));
    server.stderr.on("data", (data) => console.error(data));
    server.on("close", (code) => console.log(`Server exited with code ${code}`));
  });

  return {
    dir: {
      input: "./pages",
      output: "./docs",
      includes: "_includes",
    },
  };
};
