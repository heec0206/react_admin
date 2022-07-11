import React from 'react';
import { ConfirmPopup as ConfirmPopupProps } from 'src/App/types';
import classNames from 'classnames/bind';
import styles from 'src/styles/components/_modal.moudle.scss';

const cx = classNames.bind(styles);

function ConfirmPopup(props: ConfirmPopupProps): React.ReactElement {
  const {
    isOpen,
    onConfirm,
    onCancel,
    onClose,
    cancelStr,
    confirmStr,
    children,
    zIndex,
  } = props;

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
          <p className={cx('btn_layer', 'modal_close')} onClick={onCancel}>
            {cancelStr}
          </p>
          <p className={cx('btn_layer', 'modal_close')} onClick={onConfirm}>
            {confirmStr}
          </p>
        </div>
      </div>
      <div
        className={cx('dim')}
        style={{
          display: isOpen ? 'block' : 'none',
          zIndex: zIndex ? zIndex - 1 : zIndex,
        }}
        onClick={onClose}
      ></div>
    </>
  );
}

export default ConfirmPopup;
