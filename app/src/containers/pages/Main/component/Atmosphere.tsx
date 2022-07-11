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
  
  const Atmosphere = () => {
    interface gridData {
        factoryNm : string;//공장명
        dust : number; //먼지
        hshm : number; //황산화물
        ywss : number; //염화수소
        amna : number; //암모니아
        bshhm : number; //불소화합물
        crhhm : number; //크롬화합물
        bswwm : number; //비소화합물
        aahhm : number; //아연화합물
        nghhm : number; //니킬 및 그 화합물
        grhhm : number; //구리화합물
        nhhm : number; //납화합물
        sahss : number; //시안화수소
        jsshm : number; //질소산화물
        cdmhhm : number; //카드뮬화합물
        pmhhm : number; //페몰화합물
        pradhd : number; //포름알데히드
      }
    
      const gridRef = useRef<any>(); // Optional - for accessing Grid's API
      const [rowData, setRowData] = useState<gridData[]>([]);// Set rowData to Array of Objects, one Object per Row
    
      // Each Column Definition results in one Column.
      const [columnDefs, setColumnDefs] = useState([
        { headerName : '공장명', field: 'factoryNm', filter: true },
        { headerName : '황산화물', field: 'dust', filter: true },
        { headerName : '염화수소', field: 'hshm', filter: true },
        { headerName : '암모니아', field: 'ywss', filter: true },
        { headerName : '불소화합물', field: 'amna', filter: true },
        { headerName : '크롬화합물', field: 'bshhm', filter: true },
        { headerName : '비소화합물', field: 'crhhm', filter: true },
        { headerName : '아연화합물', field: 'bswwm', filter: true },
        { headerName : '니킬 및 그 화합물', field: 'aahhm', filter: true },
        { headerName : '구리화합물', field: 'nghhm', filter: true },
        { headerName : '시안화수소', field: 'grhhm', filter: true },
        { headerName : '납화합물', field: 'nhhm', filter: true },
        { headerName : '질소산화물', field: 'sahss', filter: true },
        { headerName : '황산화물', field: 'jsshm', filter: true },                                                                                
        { headerName : '카드뮬화합물', field: 'cdmhhm', filter: true },
        { headerName : '페몰화합물', field: 'pmhhm', filter: true },
        { headerName : '포름알데히드', field: 'pradhd', filter: true },
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
        const result = axios.get(process.env.REACT_APP_REST_API_HOST+'/api/selectAtmosphere', {
          params: {
            //ID: 12345
          }
        })
        .then(function (response) {
          console.log('Atmosphere 결과',response.data.data.result);
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
    
      // Example using Grid's API
      const buttonListener = useCallback(e => {
        gridRef.current.api.deselectAll();
      }, []);
    
      //const rowHeight = 25;
      return (
        <div>
          {/* On div wrapping Grid a) specify theme CSS Class Class and b) sets Grid size */}
          
          
          <div className="ag-theme-alpine" style={{ width:2000, height: 230 }}>
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
    
  export default Atmosphere;
  