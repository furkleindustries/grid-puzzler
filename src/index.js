import 'preact-cli/lib/lib/webpack/polyfills';

import habitatFactory from 'preact-habitat';
import Widget from './components/GridPuzzler';

import { h } from 'preact';

habitatFactory(Widget).render({
  clean: true,
  selector: `[data-widget-host='habitat']`,
});
