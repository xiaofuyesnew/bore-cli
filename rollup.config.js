import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'

export default {
  input: 'src/app.ts',
  output: {
    file: 'lib/index.js',
    format: 'esm',
    name: 'index',
    sourcemap: true,
  },
  plugins: [
    typescript({
      exclude: 'node_modules/**',
    }),
    json(),
    resolve({
      include: 'node_modules/**',
      preferBuiltins: true,
    }),
    commonjs(),
  ],
  external: ['ora'],
}
