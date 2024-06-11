module.exports = function(eleventyConfig) {
  
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addPassthroughCopy("CNAME");

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };

};
