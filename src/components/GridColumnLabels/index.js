import classnames from 'classnames';
import {
  getInverseAsPercentage,
} from '../../functions/getInverseAsPercentage';

import styles from './style.scss';

export const GridColumnLabels = ({
  columns,
  won,
}) => (
  <div className={classnames(
    styles.gridColumnLabels,
    'gridColumnLabels',
    { [styles.won]: won },
  )}>
    {columns.map(({ label }) => (
      <div
        className={classnames(styles.gridColumnLabel, 'gridColumnLabel')}
        style={{ flexBasis: getInverseAsPercentage(columns.length) }}
      >
        <strong>{label}</strong>
      </div>
    ))}
  </div>
);
