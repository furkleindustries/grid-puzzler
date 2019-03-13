import classnames from 'classnames';

import { h } from 'preact';

import styles from './style.scss';

export function Grid({ children }) {
  return (
    <div className={classnames(styles.grid, 'grid')}>
      {children}
    </div>
  );
}
