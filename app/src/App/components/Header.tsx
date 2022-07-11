/* eslint-disable @typescript-eslint/no-var-requires */
import { useState } from 'react';
import { RootState } from 'src/reducers';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import styles from 'src/styles/components/_layout.module.scss';
import 'src/styles/components/_layout.module.scss';
import { HeaderIco } from 'src/components/Common/Button';
import logo from 'src/public/images/logo.png';
import NavTab from 'src/App/components/NavTab';

const cx = classNames.bind(styles);

interface Props {
  empty?: boolean;
}

function Header(props: Props): React.ReactElement {
  const { nav } = useSelector((state: RootState) => {
    return {
      nav: state.app.nav,
    };
  });

  //풀스크린
  const fnClickFullscreen = () => {
    //console.log("");
  };

  //알림
  const fnClickNotice = () => {
    //console.log("");
  };

  //설정
  const fnClickSetting = () => {
    //console.log("");
  };

  return (
    <>
      <header className={cx('header_layout')}>
        <div className={cx('logo_box')}>
          <button className={cx('lnb_bar')}>
            <span></span>
          </button>
          <h1>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </h1>
        </div>
        <div className={cx('info')}>
          <ul>
            <li>
              <HeaderIco onClickButton={fnClickFullscreen} type="fullscreen" />
            </li>
            <li>
              <HeaderIco onClickButton={fnClickNotice} type="notice" />
            </li>
            <li>
              <HeaderIco onClickButton={fnClickSetting} type="setting" />
            </li>
            <li>
              <span></span>
              ***님 환영합니다.
            </li>
          </ul>
        </div>
        {/*
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="LawManagement/LawRegistration">
        <button>LawRegistration</button>
      </Link>
      */}
      </header>

      <NavTab />
    </>
  );
}

export default Header;
