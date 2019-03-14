import classnames from 'classnames';
import {
  getInverseAsPercentage,
} from '../../functions/getInverseAsPercentage';

import styles from './style.scss';

export const GridColumnLabels = ({ columns }) => (
  <div className={classnames(styles.gridColumnLabels, 'gridColumnLabels')}>
    {columns.map((column) => (
      <div
        className={classnames(styles.gridColumnLabel, 'gridColumnLabel')}
        style={{ flexBasis: getInverseAsPercentage(columns.length) }}
      >
        {column.label}
      </div>
    ))}
  </div>
);
