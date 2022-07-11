import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from 'react';
import ReactDOM from 'react-dom';
import DailyStatus from './DailyStatus';
import DailyStatusGraph from './DailyStatusGraph';
import 'ag-grid-community/dist/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'; // Optional theme CSS

interface selectPram {
  menuSelect: boolean;
}
export default class DailyStatusMenu extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.handleGraphClick = this.handleGraphClick.bind(this);
    this.handleListClick = this.handleListClick.bind(this);
    this.state = { menuSelect: false };
  }

  handleGraphClick = () => {
    this.setState({ menuSelect: true, target1: true, target2: false });
  };

  handleListClick = () => {
    this.setState({ menuSelect: false, target1: false, target2: true });
  };

  render() {
    const targetMenu = this.state.menuSelect;
    return (
      <React.Fragment>
        <div className="float_box brd">
          <div className="float_boxL">
            <h2 className="mt0">일간 공사현황</h2>
          </div>
          <div className="float_boxR">
            <ul className="input_list">
              <li>
                <div className="input_radio">
                  <input
                    type="radio"
                    name="condition"
                    onClick={this.handleListClick}
                    defaultChecked
                    id="radio01_01"
                  />
                  <label htmlFor="radio01_01">차트</label>
                </div>
              </li>
              <li>
                <div className="input_radio">
                  <input
                    type="radio"
                    name="condition"
                    onClick={this.handleGraphClick}
                    id="radio01_02"
                  />
                  <label htmlFor="radio01_02">전체</label>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid_box title">
          {targetMenu == true ? <DailyStatus /> : <DailyStatusGraph />}
        </div>
      </React.Fragment>
    );
  }
}
