import classnames from 'classnames';

import {
  h,
} from 'preact';

import styles from './style.scss';

export const GridContent = ({
  children,
  won,
}) => (
  <div className={classnames(
    styles.gridContent,
    'gridContent',
    { [styles.won]: won },
  )}>
    {children}
  </div>
);
