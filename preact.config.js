export default (config, env, helpers) => {
  delete config.entry.polyfills;
  config.output.filename = '[name].js';

  const { plugin } = helpers.getPluginsByName(config, 'ExtractTextPlugin')[0];
  plugin.options.disable = true;

  if (env.production) {
    config.output.libraryTarget = 'umd';
  }
};
