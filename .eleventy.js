const isProd = process.env.NODE_ENV === "production";

module.exports = function (eleventyConfig) {
  // Copie TOUT le dossier assets
  eleventyConfig.addPassthroughCopy("src/assets");
  
  // OU copiez chaque type séparément (plus sûr)
  eleventyConfig.addPassthroughCopy("src/assets/css");
  eleventyConfig.addPassthroughCopy("src/assets/js");
  eleventyConfig.addPassthroughCopy("src/assets/images");
  
  return {
    pathPrefix: isProd ? "/oj_gaudens/" : "/",
    dir: {
      input: "src",
      includes: "_includes",
      output: "docs"
    }
  };
};