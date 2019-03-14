import classnames from 'classnames';

import {
  h,
} from 'preact';

import styles from './style.scss';

export const GridContent = ({ children }) => (
  <div className={classnames(styles.gridContent, 'gridContent')}>
    {children}
  </div>
);
