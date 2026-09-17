import { defineConfig } from 'tsup';

export default defineConfig({
  tsconfig: 'tsconfig.build.json',
  entry: { index: 'src/index.ts', 'tokens/index': 'src/tokens/index.ts', styles: 'src/styles/index.css' },
  format: ['esm'],
  dts: true,
  splitting: true,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
  loader: { '.css': 'css' }
});
