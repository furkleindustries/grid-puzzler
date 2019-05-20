import classnames from 'classnames';

import { h } from 'preact';

import styles from './style.scss';

export const Hint = ({
  active,
  clickHint,
  content,
  identifier,
  won,
}) => (
  <li
    className={classnames(
      styles.hint,
      'hint',
      {
        [styles.active]: active,
        [styles.won]: won,
      },
    )}

    data-hint-id={identifier}
    onClick={() => clickHint(identifier)}
  >

    <input
      checked={active}
      className={classnames(styles.hintCheckbox, 'hintCheckbox')}
      onClick={() => clickHint(identifier)}
      type="checkbox"
      style={{ pointerEvents: 'none' }}
    />

    <label
      className={classnames(styles.hintLabel, 'hintLabel')}
    >
      {content}
    </label>
  </li>
);
