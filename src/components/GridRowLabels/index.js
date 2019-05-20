import classnames from 'classnames';
import {
  getInverseAsPercentage,
} from '../../functions/getInverseAsPercentage';

import styles from './style.scss';

export const GridRowLabels = ({
  rows,
  won,
}) => (
  <div className={classnames(
    styles.gridRowLabels,
    'gridRowLabels',
    { [styles.won]: won },
  )}>
    {rows.map((row) => (
      <div
        className={classnames(styles.gridRowLabel, 'gridRowLabel')}
        style={{ flexBasis: getInverseAsPercentage(rows.length) }}
      >
        <strong>{row.label}</strong>
      </div>
    ))}
  </div>
);
