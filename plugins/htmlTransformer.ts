import { indexHtml } from '../settings';
import metaTags from './metaTags';

const htmlTransformer = () => {
  return {
    name: 'html-transformer',
    transformIndexHtml(html: string): string {
      return html
        .replace(/(<html lang="en">)/, `<html lang="${indexHtml.lang}">`)
        .replace(/(<title>(.*?)<\/title>)/, `<title>${indexHtml.title}</title>`)
        .replace(/(<title>(.*?)<\/title>)/, `$1${metaTags}`);
    },
  };
};

export default htmlTransformer;
