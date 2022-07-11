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
  
  const SafeWork = () => {
    interface gridData {
        workNo : string; //작업허가서 no 
        workDate: string; //공사일시
        workType: string; //작업종류
        workCompany: string; //공사업체
        workDept: string; //공사부서
        workerNm: string; //공사담당자
        workNm: string; //공사명
        workPoint: string; //작업장소
        workerCnt: number; //공사인원
        status: string; //상태 
        approvalDate: string; //승인일
      }
    
      const gridRef = useRef<any>(); // Optional - for accessing Grid's API
      const [rowData, setRowData] = useState<gridData[]>([]);// Set rowData to Array of Objects, one Object per Row
    
      // Each Column Definition results in one Column.
      const [columnDefs, setColumnDefs] = useState([
        { headerName : '작업허가서no', field: 'workNo', filter: false ,resizable: true },
        { headerName : '공사일시', field: 'workDate', filter: false ,resizable: true },
        { headerName : '작업종류', field: 'workType', filter: false ,resizable: true },
        { headerName : '공사업체', field: 'workCompany', filter: false ,resizable: true },
        { headerName : '공사부서', field: 'workDept', filter: false ,resizable: true },
        { headerName : '공사담당자', field: 'workerNm', filter: false ,resizable: true },
        { headerName : '공사명', field: 'workNm', filter: false ,resizable: true },
        { headerName : '작업장소', field: 'workPoint', filter: false ,resizable: true },
        { headerName : '공사인원', field: 'workerCnt', filter: false ,resizable: true },
        { headerName : '상태', field: 'status', filter: false ,resizable: true },
        { headerName : '승인일', field: 'approvalDate', filter: false ,resizable: true }
      ]);
    
      // DefaultColDef sets props common to all Columns
    
      const defaultColDef = useMemo(
        () => ({
          resizable: true,
          sortable: false,
        }),
        [],
      );
    
      // Example of consuming Grid Event
      const cellClickedListener = useCallback(event => {
        console.log('cellClicked', event);
      }, []);
    
      useEffect(() => {
        // Optionally the request above could also be done as
        const result = axios.get(process.env.REACT_APP_REST_API_HOST+'/api/selectSafeWork', {
          params: {
            //ID: 12345
          }
        })
        .then(function (response) {
          console.log('SafeWork 결과',response.data.data.result);
          setRowData(response.data.data.result);   
          gridRef.current.api.sizeColumnsToFit();
          gridRef.current.api.deselectAll();
          const allColumnIds:any[] = [];
          gridRef.current.columnApi.getAllColumns().forEach((column) => {            
            allColumnIds.push(column.getId());
          });
          gridRef.current.columnApi.autoSizeColumns(allColumnIds, false);           
        });    
      }, []);
    
      //const rowHeight = 25;
      return (
        <div>
          {/* On div wrapping Grid a) specify theme CSS Class Class and b) sets Grid size */}
                    
          <div className="ag-theme-alpine" style={{ width: 2000, height: 450 }}>
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
  
  export default SafeWork;
  