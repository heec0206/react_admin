import React, { useState } from 'react';
import './styles.css';
import Tabs from './Tabs';
// Tabs Components

import LawData from '../LawData';
import AdminData from '../AdminData';
import AutoLawData from '../AutoLawData';

type TabsType = {
  label: string;
  index: number;
  Component: React.FC<any>;
}[];

interface ComponentProps {
  data: TabsType; // 위의 선언된 객체
  onClick: () => void;
}

// Tabs Array
const tabs: TabsType = [
  {
    label: '법령',
    index: 1,
    Component: LawData,
  },
  {
    label: '행정규칙',
    index: 2,
    Component: AdminData,
  },
  {
    label: '자치법규',
    index: 3,
    Component: AutoLawData,
  },
];

//let totCnt = 0;
export default function TabsDesign() {
  const [selectedTab, setSelectedTab] = useState<number>(tabs[0].index);
  //const [tabCd, setTabCd] = useState<string>(tabs[0].tabCd);
  return (
    <div>
      <Tabs selectedTab={selectedTab} onClick={setSelectedTab} tabs={tabs} />
    </div>
  );
}
