import classnames from 'classnames';

import styles from './style.scss';

export const GridRowLabels = ({ rows }) => (
  <div className={classnames(styles.gridRowLabels, 'gridRowLabels')}>
    <div>&nbsp;</div>
    {rows.map((row) => <div>{row.label}</div>)}
  </div>
);
