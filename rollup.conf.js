const { terser } = require('rollup-plugin-terser');
const { getRollupPlugins, getExternal, DIST } = require('./scripts/util');
const pkg = require('./package.json');

const BANNER = `/*! ${pkg.name} v${pkg.version} | ${pkg.license} License */`;

const globalList = [
  'd3',
];
const externalList = [
  ...globalList,
  'fs',
  'path',
  'open',
  'remarkable',
  'd3-flextree',
  './template',
  './util',
];
const bundleOptions = {
  extend: true,
  esModule: false,
};
const rollupConfig = [
  {
    input: {
      input: 'src/index.ts',
      plugins: getRollupPlugins(),
      external: getExternal(externalList),
    },
    output: {
      format: 'cjs',
      file: `${DIST}/index.js`,
    },
  },
  {
    input: {
      input: 'src/template.ts',
      plugins: getRollupPlugins(),
      external: getExternal(externalList),
    },
    output: {
      format: 'cjs',
      file: `${DIST}/template.js`,
    },
  },
  {
    input: {
      input: 'src/util.ts',
      plugins: getRollupPlugins(),
      external: getExternal(externalList),
    },
    output: {
      format: 'cjs',
      file: `${DIST}/util.js`,
    },
  },
  {
    input: {
      input: 'src/transform.ts',
      plugins: getRollupPlugins(),
      external: getExternal(externalList),
    },
    output: {
      format: 'cjs',
      file: `${DIST}/transform.common.js`,
      ...bundleOptions,
    },
  },
  {
    input: {
      input: 'src/transform.ts',
      plugins: getRollupPlugins(),
      external: globalList,
    },
    output: {
      format: 'iife',
      file: `${DIST}/transform.js`,
      name: 'markmap',
      ...bundleOptions,
    },
    minify: true,
  },
  {
    input: {
      input: 'src/view.ts',
      plugins: getRollupPlugins(),
      external: getExternal(externalList),
    },
    output: {
      format: 'cjs',
      file: `${DIST}/view.common.js`,
      ...bundleOptions,
    },
  },
  {
    input: {
      input: 'src/view.ts',
      plugins: getRollupPlugins(),
      external: globalList,
    },
    output: {
      format: 'iife',
      file: `${DIST}/view.js`,
      name: 'markmap',
      globals: {
        d3: 'd3',
      },
      ...bundleOptions,
    },
    minify: true,
  },
];
// Generate minified versions
rollupConfig.filter(({ minify }) => minify)
.forEach(config => {
  rollupConfig.push({
    input: {
      ...config.input,
      plugins: [
        ...config.input.plugins,
        terser(),
      ],
    },
    output: {
      ...config.output,
      file: config.output.file.replace(/\.js$/, '.min.js'),
    },
  });
});

rollupConfig.forEach((item) => {
  item.output = {
    indent: false,
    // If set to false, circular dependencies and live bindings for external imports won't work
    externalLiveBindings: false,
    ...item.output,
    ...BANNER && {
      banner: BANNER,
    },
  };
});

module.exports = rollupConfig.map(({ input, output }) => ({
  ...input,
  output,
}));
