import classNames from 'classnames/bind';
import styles from 'src/styles/components/_modal.moudle.scss';
import Portal from 'src/components/Portal';
const cx = classNames.bind(styles);

interface Props {
  isOpen: boolean;
  onClickPopClose: () => void;
}

function LayerPopup(props: Props): React.ReactElement {
  const { isOpen, onClickPopClose } = props;
  return (
    <>
      <Portal id="LayerPopup" isOpen={isOpen}>
        <div
          className={cx('dim')}
          style={{ display: isOpen ? 'block' : 'none', zIndex: 298 }}
        ></div>

        <div
          className={cx('modal', 'center')}
          style={{ display: isOpen ? 'block' : 'none', zIndex: 299 }}
        >
          <div className={cx('pop_content')}>
            <div className={cx('pickup')}>
              <div className={cx('pop-title')}>제목</div>
            </div>
          </div>
          <div className={cx('btn-center', 'popup')}>
            <button onClick={onClickPopClose}>확인</button>
          </div>
        </div>
      </Portal>
    </>
  );
}

export default LayerPopup;
