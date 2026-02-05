const isProd = process.env.NODE_ENV === "production";

module.exports = function (eleventyConfig) {
  // Copie TOUT le dossier assets (CSS, JS, images)
  eleventyConfig.addPassthroughCopy("src/assets");
  
  return {
    pathPrefix: isProd ? "/oj-gaudens/" : "/",  // ⬅️ TIRET, pas underscore !
    dir: {
      input: "src",
      includes: "_includes",
      output: "docs"
    }
  };
};