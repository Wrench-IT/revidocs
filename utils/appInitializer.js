import fs from 'fs';
import routes from '../settings/routes.js';
import typography from './typography.js';

const linkToContentConverter = (link) =>
  link.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());

const routesGenerator = (routes) => {
  routes.map((route) => {
    route.content =
      route.link !== '' ? linkToContentConverter(route.link) : 'home';
  });
};

const routesTsGenerator = (routes) => {
  let routesTs = '';

  for (const route of routes) {
    routesTs += `import ${route.content} from './content/${route.content}';\n`;
  }

  const routesStr = JSON.stringify(routes, null, 2).replace(
    /"content": "(.*?)"/g,
    '"content": $1',
  );

  routesTs += `\nconst routes = ${routesStr};\n\nexport default routes;\n`;
  fs.writeFile('./src/routes.ts', routesTs, (err) => {
    if (err) throw err;
    console.log('File routes.ts was successfully created in ./src.');
  });
};

const pagesGenerator = (routes) => {
  for (const route of routes) {
    const fileContent = `const ${route.content} = \`${typography}\`;\nexport default ${route.content};\n`;

    if (!fs.existsSync(`./src/content/${route.content}.ts`)) {
      fs.writeFile(`./src/content/${route.content}.ts`, fileContent, (err) => {
        if (err) throw err;
        console.log(
          `File ${route.content}.ts was successfully created in ./src/content.`,
        );
      });
    } else {
      console.log(`File ${route.content}.ts already exists in ./src/content.`);
    }
  }
};

const appInitializer = (routes) => {
  routesGenerator(routes);
  routesTsGenerator(routes);
  pagesGenerator(routes);
};

appInitializer(routes);
