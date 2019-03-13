import classnames from 'classnames';

import { h } from 'preact';

import styles from './style.scss';

export const GridItem = ({
  children,
  x,
  y,
}) => (
  <div className={classnames(styles.gridItem, 'gridItem')}>
    <span>{`${x}.${y}`}</span>
    {children}
  </div>
);
