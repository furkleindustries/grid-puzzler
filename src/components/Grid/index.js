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
  assertValid,
} from 'ts-assertions';

import {
  Component,
  h,
} from 'preact';

import styles from './style.scss';

const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

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
                disabled={!this.gridItemHasPermissionToActivate(x, y)}
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

  componentDidMount = () => {
    const {
      solutions,
      winCallback,
    } = this.props;

    const { gridState } = this.state;
    if (this.hasValidSolution()) {
      winCallback(gridState, solutions)
    }
  };

  clickGridItem = (x, y) => {
    const { winCallback } = this.props;

    if (!this.gridItemHasPermissionToActivate(x, y)) {
      return;
    }

    const gridState = Array.prototype.slice.call(this.state.gridState);
    gridState[x][y].active = !gridState[x][y].active;

    this.setState({ gridState });
    if (this.hasValidSolution(gridState)) {
      winCallback(this.props.gridState, this.props.solutions);
    }
  };

  getIntegerIdFromAlphaId = (part) => assertValid(
    letters.indexOf(String(part).toLowerCase()),
    'Part argument to Grid.getIntegerFromAlphaId was not in band.',
    (index) => index >= 0,
  );

  getCoordsFromId = (id) => id.split('').map((idPart) => (
    /^\d$/.test(idPart) ?
      Number(idPart) - 1 :
      this.getIntegerIdFromAlphaId(idPart)
  ));

  getGridItemFromCoords = (x, y) => assertValid(
    this.state.gridState &&
      this.state.gridState[x] &&
      this.state.gridState[x][y],
  );

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

  gridItemIsActive = (x, y) => this.getGridItemFromCoords(x, y).active;

  hasValidSolution = () => (
    this.props.solutions.sort().reduce((notFailed, solutionId) => (
      notFailed && this.gridItemIsActive(
        ...this.getCoordsFromId(solutionId)
      )
    ), true)
  );
};
