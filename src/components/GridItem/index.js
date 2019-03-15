import classnames from 'classnames';
import {
  getInverseAsPercentage,
} from '../../functions/getInverseAsPercentage';
import Button from 'preact-material-components/esm/Button';

import { h } from 'preact';

import styles from './style.scss';
import 'preact-material-components/Button/style.css';

export const GridItem = ({
  active,
  children,
  clickGridItem,
  gridHeight,
  outlined = true,
  ripple = true,
  x,
  y,
  ...otherProps
}) => (
  <Button
    {...otherProps}
    className={classnames(
      styles.gridItem,
      'gridItem',
      /* Fix weird bug where ripple only works first time. */
      'mdc-ripple-upgraded',
      { [styles.active]: active },
      { active },
    )}
    onClick={() => clickGridItem(x, y)}
    outlined={outlined}
    ripple={ripple}
    style={{ height: getInverseAsPercentage(gridHeight) }}
  >
    <span>{`${x}.${y}`}</span>
    {children}
  </Button>
);
