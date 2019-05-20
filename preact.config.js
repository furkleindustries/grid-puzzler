export default (config, env, helpers) => {
  delete config.entry.polyfills;
  config.output.filename = '[name].js';

  const { plugin } = helpers.getPluginsByName(config, 'ExtractTextPlugin')[0];
  plugin.options.disable = true;

  config.entry = [
    'preact-cli/lib/lib/entry',
    './index.js',
  ];

  if (process.env.window || !env.production) {
    config.output.library = 'GridPuzzler';
  }

  if (env.production) {
    config.output.libraryTarget = 'umd';
  }
};
