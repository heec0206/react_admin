import 'src/styles/components/_publist.module.scss';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from 'src/styles/components/_publist.module.scss';
const cx = classNames.bind(styles);

function PubListPage() {
  return (
    <>
      <div className={cx('pub_list')}>
        <table className={cx('info')}>
          <colgroup>
            <col width="*" />
            <col width="8%" />
            <col width="8%" />
            <col width="8%" />
            <col width="8%" />
            <col width="8%" />
            <col width="20%" />
          </colgroup>
          <thead>
            <tr>
              <th>프로젝트명</th>
              <th colSpan={5}>진행현황</th>
              <th>최근 업데이트</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Safety Health Enviroment</td>
              <td className={cx('ing')}>작업중</td>
              <td className={cx('comp')}>완료</td>
              <td className={cx('modify')}>수정</td>
              <td className={cx('add')}>추가</td>
              <td className={cx('del')}>삭제</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>

        <table>
          <colgroup>
            <col width="11%" />
            <col width="11%" />
            <col width="11%" />
            <col width="11%" />
            <col width="11%" />
            <col width="15%" />
            <col width="11%" />
            <col width="*" />
          </colgroup>
          <thead>
            <tr>
              <th>1DEPTH</th>
              <th>2DEPTH</th>
              <th>3DEPTH</th>
              <th>4DEPTH</th>
              <th>유형</th>
              <th>URL</th>
              <th>DATE</th>
              <th>REMARKS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Publishing Guide</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <Link to="/">/</Link>
              </td>
              <td>
                <strong>/</strong>
              </td>
              <td>
                <strong></strong>
              </td>
            </tr>
            <tr>
              <td>Index</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <Link to="/">index.tsx</Link>
              </td>
              <td>
                <strong>/</strong>
              </td>
              <td>
                <strong></strong>
              </td>
            </tr>
            <tr className={cx('ing')}>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <Link to="/">/</Link>
              </td>
              <td>
                <strong>/</strong>
              </td>
              <td>
                <strong></strong>
              </td>
            </tr>
            <tr className={cx('comp')}>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <Link to="/">/</Link>
              </td>
              <td>
                <strong>/</strong>
              </td>
              <td>
                <strong></strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default PubListPage;
