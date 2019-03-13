import classnames from 'classnames';
import config from '../../config';
import {
  Grid,
} from '../Grid';
import {
  GridColumn,
} from '../GridColumn';
import {
  GridItem,
} from '../GridItem';
import {
  GridRowLabels,
} from '../GridRowLabels';

import { h } from 'preact';

import styles from './style.scss';

const GridPuzzler = ({
  columns = config.grid.columns,
  rows = config.grid.rows,
}) => (
  <div className={classnames(styles.gridPuzzler, 'gridPuzzler')}>
    <Grid>
      <GridRowLabels rows={rows} />

      {(() => {
        let buffer = [];
        for (let x = 0; x < columns.length; x += 1) {
          buffer.push(
            <GridColumn
              label={columns[x].label}
              x={x}
            >
              {(() => {
                let columnBuffer = [];
                for (let y = 0; y < rows.length; y += 1) {
                  columnBuffer.push(
                    <GridItem
                      x={x}
                      y={y}
                    />
                  );
                }

                return columnBuffer;
              })()}
            </GridColumn>
          );
        }

        return buffer;
      })()}
    </Grid>
  </div>
);

export default GridPuzzler;
