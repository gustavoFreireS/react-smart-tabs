import React from 'react';
import { withRouter } from 'react-router-dom';
interface Props {
  children: any;
}

const areEqual = (prevProps: any, nextProps: any) => {
  return true;
};
const TabPanel = (props: Props) => {
  console.log('tabPanel render');
  return <div>{props.children}</div>;
};

export default TabPanel;
