import classNames from 'classnames';
import styles from 'src/styles/components/_layout.module.scss';
import { useNavigate } from 'react-router-dom';
const cx = classNames.bind(styles);

interface Props {
  empty?: boolean;
}

function ErrorPage(props: Props): React.ReactElement {
  //props.isOpen = true;
  return (
    <div className={cx('error_page')}>
      <div>ErrorPage</div>
    </div>
  );
}

export default ErrorPage;
