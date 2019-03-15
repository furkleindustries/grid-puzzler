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
  state = {
    gridState: this.props.columns.map(() => (
      this.props.rows.map(() => ({ active: false }))
    )),
  };

  render = ({
    columns,
    rows,
  }, { gridState }) => (
    <div className={classnames(styles.grid, 'grid')}>
      <GridColumnLabels columns={columns} />

      <GridRowLabels rows={rows} />

      <GridContent>
        {columns.map((column, x) => (
          <GridColumn width={columns.length}>
            {rows.map((row, y) => {
              return (
                <GridItem
                  active={gridState[x][y].active}
                  disabled={!this.gridItemHasPermissionToActivate(x, y)}
                  clickGridItem={this.clickGridItem}
                  gridHeight={rows.length}
                  x={x}
                  y={y}
                />
              );
            })}
          </GridColumn>
        ))}
      </GridContent>
    </div>
  );

  clickGridItem = (x, y) => {
    if (!this.gridItemHasPermissionToActivate(x, y)) {
      return;
    }

    const gridState = Array.prototype.slice.call(this.state.gridState);
    gridState[x][y].active = !gridState[x][y].active;

    this.setState({ gridState });
  };

  gridItemHasPermissionToActivate = (x, y) => {
    const { gridState } = this.state;

    if (this.gridItemIsActive(x, y)) {
      return true;
    }

    for (let xIndex = 0; xIndex < gridState.length; xIndex += 1) {
      const column = gridState[xIndex];
      for (let yIndex = 0; yIndex < column.length; yIndex += 1) {
        const item = column[yIndex];
        if ((xIndex !== x || yIndex !== y) &&
            (xIndex === x || yIndex === y) &&
            item.active)
        {
          return false;
        }
      }
    }

    return true;
  };

  gridItemIsActive = (x, y) => this.state.gridState[x][y].active;
};
