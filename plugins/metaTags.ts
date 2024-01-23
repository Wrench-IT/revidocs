import { indexHtml } from './../settings';

const metaTags: string = `
    <meta name="description" content="${indexHtml.description}" />
    <meta name="author" content="${indexHtml.author}" />
    <meta property="og:title" content="${indexHtml.ogTitle}">
    <meta property="og:description" content="${indexHtml.ogDescription}">
    <meta property="og:image" content="${indexHtml.ogImage}">
    <meta property="og:url" content="${indexHtml.ogUrl}">
    <meta name="twitter:title" content="${indexHtml.twitterTitle}">
    <link rel="canonical" href="${indexHtml.canonicalUrl}"/>`;

export default metaTags;
