import classNames from 'classnames/bind';
import styles from 'src/styles/pages/LawManagemnet/_lawRegistration.module.scss';

import TabsDesign from '../commponent/TabsDesign';
const cx = classNames.bind(styles);

interface Props {
  empty?: boolean;
}

function LawRegistration(props: Props): React.ReactElement {
  //props.isOpen = true;

  return (
    <div className={'sub_contents ' + cx('LawRegistration')}>
      <div>검색</div>
      <TabsDesign />
    </div>
  );
}

export default LawRegistration;
