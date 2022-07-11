import React, {
    useState,
    useRef,
    useEffect,
    useMemo,
    useCallback,
  } from 'react';
import ReactDOM from 'react-dom';
import 'ag-grid-community/dist/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'; // Optional theme CSS

const DailyStatusMenu = ({ setSearchCall }) => {
  const [type, setType] = useState();  
  const [search, setSearch] = useState();  
  const [condition, setCondition] = useState();  

  const onChangeAction = (e) => {      
    console.log('search text:', e.target.value);
    setSearch(e.target.value);
  }

  const searchClick = (e) => {    
    console.log('searchClick text:', e);      
    setCondition(e);    
  }

  const searchAction = () => {        
    setSearchCall({serachNm:search, condition:condition});        
  }  

  return (      
      <React.Fragment>                
        <div>
          법령명&emsp;<input type="text" name="lawName" value={search} onChange={onChangeAction}/> 
          <button onClick={ searchAction } style={{ float: 'right' }}>조회</button>
          &emsp;&emsp; 사용여부:
          &emsp; 전체<input type='radio' name='condition' value="all" onClick={()=>searchClick('all')} defaultChecked/>
          &emsp;사용<input type='radio' name='condition' value="1" onClick={()=>searchClick('1')} />
          &emsp;미사용<input type='radio' name='condition' value="0" onClick={()=>searchClick('0')} />
        </div>
        <br/>
      </React.Fragment>
  );
}; 

export default DailyStatusMenu;
