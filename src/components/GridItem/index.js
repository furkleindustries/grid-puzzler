import classnames from 'classnames';
import {
  getInverseAsPercentage,
} from '../../functions/getInverseAsPercentage';
import Button from 'preact-material-components/esm/Button';

import { h } from 'preact';

import styles from './style.scss';
import 'preact-material-components/Button/style.css';

export const GridItem = ({
  children,
  gridHeight,
  x,
  y,
}) => (
  <Button
    className={classnames(styles.gridItem, 'gridItem')}
    ripple={true}
    style={{ height: getInverseAsPercentage(gridHeight) }}
  >
    <span>{`${x}.${y}`}</span>
    {children}
  </Button>
);
