import classnames from 'classnames';
import {
  getInverseAsPercentage,
} from '../../functions/getInverseAsPercentage';
import {
  GridItem,
} from '../GridItem';

import { h } from 'preact';

import styles from './style.scss';

export const GridColumn = ({
  rows,
  gridHeight,
  width,
  x,
}) => (
  <div
    className={classnames(styles.gridColumn, 'gridColumn')}
    style={{ flexBasis: getInverseAsPercentage(width) }}
  >
    {rows.map((row, y) => (
      <GridItem
        gridHeight={gridHeight}
        x={x}
        y={y}
      />
    ))}
  </div>
);
