import React from 'react';
import TabBar from './tabs/tab-bar';
import Tab from './tabs/tab';
import uuid from 'uuid';
import { any } from 'prop-types';

const tatabs = ['a', 'b', 'c', 'd'];
export interface TabxProps {
  history: any;
}
const TabBx = (props: TabxProps) => {
  return (
    <div>
      <TabBar
        onTabClick={() => props.history.push('/test/' + uuid())}
        closeable
        reorderable
      >
        <Tab text="first">
          <form>
            <input />
          </form>
        </Tab>
        <Tab text="qweqweqwxeqwewq">
          <form>
            <input />
          </form>
        </Tab>
        <Tab text="qweqweqweasdqwewq">
          <form>
            <input />
          </form>
        </Tab>
      </TabBar>
    </div>
  );
};

export default TabBx;
