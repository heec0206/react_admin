import { useState } from 'react';
import LayerPopup from 'src/components/Common/LayerPopup';
import { useDispatch } from 'react-redux';
import {
  openAlertPopup,
  closeAlertPopup,
  openConfirmPopup,
  closeConfirmPopup,
} from 'src/App/actions';
import classNames from 'classnames/bind';
import styles from 'src/styles/components/_layout.module.scss';

const cx = classNames.bind(styles);

function Guide() {
  const dispatch = useDispatch();
  const [openLayerPopup, setOpenLayerPopup] = useState(false);

  //레이어 팝업
  const fnClickLayerPopup = () => {
    setOpenLayerPopup(true);
  };

  //ALERT 팝업
  const fnClickAlertPopup = () => {
    dispatch(
      openAlertPopup({
        onConfirm: () => dispatch(closeAlertPopup()),
        children: <>저장되었습니다.</>,
      }),
    );
  };

  //CONFIRM 팝업
  const fnClickConfirmPopup = () => {
    dispatch(
      openConfirmPopup({
        onConfirm: () => dispatch(closeConfirmPopup()),
        onClose: () => dispatch(closeConfirmPopup()),
        onCancel: () => dispatch(closeConfirmPopup()),
        cancelStr: '취소',
        confirmStr: '확인',
        children: <>정말 저장하시겠습니까?</>,
      }),
    );
  };

  return (
    <>
      <div className="">
        <h1>퍼블리싱 가이드</h1>
        <h2 className="mt0">시정 및 개선현황</h2>
        {/*
        <h2 className="type02">시정 및 개선현황</h2>
        <h2 className="type03">시정 및 개선현황</h2>
        <h2 className="type04">시정 및 개선현황</h2>
        <h2 className="type05">시정 및 개선현황</h2>
        <h2 className="type06">시정 및 개선현황</h2>
        */}
        <div className="float_box brd">
          <div className="float_boxL">
            <h2 className="type02">시정 및 개선현황</h2>
          </div>
          <div className="float_boxR">
            <ul className="input_list">
              <li>
                <input type="checkbox" id="chkbox01_01" />
                <label htmlFor="chkbox01_01">선택</label>
              </li>
              <li>
                <input type="checkbox" id="chkbox01_02" />
                <label htmlFor="chkbox01_02">선택</label>
              </li>
            </ul>
          </div>
        </div>

        {/*
          <button onClick={fnClickLayerPopup}>레이어팝업</button>
          {openLayerPopup && (
            <LayerPopup
              isOpen={openLayerPopup}
              onClickPopClose={() => setOpenLayerPopup(false)}
            />
          )}
          <button onClick={fnClickAlertPopup}>alert 팝업</button>
          <button onClick={fnClickConfirmPopup}>confirm 팝업</button>
          */}

        {/*
              <MainGraph />
          */}
      </div>
    </>
  );
}

export default Guide;
