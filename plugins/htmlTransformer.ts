import { indexHtml, baseUrl } from '../settings';
import metaTags from './metaTags';

const htmlTransformer = () => {
  return {
    name: 'html-transformer',
    transformIndexHtml(html: string): string {
      return html
        .replace(/(<html lang="(.*?)">)/, `<html lang="${indexHtml.lang}">`)
        .replace(
          /(<link rel="icon" type="image\/svg\+xml" href="(.*?)" \/>)/,
          `<link rel="icon" type="image/svg+xml" href="${baseUrl}favicon.svg" />`,
        )
        .replace(/(<title>(.*?)<\/title>)/, `<title>${indexHtml.title}</title>`)
        .replace(/(<title>(.*?)<\/title>)/, `$1${metaTags}`);
    },
  };
};

export default htmlTransformer;
