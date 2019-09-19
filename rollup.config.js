import typescript from 'rollup-plugin-typescript';
import babel from 'rollup-plugin-babel';
import scss from 'rollup-plugin-scss';
import { terser } from 'rollup-plugin-terser';
import svg from 'rollup-plugin-svg';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];
export default {
  input: './src/components/index.tsx',
  external: ['react', 'uuid', 'react-svg'],
  output: {
    file: './dist/bundle.js',
    format: 'umd',
    name: 'react-smart-tabs',
    globals: {
      react: 'React',
      uuid: 'uuid',
      'react-svg': 'ReactSVG'
    }
  },
  plugins: [
    babel({ extensions, include: ['./src/components/tabs/**/*'] }),
    typescript({
      typescript: require('typescript')
    }),
    scss({ output: './dist/bundle.css' }),
    terser(),
    svg()
  ]
};
