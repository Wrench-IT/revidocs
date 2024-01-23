export const ghAccount = {
  username: 'wrench-it',
  repoName: 'revidocs',
  author: 'Firstname Lastname',
};

export const baseUrl = `https://${ghAccount.username}.github.io/${ghAccount.repoName}/`;

export const indexHtml = {
  lang: 'en',
  title: 'My custom title',
  description: 'My custom description',
  author: ghAccount.author,
  ogTitle: 'My custom Open Graph title',
  ogDescription: 'My custom Open Graph description',
  ogImage: 'https://example.com/image',
  ogUrl: baseUrl,
  twitterTitle: 'My custom Twitter title',
  canonicalUrl: baseUrl,
};
