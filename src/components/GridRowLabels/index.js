import classnames from 'classnames';
import {
  getInverseAsPercentage,
} from '../../functions/getInverseAsPercentage';

import styles from './style.scss';

export const GridRowLabels = ({ rows }) => (
  <div className={classnames(styles.gridRowLabels, 'gridRowLabels')}>
    {rows.map((row) => (
      <div
        className={classnames(styles.gridRowLabel, 'gridRowLabel')}
        style={{ flexBasis: getInverseAsPercentage(rows.length) }}
      >
        {row.label}
      </div>
    ))}
  </div>
);
