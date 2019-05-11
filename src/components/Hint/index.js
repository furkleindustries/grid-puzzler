import classnames from 'classnames';

import { h } from 'preact';

import styles from './style.scss';

export const Hint = ({
  content,
  identifier,
}) => (
  <li
    className={classnames(styles.hint, 'hint')}
    data-hint-id={identifier}
  >
    {content}
  </li>
);
