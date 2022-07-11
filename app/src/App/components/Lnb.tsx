import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from 'src/styles/components/_layout.module.scss';
import { useNavigate } from 'react-router-dom';
import { RootState } from 'src/reducers';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLnbYn, setNavYn } from 'src/App/actions';
import data from 'src/App/data';
import { useEffect } from 'react';
import { notDeepEqual } from 'assert';

const cx = classNames.bind(styles);

interface Props {
  empty?: boolean;
}

function Lnb(props: Props, onToggle): React.ReactElement {
  //props.isOpen = true;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { nav, tab, lnbYn } = useSelector((state: RootState) => state.app);

  // bar toggle
  const fnClickLnbToggle = () => {
    dispatch(setLnbYn(!lnbYn));
  };

  // nav Move
  const fnClickMoveUrl = (e, url) => {
    const arry01 = e.target
      .closest('nav')
      .getElementsByClassName(cx('depth01', 'active'))[0].innerText;
    const arry02 = e.target
      .closest('nav')
      .getElementsByClassName(cx('depth02', 'active'))[0].innerText;
    const arry03 = e.target
      .closest('nav')
      .getElementsByClassName(cx('depth03', 'active'))[0].innerText;
    const arry04 = e.target.innerText;

    e.target
      .closest('ul')
      .querySelectorAll('button')
      .forEach(button => {
        button.classList.remove(cx('active'));
      });

    if (e.target.className == cx('active')) {
      e.target.classList.remove(cx('active'));
    } else {
      e.target.classList.add(cx('active'));
    }

    dispatch(
      setNavYn({
        navYn: true,
        arry: [arry01, arry02, arry03, arry04],
      }),
    );

    localStorage.setItem(
      'navArry',
      JSON.stringify([arry01, arry02, arry03, arry04]),
    );

    if (url === '') {
      navigate('*');
    } else {
      navigate(url);
    }
  };

  useEffect(() => {
    //
  }, []);

  const fnClickDepthNum = (e, idx) => {
    const thisN = e.target
      .closest('ul')
      .getElementsByClassName(e.target.className);
    e.target
      .closest('ul')
      .querySelectorAll('button, ul')
      .forEach(button => {
        button.classList.remove(cx('active'));
      });

    for (let i = 0; i < thisN.length; i++) {
      if (i === idx) {
        if (thisN[i].className.indexOf(cx('active')) !== -1) {
          thisN[i].nextSibling.classList.remove(cx('active'));
          thisN[i].classList.remove(cx('active'));
        } else {
          thisN[i].nextSibling.classList.add(cx('active'));
          thisN[i].classList.add(cx('active'));
        }
      } else {
        thisN[i].nextSibling.classList.remove(cx('active'));
        thisN[i].classList.remove(cx('active'));
      }
    }
  };

  const LnbMenuList = data.lnb.map((result, idx) => {
    const LnbMenuListDepth02 = result.children.map((result, idx) => {
      const LnbMenuListDepth03 = result.children.map((result, idx) => {
        const LnbMenuListDepth04 = result.children.map((result, idx) => {
          return (
            <li key={result.id}>
              <button
                className={cx('depth04')}
                onClick={e => fnClickMoveUrl(e, result.url)}
              >
                {result.name}
              </button>
            </li>
          );
        });
        return (
          <li key={result.id}>
            <button
              className={cx('depth03')}
              onClick={e => fnClickDepthNum(e, idx)}
            >
              {result.name}
            </button>
            <ul>{LnbMenuListDepth04}</ul>
          </li>
        );
      });
      return (
        <li key={result.id}>
          <button
            className={cx('depth02')}
            onClick={e => fnClickDepthNum(e, idx)}
          >
            {result.name}
          </button>
          <ul>{LnbMenuListDepth03}</ul>
        </li>
      );
    });
    return (
      <li key={result.id}>
        <button
          className={cx('depth01')}
          onClick={e => fnClickDepthNum(e, idx)}
        >
          {result.name}
        </button>
        <ul>{LnbMenuListDepth02}</ul>
      </li>
    );
  });

  return (
    <div className={cx('lnb')}>
      <button
        onClick={fnClickLnbToggle}
        className={cx('lnb_toggle', lnbYn === true ? 'active' : '')}
      >
        <svg className={cx('svg')} viewBox="0 0 100 100" width="40">
          <path
            className={cx('line', 'top')}
            d="m 30,33 h 40 c 0,0 8.5,-0.68551 8.5,10.375 0,8.292653 -6.122707,9.002293 -8.5,6.625 l -11.071429,-11.071429"
          />
          <path className={cx('line')} d="m 70,50 h -40" />
          <path
            className={cx('line', 'bottom')}
            d="m 30,67 h 40 c 0,0 8.5,0.68551 8.5,-10.375 0,-8.292653 -6.122707,-9.002293 -8.5,-6.625 l -11.071429,11.071429"
          />
        </svg>
      </button>
      <div className={cx('lnb_inner')}>
        <div className={cx('lnb_box')}>
          <nav>
            <ul>{LnbMenuList}</ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Lnb;
