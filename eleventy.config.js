/***********************************************
 * Demonstration site for the 
 * Eleventy Plugin Markdown Page Links plugin
 * 
 * By John M. Wargo
 * https://johnwargo.com
 ***********************************************/

import { eleventyImageTransformPlugin } from '@11ty/eleventy-img';
import pluginGallery from "./eleventy.config.gallery.js";

export default async function (eleventyConfig) {

	// https://www.aleksandrhovhannisyan.com/blog/eleventy-image-transform/
	eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
		// which file extensions to process
		extensions: 'html',
		// optional, output image formats
		formats: ['jpg', 'webp'],
		// optional, output image widths
		widths: ['auto', 400, 800, 1024],
		// optional, attributes assigned on <img> override these values.
		defaultAttributes: {
			loading: 'lazy',
			decoding: 'async'
		}
	});
	eleventyConfig.addPlugin(pluginGallery);

	eleventyConfig.addPassthroughCopy("src/assets/");
	eleventyConfig.addPassthroughCopy("src/images/");

	return {
		dir: {
			input: 'src',
			output: "_site",
			includes: "_includes",
			layouts: "_layouts",
			data: "_data"
		}
	}

};
