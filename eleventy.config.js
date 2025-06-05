import { HtmlBasePlugin } from "@11ty/eleventy";

export default async function(eleventyConfig) {
	// Configure Eleventy

    eleventyConfig.setInputDirectory("src");

    eleventyConfig.addPassthroughCopy("public");

    eleventyConfig.setOutputDirectory("docs");

    
    eleventyConfig.addPlugin(HtmlBasePlugin);

};

export const config = {
    pathPrefix: "/eleventy_githubpages_minimal/",
}