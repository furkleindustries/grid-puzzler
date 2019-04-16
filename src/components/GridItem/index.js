import classnames from 'classnames';
import {
  getInverseAsPercentage,
} from '../../functions/getInverseAsPercentage';
import Button from 'preact-material-components/esm/Button';

import { h } from 'preact';

import styles from './style.scss';
import 'preact-material-components/Button/style.css';

const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

export const GridItem = ({
  active,
  children,
  className,
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
      className,
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
    <span>{`${(() => {
      const letter = letters[x];
      if (!letter) {
        throw new Error('X coordinate was out of boudns in GridItem.render.');
      }

      return letter;
    })()}${y + 1}`}</span>
    {children}
  </Button>
);
