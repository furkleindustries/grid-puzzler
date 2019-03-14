import classnames from 'classnames';
import {
  GridColumn,
} from '../GridColumn';
import {
  GridColumnLabels,
} from '../GridColumnLabels';
import {
  GridContent,
} from '../GridContent';
import {
  GridRowLabels,
} from '../GridRowLabels';

import { h } from 'preact';

import styles from './style.scss';

export const Grid = ({
  columns,
  rows,
}) => (
  <div className={classnames(styles.grid, 'grid')}>
    <GridColumnLabels columns={columns} />

    <GridRowLabels rows={rows} />

    <GridContent>
      {columns.map((column, index) => (
        <GridColumn
          column={column}
          gridHeight={rows.length}
          rows={rows}
          width={columns.length}
          x={index}
        />
      ))}
    </GridContent>
  </div>
);
