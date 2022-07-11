import React from 'react';
import { AlertPopup as AlertPopupProps } from 'src/App/types';
import classNames from 'classnames/bind';
import styles from 'src/styles/components/_modal.moudle.scss';
const cx = classNames.bind(styles);

function AlertPopup(props: AlertPopupProps): React.ReactElement {
  const { isOpen, onConfirm, children, zIndex } = props;

  return (
    <>
      <div
        className={cx('modal', 'defultPop_layer')}
        style={{ display: isOpen ? 'block' : 'none', zIndex: zIndex }}
      >
        <div className={cx('inCon')}>
          <p className={cx('txt1')}>{children}</p>
        </div>
        <div className={cx('btn_group')}>
          <p className={cx('one', 'btn_layer')} onClick={onConfirm}>
            확인
          </p>
        </div>
      </div>
      <div
        className={cx('dim')}
        style={{
          display: isOpen ? 'block' : 'none',
          zIndex: zIndex ? zIndex - 1 : zIndex,
        }}
      ></div>
    </>
  );
}

export default AlertPopup;
