import React from 'react';

import classNames from 'classnames/bind';
import styles from 'src/styles/components/_button.module.scss';
import { SassString } from 'sass';
const cx = classNames.bind(styles);

/* 기본 버튼 */
export const SimpleBtn = (props: {
  onClickButton: () => void;
  text: string;
}): React.ReactElement => {
  const { onClickButton, text } = props;

  return (
    <button className={cx('button', 'simple')} onClick={onClickButton}>
      {text}
    </button>
  );
};

export const HeaderIco = (props: {
  onClickButton: () => void;
  type?: string;
}): React.ReactElement => {
  const { onClickButton, type } = props;

  return (
    <button
      className={cx('button', 'header_ico', type)}
      onClick={onClickButton}
    ></button>
  );
};

/* 검색 버튼 */
export const SearchBtn = (props: {
  onClickButton: () => void;
}): React.ReactElement => {
  const { onClickButton } = props;

  return (
    <button className={cx('button', 'search')} onClick={onClickButton}></button>
  );
};

/* 엑셀 버튼 */
export const ExcelBtn = (props: {
  onClickButton: () => void;
}): React.ReactElement => {
  const { onClickButton } = props;

  return (
    <button className={cx('button', 'excel')} onClick={onClickButton}></button>
  );
};

export const PaginationBtn = (props: {
  type?: string;
  number?: number;
  onClickButton: () => void;
}): React.ReactElement => {
  const { onClickButton, type } = props;

  return (
    <button
      className={cx('button', 'pagination', props.type)}
      onClick={onClickButton}
    >
      {props.number}
    </button>
  );
};
