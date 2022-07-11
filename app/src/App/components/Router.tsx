import { Routes, Route } from 'react-router-dom';
import 'src/styles/components/_layout.module.scss';

import Header from 'src/App/components/Header';
import Main from 'src/containers/pages/Main/Main';
import Footer from 'src/App/components/Footer';
import ErrorPage from 'src/components/Common/ErrorPage';
import PubList from 'src/publist';
import Guide from 'src/App/Guide';
//import Portal from 'components/Portal';
//import AlertPopup from 'components/Common/AlertPopup';
//import ConfirmPopup from 'components/Common/ConfirmPopup';

/* SHE 경영정보 */
import LawRegistration from 'src/containers/pages/Business/LawManagement/LawRegistration/';
import LawTargetAdd from 'src/containers/pages/Business/LawManagement/LawTargetAdd/';

/* 화학물질관리 */

/* SHE심사.점검 */

/* 안전관리 */

/* 보건관리 */

/* 환경관리 */

/* 설비관리 */

/* SHE 모니터링 */

/* 시스템 */

function Router(): React.ReactElement {
  return (
    <Routes>
      {/* index */}
      <Route path="/" element={<Main />}></Route>
      <Route path="/Guide" element={<Guide />}></Route>
      {/* SHE 경영정보 */}
      <Route
        path="LawManagement/LawRegistration"
        element={<LawRegistration />}
      />
      <Route path="LawManagement/LawTargetAdd" element={<LawTargetAdd />} />
      {/* error */}
      <Route path="*" element={<ErrorPage />}></Route>

      {/* publist */}
      <Route path="/publist" element={<PubList />}></Route>
    </Routes>
  );
}

export default Router;
