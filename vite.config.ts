import * as path from 'path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import macrosPlugin from 'vite-plugin-babel-macros';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), macrosPlugin()],
  define: {
    'process.env': process.env,
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src/') }],
  },
});
