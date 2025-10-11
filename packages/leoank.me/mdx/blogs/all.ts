/**
 * We are using cloudflare worker to host the website.
 * Cloudflare worker doesn't support fs. {@link https://developers.cloudflare.com/workers/runtime-apis/nodejs/#nodejs-api-polyfills}
 * So, we are keeping the record of all the blogs here.
 */
export const allBlogPostSlug = ["welcome", "welcome2"];
