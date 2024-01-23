import { tags } from '../settings';
import metaTags from './metaTags';

const htmlTransformer = () => {
  return {
    name: 'html-transformer',
    transformIndexHtml(html: string): string {
      return html
        .replace(/(<html lang="en">)/, `<html lang="${tags.lang}">`)
        .replace(/(<title>(.*?)<\/title>)/, `<title>${tags.title}</title>`)
        .replace(/(<title>(.*?)<\/title>)/, `$1${metaTags}`);
    },
  };
};

export default htmlTransformer;
