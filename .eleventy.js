const isProd = process.env.NODE_ENV === "production";

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  
  return {
    pathPrefix: isProd ? "/oj.gaudens/" : "/",  // ⬅️ POINT, pas tiret !
    dir: {
      input: "src",
      includes: "_includes",
      output: "docs"
    }
  };
};