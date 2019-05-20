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
  GridItem,
} from '../GridItem';
import {
  GridRowLabels,
} from '../GridRowLabels';

import {
  Component,
  h,
} from 'preact';

import styles from './style.scss';

export class Grid extends Component {
  render = ({
    columns,
    getAlphaIdFromIntegerId,
    getRandomGridItemExplodeValue,
    greenOnWin,
    gridItemIsGreen,
    gridItemIsRed,
    redOnWin,
    rows,
    won,
  }) => (
    <div className={classnames(
      styles.grid,
      'grid',
      { [styles.won]: won },
    )}>
      <GridColumnLabels
        columns={columns}
        won={won}
      />

      <GridRowLabels
        rows={rows}
        won={won}
      />

      <GridContent won={won}>
        {columns.map((column, x) => (
          <GridColumn width={columns.length}>
            {rows.map((row, y) => (
              <GridItem
                getRandomGridItemExplodeValue={getRandomGridItemExplodeValue}
                green={gridItemIsGreen(x, y)}
                greenForWin={won && greenOnWin.includes(getAlphaIdFromIntegerId(x, y))}
                gridHeight={rows.length}
                red={gridItemIsRed(x, y)}
                redForWin={won && redOnWin.includes(getAlphaIdFromIntegerId(x, y))}
                won={won}
                x={x}
                y={y}
              />
            ))}
          </GridColumn>
        ))}
      </GridContent>
    </div>
  );
};
