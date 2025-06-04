export default async function(eleventyConfig) {
	// Configure Eleventy

    eleventyConfig.setInputDirectory("src");

    eleventyConfig.addPassthroughCopy("public");

    eleventyConfig.setOutputDirectory("docs");
};
