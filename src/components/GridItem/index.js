import classnames from 'classnames';
import {
  getInverseAsPercentage,
} from '../../functions/getInverseAsPercentage';
import {
  letters,
} from '../../letters';
import {
  assertValid,
} from 'ts-assertions';

import { h } from 'preact';

import styles from './style.scss';

export const GridItem = ({
  children,
  className,
  getRandomGridItemExplodeValue,
  green,
  greenForWin,
  gridHeight,
  red,
  redForWin,
  won,
  x,
  y,
  ...otherProps
}) => (
  <div
    {...otherProps}
    className={classnames(
      styles.gridItem,
      'gridItem',
      className,
      (() => {
        if (greenForWin) {
          return styles.green;
        } else if (redForWin) {
          return styles.red;
        } else if (green && red) {
          return styles.yellow;
        } else if (green) {
          return styles.green;
        } else if (red) {
          return styles.red;
        }

        return null;
      })(),
      { [styles.won]: won },
    )}
    style={{
      height: getInverseAsPercentage(gridHeight),
      transform: (
        `translate(${
          won ?
            `${getRandomGridItemExplodeValue()}px, ` +
              `${getRandomGridItemExplodeValue()}px` :
            '0px, 0px'
        })`
      ),
    }}
  >
    <span>{`${assertValid(
      letters[x],
      'X coordinate was out of boudns in GridItem.render.',
    )}${y + 1}`}</span>
    {children}
  </div>
);
