import classNames from 'classnames/bind';
import styles from 'src/styles/components/_layout.module.scss';
import { useLocation } from 'react-router-dom';
import { RootState } from 'src/reducers';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

interface Props {
  empty?: boolean;
}

function NavTabPage(props: Props): React.ReactElement {
  //props.isOpen = true;
  const location = useLocation();
  const { nav } = useSelector((state: RootState) => state.app);
  const localArry = localStorage.getItem('navArry');
  return (
    <>
      {/*
    <div style={{ display: nav.navYn === true ? 'block' : 'none' }}>
     */}
      {/*
      <div className={cx('nav_tab')}>
        <ul>
          <li className={cx('active')}>법령분류 등록</li>
          <li>법령 대상설정 등록</li>
          <li>법령정보 I/F</li>
        </ul>
      </div>
      */}
      <div style={{ display: location.pathname === '/' ? 'none' : 'block' }}>
        <div className={cx('nav_list')}>
          <ul>
            <li>{localArry !== null && JSON.parse(localArry)[0]}</li>
            <li>{localArry !== null && JSON.parse(localArry)[1]}</li>
            <li>{localArry !== null && JSON.parse(localArry)[2]}</li>
            <li>{localArry !== null && JSON.parse(localArry)[3]}</li>
            {/*<li>{nav.arry !== undefined && nav.arry[3]}</li>*/}
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavTabPage;
