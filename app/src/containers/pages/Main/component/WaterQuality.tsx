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

const WaterQuality = () => {
  interface gridData {
    factoryNm : string; //공장명
    abs : number;
    bod : number;
    cob : number;
    cr : number;
    cr6 : number;
    f : number;
    nh : number;	
  }

  const gridRef = useRef<any>(); // Optional - for accessing Grid's API
  const [rowData, setRowData] = useState<gridData[]>([]);// Set rowData to Array of Objects, one Object per Row

  // Each Column Definition results in one Column.
  const [columnDefs, setColumnDefs] = useState([
    { headerName : '공장명', field: 'factoryNm', filter: false ,resizable: true },
    { headerName : 'abs', field: 'abs', filter: false ,resizable: true },
    { headerName : 'bod', field: 'bod', filter: false ,resizable: true },
    { headerName : 'cob', field: 'cob', filter: false ,resizable: true },
    { headerName : 'cr', field: 'cr', filter: false ,resizable: true },
    { headerName : 'cr6', field: 'cr6', filter: false ,resizable: true },
    { headerName : 'f', field: 'f', filter: false ,resizable: true },
    { headerName : 'nh', field: 'nh', filter: false ,resizable: true },    
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
    const result = axios.get(process.env.REACT_APP_REST_API_HOST+'/api/selectWaterQuality', {
      params: {
        //ID: 12345
      }
    })
    .then(function (response) {
      console.log('WaterQuality 결과',response.data.data.result);
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
      
      
      <div className="ag-theme-alpine" style={{ height: 250 }}>
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

export default WaterQuality;