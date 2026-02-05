module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  
  return {
    pathPrefix: "/oj_gaudens/",  // ⬅️ UNDERSCORE, pas point !
    dir: {
      input: "src",
      includes: "_includes",
      output: "docs"
    }
  };
};