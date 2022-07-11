import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from 'react';
import * as xlsx from 'xlsx';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component
import axios from 'axios';
import 'ag-grid-community/dist/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'; // Optional theme CSS
import SearchMenu from 'src/containers/pages/Business/LawManagement/commponent/SearchMenu';

const AutoLawData = props => {
  interface gridData {
    keyNo: number;
    copCd: string; //법인
    lawNam: string; //법규명
    lawCd: string; //법규id
    pmgYmd: string; //공표일자
    pmgNo: string; //공표번호
    ectYmd: string; //시행일자
    useYn: string; //사용유무
    chgchkYn: string; //변경확인여부
    chgchkYmd: string; //변경확인일시
    remRem: string; //비고
    crtDt: string; //생성일시
    crtchrNo: string; //생성자
    updDt: string; //수정일시
    updchrNo: string; //수정자
    lawdptNam: string; //소관부처명
    totCnt: number; //총건수
  }

  const tabCdoe: string = props.tabCde;
  console.log('LawData tabcode----->', props.tabCdoe);
  const gridRef = useRef<any>(); // Optional - for accessing Grid's API
  const [rowData, setRowData] = useState<gridData[]>([]); // Set rowData to Array of Objects, one Object per Row
  const [totalCnt, setTotalCnt] = useState();

  // Each Column Definition results in one Column.
  const [columnDefs, setColumnDefs] = useState([
    {
      headerName: '일련번호',
      field: 'keyNo',
      width: 100,
      filter: true,
      resizable: true,
    },
    {
      headerName: '법령명',
      field: 'lawNam',
      width: 500,
      filter: true,
      resizable: true,
    },
    {
      headerName: '소관부처명',
      field: 'lawdptNam',
      filter: true,
      resizable: true,
    },
    //{ headerName : '사용여부', field: 'useYn',  checkboxSelection: true, resizable: true },
    {
      headerName: '사용여부',
      field: 'useYn',
      cellRenderer: params => {
        const checkValue = params.value;
        return (
          <React.Fragment>
            {checkValue == 1 ? (
              <input type="checkbox" defaultChecked value={checkValue} />
            ) : (
              <input type="checkbox" value={checkValue} />
            )}
          </React.Fragment>
        );
      },
      filter: false,
      resizable: true,
    },
    { headerName: '비고', field: 'remRem', filter: true, resizable: true },
  ]);

  // DefaultColDef sets props common to all Columns

  const defaultColDef = useMemo(
    () => ({
      resizable: true,
      sortable: true,
    }),
    [],
  );

  // Example of consuming Grid Event
  const cellClickedListener = useCallback(event => {
    console.log('cellClicked', event);
  }, []);

  useEffect(() => {
    // Optionally the request above could also be done as
    const result = axios
      .get(
        process.env.REACT_APP_REST_API_HOST +
          '/api/selectLawClassificationList',
        {
          params: {
            tabCode: props.index,
          },
        },
      )
      .then(function (response) {
        console.log('LawData 결과', response.data.data.result);
        setRowData(response.data.data.result);
        setTotalCnt(response.data.data.result.length);
        gridRef.current.api.deselectAll();
        gridRef.current.api.sizeColumnsToFit();
      });
  }, []);

  const excelDownload = e => {
    console.log(rowData);
    console.log(columnDefs);
    const excelData: Array<any> = Array<any>();
    for (let i = 0; i < rowData.length; i++) {
      const edata = {
        일련번호: rowData[i].keyNo,
        법령명: rowData[i].lawNam,
        소관부처명: rowData[i].lawdptNam,
        사용여부: rowData[i].useYn,
        비고: rowData[i].remRem,
      };
      excelData.push(edata);
    }

    console.log('엑셀:', excelData);
    const arr: any[] = excelData!;
    const ws = xlsx.utils.json_to_sheet(arr);
    const wb = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
    xlsx.writeFile(wb, '법정분류등록.xlsx');
  };

  //조회
  const [SearchMode, setSearchMode] = useState(false);
  const setSearchCall = useCallback(() => {
    setSearchMode(true);
  }, []);

  //const rowHeight = 25;
  return (
    <div>
      {/* On div wrapping Grid a) specify theme CSS Class Class and b) sets Grid size */}
      <SearchMenu setSearchCall={setSearchCall} />
      <div>
        ■ 법 분류 총 {totalCnt}건{' '}
        <button onClick={excelDownload} style={{ float: 'right' }}>
          엑셀다운로드
        </button>
      </div>
      <div className="ag-theme-alpine" style={{ height: 500 }}>
        <AgGridReact
          //rowHeight={rowHeight}
          ref={gridRef} // Ref for accessing Grid's API
          rowData={rowData} // Row Data for Rows
          columnDefs={columnDefs} // Column Defs for Columns
          defaultColDef={defaultColDef} // Default Column Properties
          animateRows={true} // Optional - set to 'true' to have rows animate when sorted
          rowSelection="multiple" // Options - allows click selection of rows
          onCellClicked={cellClickedListener} // Optional - registering for Grid Event
        />
      </div>
    </div>
  );
};

export default AutoLawData;
