import classnames from 'classnames';
import {
  Hint,
} from '../Hint';

import { h } from 'preact';

import styles from './style.scss';

export const Hints = ({ hints }) => (
  <ul className={classnames(styles.hints, 'hints')}>
    {hints.map(({
      identifier,
      ...hint,
    }, index) => (
      <Hint
        {...hint}
        identifier={identifier || index}
      />
    ))}
  </ul>
)

