import React from 'react';

interface Props {
  children: any;
  checkActive: any;
  reference: any;
}

const areEqual = (prevProps: any, nextProps: any) => {
  return true;
};
const TabPanel = React.memo((props: Props) => {
  console.log('render');
  return <div ref={props.reference}>{props.children}</div>;
}, areEqual);

export default TabPanel;
