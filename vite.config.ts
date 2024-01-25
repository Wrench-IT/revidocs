import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { baseUrl } from './settings/basic';
import htmlTransformer from './plugins/htmlTransformer';

// https://vitejs.dev/config/
export default defineConfig({
  base: baseUrl,
  plugins: [react(), htmlTransformer()],
});
