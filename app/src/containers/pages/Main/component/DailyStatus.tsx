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

const DailyStatus = () => {
  interface gridData {
    gubun : string;
    workCd : string;
    workDate : string;
    defaultWorkCnt : number;
    riskWorkCnt : number;
    totCnt : number;
  }

  const gridRef = useRef<any>(); // Optional - for accessing Grid's API
  const [rowData, setRowData] = useState<gridData[]>([]);// Set rowData to Array of Objects, one Object per Row

  // Each Column Definition results in one Column.
  const [columnDefs, setColumnDefs] = useState([
    { headerName : '공장명', field: 'gubun', filter: false ,resizable: true },
    { headerName : '구분', field: 'workCd', filter: false ,resizable: true },
    { headerName : '일자', field: 'workDate', filter: false ,resizable: true },
    { headerName : '일반작업', field: 'defaultWorkCnt', filter: false ,resizable: true },
    { headerName : '위험작업', field: 'riskWorkCnt', filter: false ,resizable: true },
    { headerName : '전체', field: 'totCnt', filter: false ,resizable: true }
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
    const result = axios.get(process.env.REACT_APP_REST_API_HOST+'/api/selectDailyStatusForGrid', {
      params: {
        //ID: 12345
      }
    })
    .then(function (response) {
      console.log('DailyStatus 결과',response.data.data.result);
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
            
      <div className="ag-theme-alpine" style={{ height: 450 }}>
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

export default DailyStatus;