import { useLocation } from 'react-router-dom';
import Header from 'src/App/components/Header';
import Footer from 'src/App/components/Footer';
import Lnb from 'src/App/components/Lnb';
import Index from 'src/App/components/Router';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'src/reducers';
import Portal from 'src/components/Portal';
import AlertPopup from 'src/components/Common/AlertPopup';
import ConfirmPopup from 'src/components/Common/ConfirmPopup';
import 'src/styles/_reset.scss';
import 'src/styles/components/_layout.module.scss';
import classNames from 'classnames/bind';
import styles from 'src/styles/components/_layout.module.scss';
const cx = classNames.bind(styles);

interface Props {
  empty?: boolean;
}

function App(props: Props): React.ReactElement {
  const location = useLocation();

  const { alertPopup, confirmPopup } = useSelector((state: RootState) => {
    return {
      alertPopup: state.app.alertPopup,
      confirmPopup: state.app.confirmPopup,
    };
  });

  const { nav } = useSelector((state: RootState) => state.app);

  const { lnbYn } = useSelector((state: RootState) => state.app);

  return (
    <>
      {location.pathname === 'publist' ? (
        <Index />
      ) : (
        <>
          <div className={cx('content_layout', lnbYn === true ? 'active' : '')}>
            <div className={cx('content_layoutL')}>
              <Lnb />
            </div>
            <div className={cx('content_layoutR')}>
              <Header />
              <div
                className={cx(
                  'idx_layout',
                  location.pathname === '/' ? '' : 'active',
                )}
              >
                <Index />
              </div>
              <Footer />
            </div>
          </div>
        </>
      )}

      {alertPopup.isOpen && (
        <Portal id={'alertPopup'} isOpen={alertPopup.isOpen}>
          <AlertPopup
            isOpen={alertPopup.isOpen}
            onConfirm={alertPopup.onConfirm}
            zIndex={alertPopup.zIndex}
          >
            {alertPopup.children}
          </AlertPopup>
        </Portal>
      )}

      {confirmPopup.isOpen && (
        <Portal id={'confirmPopup'} isOpen={confirmPopup.isOpen}>
          <ConfirmPopup
            isOpen={confirmPopup.isOpen}
            onConfirm={confirmPopup.onConfirm}
            onCancel={confirmPopup.onCancel}
            onClose={confirmPopup.onClose}
            confirmStr={confirmPopup.confirmStr}
            cancelStr={confirmPopup.cancelStr}
            zIndex={confirmPopup.zIndex}
          >
            {confirmPopup.children}
          </ConfirmPopup>
        </Portal>
      )}
    </>
  );
}

export default App;
