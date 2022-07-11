import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

export interface Props {
  id: string;
  children: React.ReactNode;
  isOpen?: boolean;
  isOpenArr?: boolean[];
}

const Portal: React.FC<Props> = ({ id, children, isOpen, isOpenArr }) => {
  // const target = usePortal(id);
  const target = document.getElementById('root');
  // 팝업 열고닫을때 body 태그에 overflow 추가

  // Portal에 여러 개의 팝업이 있는 경우 isOpen 값을 배열로 받아서 체크
  let openArr: boolean[] = [];
  if (isOpenArr && isOpenArr.length > 0) {
    //isOpenArr[]에서 true만 추출
    openArr = isOpenArr.filter(isOpen => {
      return isOpen === true;
    });
  }

  useEffect(() => {
    return () => {
      openArr.length > 0 || document.getElementsByClassName('dim').length !== 0
        ? document
            .getElementsByTagName('body')[0]
            .setAttribute('style', 'overflow:hidden')
        : document.getElementsByTagName('body')[0].removeAttribute('style');
    };
  }, []);

  return target ? createPortal(children, target) : null;
};

export default Portal;
