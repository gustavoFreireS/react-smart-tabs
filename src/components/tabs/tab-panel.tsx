import React from 'react';

interface Props {
  children: any;
}

const areEqual = (prevProps: any, nextProps: any) => {
  return true;
};
const TabPanel = React.memo((props: Props) => {
  console.log('tabPanel render');
  return <div>{props.children}</div>;
}, areEqual);

export default TabPanel;
