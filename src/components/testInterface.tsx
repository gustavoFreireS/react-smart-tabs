import React, { Component, useState, Fragment } from "react";
import Tab from "./tabs/tab";
import TabBar from "./tabs/tab-bar";
import uuid from "uuid";

const TabInterface = () => {
  const [number, setNumber] = useState(0);
  const [list, setList] = useState([
    <Tab text="first tab" key={uuid()}>
      <h1>test</h1>
    </Tab>
  ]);
  const changeValue = () => {
    list[list.length - 1] = (
      <Tab text="this is tab" key={uuid()}>
        <h1>test</h1>
      </Tab>
    );
    setList([...list]);
  };
  const createNew = () => {
    setNumber(number + 1);
    return (
      <Tab text="New Tab">
        <h1>{number}</h1>
      </Tab>
    );
  };
  function addTab() {
    setList([
      ...list,
      <Tab text="second tab" active key={uuid()}>
        <form className="frm">
          <h1>Form 2</h1>
          <p>Name</p>
          <input />
          <p>Surname</p>
          <input />
          <p>Adress</p>
          <input />
          <p>Telephone</p>
          <input />
        </form>
      </Tab>
    ]);
    console.log(list);
  }
  return (
    <Fragment>
      <button onClick={addTab}>add tab</button>
      <button onClick={changeValue}>change tab</button>
      <TabBar
        closeable={true}
        reorderable={true}
        newTab={addTab}
        className="small-tab"
      >
        {list.map(item => item)}
      </TabBar>
    </Fragment>
  );
};
export default TabInterface;
