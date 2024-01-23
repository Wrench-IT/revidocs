import { tags } from './../settings';

const metaTags: string = `
    <meta name="description" content="${tags.description}" />
    <meta name="author" content="${tags.author}" />
    <meta property="og:title" content="${tags.ogTitle}">
    <meta property="og:description" content="${tags.ogDescription}">
    <meta property="og:image" content="${tags.ogImage}">
    <meta property="og:url" content="${tags.ogUrl}">
    <meta name="twitter:title" content="${tags.twitterTitle}">
    <link rel="canonical" href="${tags.canonicalUrl}"/>`;

export default metaTags;
