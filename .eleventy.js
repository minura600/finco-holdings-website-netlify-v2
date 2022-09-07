module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");

  // Returns work items, sorted by display order
  eleventyConfig.addCollection('brands', collection => {
    return collection
      .getFilteredByGlob('./src/portfolio/*.md')
      .sort((a, b) => (Number(a.data.displayOrder) > Number(b.data.displayOrder) ? 1 : -1));
    });

  return {
    passthroughFileCopy: true,
    markdownTemplateEngine: "njk",
    templateFormats: ["html", "njk", "md"],
    dir: {
      input: "src",
      output: "_site",
      include: "includes",
    },
  };
};
