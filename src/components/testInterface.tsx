import React from 'react';
import TabBar from './tabs/tab-bar';
import Tab from './tabs/tab';
import uuid from 'uuid';
import { any } from 'prop-types';
import { withRouter } from 'react-router-dom';

const tatabs = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
export interface TabxProps {
  history: any;
}
const TabW = ({ history }) => {
  console.log(history);
  console.log('re-render');
  return <div />;
};
const TabBx = (props: TabxProps) => {
  return (
    <div>
      <TabBar
        onTabClick={() => props.history.push('/test/' + uuid())}
        closeable
        reorderable
      >
        <Tab text="first">
          <TabW history={props.history} />
        </Tab>
        <Tab text="second">
          <form>
            <input />
          </form>
        </Tab>
        <Tab text="third">
          <form>
            <input />
          </form>
        </Tab>
        <Tab text="fourty">
          <form>
            <input />
          </form>
        </Tab>
      </TabBar>
    </div>
  );
};

export default withRouter(TabBx);
