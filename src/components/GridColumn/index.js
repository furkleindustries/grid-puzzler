import classnames from 'classnames';

import { h } from 'preact';

import styles from './style.scss';

export function GridColumn({
  children,
  label,
}) {
  return (
    <div className={classnames(styles.gridColumn, 'gridColumn')}>
      <span>{label}</span>
      {children}
    </div>
  );
}
