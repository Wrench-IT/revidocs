import { indexHtml } from '../settings/basic';

const metaTags: string = `
    <meta name="description" content="${indexHtml.description}" />
    <meta name="author" content="${indexHtml.author}" />
    <meta property="og:title" content="${indexHtml.ogTitle}">
    <meta property="og:description" content="${indexHtml.ogDescription}">
    <meta property="og:image" content="${indexHtml.ogImage}">
    <meta property="og:url" content="${indexHtml.ogUrl}">
    <meta name="twitter:title" content="${indexHtml.twitterTitle}">
    <link rel="canonical" href="${indexHtml.canonicalUrl}"/>
    <!-- Start redirect to SPA -->
    <script type="text/javascript">
      (function(l) {
        if (l.search[1] === '/' ) {
          var decoded = l.search.slice(1).split('&').map(function(s) { 
            return s.replace(/~and~/g, '&')
          }).join('?');
          window.history.replaceState(null, null,
              l.pathname.slice(0, -1) + decoded + l.hash
          );
        }
      }(window.location))
    </script>
    <!-- End redirect to SPA -->`;

export default metaTags;
