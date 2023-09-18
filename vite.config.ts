import { resolve } from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/guide/build.html#library-mode
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'react-native-worklet-functions',
      fileName: 'react-native-worklet-functions',
    },
  },
  plugins: [],
});