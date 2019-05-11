import classnames from 'classnames';
import config from '../../../local-config';
import {
  Grid,
} from '../Grid';
import {
  Hints,
} from '../Hints';

import { h } from 'preact';

import styles from './style.scss';

export const GridPuzzler = ({
  columns = config.grid.columns,
  hints = config.hints,
  rows = config.grid.rows,
  solutions = config.solutions,
  winCallback = config.winCallback,
}) => (
  <div className={classnames(styles.gridPuzzler, 'gridPuzzler')}>
    <Grid
      columns={columns}
      rows={rows}
      solutions={solutions}
      winCallback={winCallback}
    />

    <Hints hints={hints} />
  </div>
);
