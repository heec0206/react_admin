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

const VisibilityImproveStatus = () => {
  interface gridData {
    item : string;
    unit : number;
    shePlan : number;
    deptPlan : number;
    performance : number;
    performanceRate : number;
  }

  const gridRef = useRef<any>(); // Optional - for accessing Grid's API
  const [rowData, setRowData] = useState<gridData[]>([]);// Set rowData to Array of Objects, one Object per Row

  // Each Column Definition results in one Column.
  const [columnDefs, setColumnDefs] = useState([
    { headerName : '항목', field: 'item', filter: true },
    { headerName : '단위', field: 'unit', filter: true },    
    { headerName : 'SHE목표',field: 'shePlan', filter: true },    
    { headerName : '부서목표 ', field: 'deptPlan', filter: true },
    { headerName : '실적', field: 'performance', filter: true },    
    { headerName : '실적률',field: 'performanceRate', filter: true },        
  ]);

  // DefaultColDef sets props common to all Columns

  const defaultColDef = useMemo(
    () => ({
      //width: 300,      
      resizable: true,
      sortable: true,
      autoHeight: true
    }),
    [],
  );

  // Example of consuming Grid Event
  const cellClickedListener = useCallback(event => {
    console.log('cellClicked', event);
  }, []);

  useEffect(() => {
    // Optionally the request above could also be done as
    const result = axios.get(process.env.REACT_APP_REST_API_HOST+'/api/selectShePlan', {
      params: {
        //ID: 12345
      }
    })
    .then(function (response) {
      console.log('결과',response.data.data.result);
      setRowData(response.data.data.result);   
      gridRef.current.api.sizeColumnsToFit();
    });    
  }, []);

  // Example using Grid's API
  const buttonListener = useCallback(e => {
    gridRef.current.api.deselectAll();
  }, []);


  //const rowHeight = 25;

  return (
    
    <div>
      {/* On div wrapping Grid a) specify theme CSS Class Class and b) sets Grid size */}      
      <div className="ag-theme-alpine" style={{ width:1000, height: 450 }}>
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

export default VisibilityImproveStatus;
