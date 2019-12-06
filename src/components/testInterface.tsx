import React, { useState } from 'react';
import TabBar from './tabs/tab-bar';
import Tab from './tabs/tab';
import uuid from 'uuid';
import { any } from 'prop-types';
import { withRouter } from 'react-router-dom';

const tatabs = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
export interface TabxProps {
  history: any;
}
const TabW = ({ theNumber, setTheNumber }) => {
  return (
    <div>
      {theNumber}
      <button onClick={() => setTheNumber(456)}>mude agora</button>
    </div>
  );
};

const Subtab = ({ theNumber, setTheNumber }) => {
  return (
    <TabBar closeable reorderable>
      <Tab>
        <TabW theNumber={theNumber} setTheNumber={setTheNumber} />
      </Tab>
    </TabBar>
  );
};
const TabBx = (props: TabxProps) => {
  const [tempTabList, setTempTabs] = useState(tatabs);
  const [theNumber, setTheNumber] = useState(123);
  return (
    <div>
      <TabBar
        onTabClick={() => props.history.push('/test/' + uuid())}
        onTabClose={(tab: any) => {
          return setTempTabs(
            tempTabList.filter(
              (it: any) => it !== tab.tabComponent.props.children.props.children
            )
          );
        }}
        closeable
        reorderable
      >
        {tempTabList.map(tab => (
          <Tab text={tab} key={tab}>
            <div>{tab}</div>
          </Tab>
        ))}
      </TabBar>
    </div>
  );
};

export default withRouter(TabBx);
