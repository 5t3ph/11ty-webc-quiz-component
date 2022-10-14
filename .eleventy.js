const { EleventyRenderPlugin } = require("@11ty/eleventy");

const pluginWebc = require("@11ty/eleventy-plugin-webc");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPlugin(pluginWebc, {
    components: "src/_includes/components/**/*.webc",
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
