import 'preact-cli/lib/lib/webpack/polyfills';

import habitatFactory from 'preact-habitat';
import {
  GridPuzzler,
} from './components/GridPuzzler';

/* Do not remove. This must be in scope for transpiled code to work. */
import { h } from 'preact';

habitatFactory(GridPuzzler).render({
  clean: true,
  selector: `[data-widget-host='grid-puzzler']`,
});
