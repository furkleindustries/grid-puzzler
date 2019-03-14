import classnames from 'classnames';
import config from '../../config';
import {
  Grid,
} from '../Grid';

import { h } from 'preact';

import styles from './style.scss';

const GridPuzzler = ({
  columns = config.grid.columns,
  rows = config.grid.rows,
}) => (
  <div className={classnames(styles.gridPuzzler, 'gridPuzzler')}>
    <Grid
      columns={columns}
      rows={rows}
    />
  </div>
);

export default GridPuzzler;
