export default (
  config,
  { production },
  helpers,
) => {
  const { output } = config;

  output.filename = '[name].js';

  const [
    {
      plugin: { options },
    },
  ] = helpers.getPluginsByName(config, 'ExtractTextPlugin');

  options.disable = true;

  config.entry = [
    'preact-cli/lib/lib/entry',
    './index.js',
  ];

  if (process.env.window || !production) {
    output.library = 'GridPuzzler';
  }

  if (production) {
    output.libraryTarget = 'umd';
  }
};
