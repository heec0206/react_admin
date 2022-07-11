import classNames from 'classnames/bind';
import styles from 'src/styles/components/_layout.module.scss';
import MainGraph from 'src/containers/pages/Main/MainGraph';
import VisibilityImproveStatus from './component/VisibilityImproveStatus';
import VisibilityImproveStatusGraph from './component/VisibilityImproveStatusGraph';
import DailyStatusGraph from './component/DailyStatusGraph';
import ShePlan from './component/ShePlan';
import AtmosphereGraph from './component/AtmosphereGraph';
import SafeWork from './component/SafeWork';
import WaterQualityGraph from './component/WaterQualityGraph';
import DailyStatusMenu from './component/DailyStatusMenu';
const cx = classNames.bind(styles);

function Main() {
  return (
    <>
      {/* main_layout */}
      <div className={cx('main_layout')}>
        <div className="grid_layout">
          <div className="grid_vertical50">
            <div className="grid_layout">
              <div className="grid_horizon33">
                <div className="float_box brd">
                  <div className="float_boxL">
                    <h2 className="mt0">시정 및 개선현황</h2>
                  </div>
                  <div className="float_boxR">
                    <ul className="input_list">
                      <li>
                        <div className="input_radio">
                          <input type="radio" id="radio01_01" name="radio01" />
                          <label htmlFor="radio01_01">계획</label>
                        </div>
                      </li>
                      <li>
                        <div className="input_radio">
                          <input type="radio" id="radio01_02" name="radio01" />
                          <label htmlFor="radio01_02">전체</label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="grid_box title">
                  <VisibilityImproveStatusGraph />
                </div>
              </div>
              <div className="grid_horizon33">
                <DailyStatusMenu />
              </div>
              <div className="grid_horizon33">
                <h2 className="mt0 brd">SHE 목표 대비 실적</h2>
                <div className="grid_box title">
                  <ShePlan />
                </div>
              </div>
            </div>
          </div>
          <div className="grid_vertical50">
            <div className="grid_layout">
              <div className="grid_horizon33">
                <h2 className="mt0 brd">환경 배출량 - 대기</h2>
                <div className="grid_box title">
                  <AtmosphereGraph />
                </div>
              </div>
              <div className="grid_horizon33">
                <h2 className="mt0 brd">환경배출량 - 수질</h2>
                <div className="grid_box title">
                  <WaterQualityGraph />
                </div>
              </div>
              <div className="grid_horizon33">
                <h2 className="mt0 brd">안전작업허가서 현황</h2>
                <div className="grid_box title">
                  <SafeWork />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
