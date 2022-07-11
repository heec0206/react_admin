import classNames from 'classnames/bind';
import styles from 'src/styles/pages/LawManagemnet/_lawCheck.module.scss';
const cx = classNames.bind(styles);

interface Props {
  empty?: boolean;
}

function LawCheck(props: Props): React.ReactElement {
  //props.isOpen = true;
  return (
    <div className={cx('LawRegistration')}>
      <div
        style={{ height: '200px', lineHeight: '200px', textAlign: 'center' }}
      >
        LawRegistration Page
      </div>
    </div>
  );
}

export default LawCheck;
