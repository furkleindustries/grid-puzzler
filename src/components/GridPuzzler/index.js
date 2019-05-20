import classnames from 'classnames';
import config from '../../../local-config';
import {
  Grid,
} from '../Grid';
import {
  Hints,
} from '../Hints';
import {
  letters,
} from '../../letters';
import {
  assertValid,
} from 'ts-assertions';

import {
  h,
  Component,
} from 'preact';

import styles from './style.scss';

export class GridPuzzler extends Component {
  state = {
    hintState: [],
    won: false,
  };

  constructor(props) {
    super(props);

    Object.assign(this.props, {
      columns: this.props.columns || config.grid.columns,
      hints: this.props.hints || config.hints,
      rows: this.props.rows || config.grid.rows,
      solutions: (this.props.solutions || config.solutions).map(this.coerceSolutions),
      greenOnWin: (this.props.greenOnWin || config.greenOnWin).map(
        this.coerceSolutions,
      ),

      redOnWin: (this.props.redOnWin || config.redOnWin).map(
        this.coerceSolutions,
      ),

      winCallback: this.props.winCallback || config.winCallback,
    });

    this.state.hintState = this.props.hints.map((never, identifier) => ({
      identifier,
      active: false,
    }), {});
  }

  coerceSolutions = (solution) => (
    Number.isNaN(Number(solution)) ? solution : solution - 1
  );

  render = (
    {
      columns,
      greenOnWin,
      hints,
      redOnWin,
      rows,
    },
    {
      hintState,
      won,
    },
  ) => (
    <div className={classnames(
      styles.gridPuzzler,
      'gridPuzzler',
      { [styles.won]: won },
    )}>
      <Grid
        columns={columns}
        getAlphaIdFromIntegerId={this.getAlphaIdFromIntegerId}
        getRandomGridItemExplodeValue={this.getRandomGridItemExplodeValue}
        greenOnWin={greenOnWin}
        gridItemIsGreen={this.gridItemIsGreen}
        gridItemIsRed={this.gridItemIsRed}
        redOnWin={redOnWin}
        rows={rows}
        won={won}
      />

      <Hints
        clickHint={this.clickHint}
        hints={hints}
        hintState={hintState}
        won={won}
      />
    </div>
  );

  getAlphaIdFromIntegerId = (x, y) => `${letters[x].toUpperCase()}${y + 1}`;

  getIntegerIdFromAlphaId = (part) => assertValid(
    letters.indexOf(String(part).toLowerCase()),
    `Argument to GridPuzzler.getIntegerFromAlphaId (${part}) was not in band.`,
    (index) => index >= 0,
  );

  getCoordsFromId = (id) => id.split('').map((idPart) => (
    /^\d$/.test(idPart) ?
      Number(idPart) - 1 :
      this.getIntegerIdFromAlphaId(idPart)
  ));

  getGridItemFromCoords = (x, y) => assertValid(
    this.state.hintState &&
      this.state.hintState[x] &&
      this.state.hintState[x][y],
    `The grid item at ${x}, ${y} does not exist.`,
  );

  gridItemIsGreen = (x, y) => this.state.hintState.reduce((
    anyGreen,
    { identifier },
  ) => anyGreen || (
    this.state.hintState[identifier].active &&
      this.props.hints[identifier].green.reduce((any, id) => {
        const [ thisX, thisY ] = this.getCoordsFromId(id);
        return any || (thisX === x && thisY === y);
      }, false)
  ), false);

  gridItemIsRed = (x, y) => this.state.hintState.reduce((
    anyRed,
    { identifier },
  ) => anyRed || (
    this.state.hintState[identifier].active &&
      this.props.hints[identifier].red.reduce((any, id) => {
        const [ thisX, thisY ] = this.getCoordsFromId(id);
        return any || (thisX === x && thisY === y);
      }, false)
  ), false);

  hasValidSolution = (hintState) => {
    const activeHintStateItems = hintState
      .filter((item) => item.active)
      .sort((a, b) => {
        if (a.identifier < b.identifier) {
          return -1;
        } else if (a.identifier === b.identifier) {
          throw new Error('No identical identifiers for hints allowed.');
        }

        return 1;
      });

    const fulfilled = {};
    const solutions = this.props.solutions.sort();
    for (const hintStateItem of activeHintStateItems) {
      if (solutions.includes(hintStateItem.identifier)) {
        fulfilled[hintStateItem.identifier] = true;
      } else {
        return false;
      }
    }

    if (Object.keys(fulfilled).length < solutions.length) {
      return false;
    }

    return true;
  };

  clickHint = (identifier) => {
    const hintState = Array.prototype.slice.call(this.state.hintState);
    hintState[identifier].active = !hintState[identifier].active;

    if (this.hasValidSolution(hintState)) {
      this.setState({
        hintState,
        won: true,
      }, this.finish);
    } else {
      this.setState({ hintState });
    }
  };

  getHintFromIdentifier = (identifier) => this.props.hints[identifier];

  finish = () => {
    window.scrollTo(0, 0);
    this.props.winCallback(this.state.hintState);
  };

  getRandomGridItemExplodeValue = () => {
    const randomComponent = Math.max(6, Math.random() * 12);
    const windowSize = Math.max(
      document.body.clientWidth,
      document.body.clientHeight,
    );

    const direction = Math.random() > 0.5 ? 1 : -1;    
    const value = Math.ceil(randomComponent * windowSize * direction);

    return value;
  };
}
