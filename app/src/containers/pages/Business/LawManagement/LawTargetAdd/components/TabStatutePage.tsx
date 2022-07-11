import classNames from 'classnames/bind';
import styles from 'src/styles/pages/LawManagemnet/_lawRegistration.module.scss';
import { ExcelBtn, PaginationBtn } from 'src/components/Common/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setLayoutH } from 'src/App/actions';
import { useEffect, useRef } from 'react';
const cx = classNames.bind(styles);

interface Props {
  empty?: boolean;
}

function TabStatutePage(props: Props): React.ReactElement {
  const dispatch = useDispatch();
  const container = useRef<any>(null);
  const title = useRef<any>(null);

  const fnClickExcelBtn = () => {
    //
  };

  const fnClickDbPrev = () => {
    //
  };

  useEffect(() => {
    dispatch(
      setLayoutH({
        titleH: 15,
      }),
    );
    console.log(container.current.clientHeight + 'px');
  }, [setLayoutH]);

  return (
    <>
      <div className="float_box">
        <div className="float_boxL">
          <div className="inquiry">
            법 분류
            <span>
              총 <strong className="txt_red01">2,334</strong> 건
            </span>
          </div>
        </div>
        <div className="float_boxR">
          <ul className="input_list type02 right">
            <li>
              <ExcelBtn onClickButton={fnClickExcelBtn} />
            </li>
            <li>
              <ExcelBtn onClickButton={fnClickExcelBtn} />
            </li>
          </ul>
        </div>
      </div>

      <div ref={container} className="idx_container">
        123123
      </div>

      <div className="pagination">
        <ul>
          <li>
            <PaginationBtn type="db_prev" onClickButton={fnClickDbPrev} />
          </li>
        </ul>
      </div>
    </>
  );
}

export default TabStatutePage;
