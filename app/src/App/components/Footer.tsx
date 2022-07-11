import classNames from 'classnames/bind';
import styles from 'src/styles/components/_layout.module.scss';
const cx = classNames.bind(styles);

interface Props {
  empty?: boolean;
}

function Footer(props: Props): React.ReactElement {
  //props.isOpen = true;
  return (
    <footer className={cx('footer_layout')}>
      COPYRIGHT (C) 2021 CHEMTOPIA. ALL RIGHTS RESERVED.
    </footer>
  );
}

export default Footer;
