import classnames from 'classnames';
import {
  getInverseAsPercentage,
} from '../../functions/getInverseAsPercentage';

import { h } from 'preact';

import styles from './style.scss';

export const GridColumn = ({
  children,
  width,
}) => (
  <div
    className={classnames(styles.gridColumn, 'gridColumn')}
    style={{ flexBasis: getInverseAsPercentage(width) }}
  >
    {children}
  </div>
);
