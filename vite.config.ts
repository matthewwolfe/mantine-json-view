import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: 'components',
        replacement: path.resolve(__dirname, 'src/components'),
      },
      {
        find: 'context',
        replacement: path.resolve(__dirname, 'src/context'),
      },
      {
        find: 'hooks',
        replacement: path.resolve(__dirname, 'src/hooks'),
      },
      {
        find: 'parser',
        replacement: path.resolve(__dirname, 'src/parser'),
      },
    ],
  },
});
