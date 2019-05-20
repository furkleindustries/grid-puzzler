import classnames from 'classnames';
import {
  Hint,
} from '../Hint';

import { h } from 'preact';

import styles from './style.scss';

export const Hints = ({
  clickHint,
  hints,
  hintState,
  won,
}) => (
  <ul className={classnames(
    styles.hints,
    'hints',
    { [styles.won]: won },
  )}>
    {hints.map(({
      identifier,
      ...hint,
    }, index) => (
      <Hint
        {...hint}
        active={hintState[index].active}
        clickHint={clickHint}
        identifier={index}
        won={won}
      />
    ))}
  </ul>
)

