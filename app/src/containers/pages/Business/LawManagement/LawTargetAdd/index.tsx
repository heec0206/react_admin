import classNames from 'classnames/bind';
import styles from 'src/styles/pages/LawManagemnet/_lawRegistration.module.scss';
import { SearchBtn } from 'src/components/Common/Button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/reducers';
import TabStatutePage from 'src/containers/pages/Business/LawManagement/LawTargetAdd/components/TabStatutePage';
import { updateSelectTab } from 'src/App/actions';
import { useEffect, useRef, useState } from 'react';
import { setLayoutH } from 'src/App/actions';
import useWindowSize from 'src/App/components/FnWindowEvt';
const cx = classNames.bind(styles);

interface Props {
  empty?: boolean;
}

function LawRegistration(props: Props): React.ReactElement {
  //props.isOpen = true;
  const dispatch = useDispatch();
  const container = useRef<any>();
  const { selectedTab, layoutH } = useSelector((state: RootState) => state.app);
  const [fnContainerH, setFnContainerH] = useState(0);

  const tabAreaActive = idx => {
    dispatch(updateSelectTab(idx));
  };

  useWindowSize();

  const tabContentList = {
    0: <TabStatutePage />,
  };

  //검색
  const fnClickSearch = () => {
    console.log('search');
  };

  return (
    <div ref={container} className={'sub_contents ' + cx('LawRegistration')}>
      <div className="search_area">
        <ul>
          <li className="search_horizon25">
            <div className="search_box">
              <div className="search_boxL">법령명</div>
              <div className="search_boxR">
                <input type="text" className="input_default input_wide" />
              </div>
            </div>
          </li>
          <li className="search_horizon25">
            <div className="search_box">
              <div className="search_boxL">사용여부</div>
              <div className="search_boxR type02">
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
          </li>
        </ul>
        <div className="btn_search">
          <SearchBtn onClickButton={fnClickSearch} />
        </div>
      </div>

      <div className="tab_area">
        <ul>
          <li
            className={selectedTab === 0 ? 'active' : ''}
            onClick={() => tabAreaActive(0)}
          >
            <button onClick={() => (selectedTab === 0 ? true : false)}>
              법령
            </button>
          </li>
          <li
            className={selectedTab === 1 ? 'active' : ''}
            onClick={() => tabAreaActive(1)}
          >
            <button onClick={() => (selectedTab === 1 ? true : false)}>
              행정규칙
            </button>
          </li>
          <li
            className={selectedTab === 2 ? 'active' : ''}
            onClick={() => tabAreaActive(2)}
          >
            <button onClick={() => (selectedTab === 2 ? true : false)}>
              자치법규
            </button>
          </li>
        </ul>
      </div>
      <div className="tab_content">{tabContentList[selectedTab]}</div>

      {/*<TabsDesign />*/}
    </div>
  );
}

export default LawRegistration;
