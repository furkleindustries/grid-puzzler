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
            {rows.map((row, y) => (
              <GridItem
                active={gridState[x][y].active}
                clickGridItem={this.clickGridItem}
                gridHeight={rows.length}
                x={x}
                y={y}
              />
            ))}
          </GridColumn>
        ))}
      </GridContent>
    </div>
  );

  clickGridItem = (x, y) => {
    if (!this.gridItemHasPermissionToClick(x, y)) {
      return;
    }

    const gridState = Array.prototype.slice.call(this.state.gridState);
    gridState[x][y].active = !gridState[x][y].active;

    this.setState({ gridState });
  };

  gridItemHasPermissionToClick = (x, y) => (
    true
  );

  gridItemIsActive = (x, y) => this.state.gridState[x][y].active;
};
