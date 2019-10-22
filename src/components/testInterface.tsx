import React, { useState } from 'react';
import Tab from './tabs/tab';
import TabBar from './tabs/tab-bar';

const TabInterface = () => {
  const [numberTab, setNumber] = useState(0);
  const createNew = () => {
    setNumber(numberTab + 1);
    return (
      <Tab text="New Tab">
        <h1>{numberTab}</h1>
      </Tab>
    );
  };
  return (
    <TabBar
    // closeable={true}
    // reorderable={true}
    // newTab={createNew}
    >
      <Tab text={`${numberTab} tab`}>
        <form className="frm">
          <h1>Form 1</h1>
          <p>Name</p>
          <input />
          <p>Surname</p>
          <input />
          <p>Address</p>
          <input />
          <p>Telephone</p>
          <input />
        </form>
        <button onClick={createNew} />
      </Tab>

      <Tab text="second tab">
        <table>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            {console.log('rendering cell')}
            <td>Maria Anders</td>
            {console.log('rendering cell')}
            <td>Germany</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            {console.log('rendering cell')}
            <td>Francisco Chang</td>
            {console.log('rendering cell')}
            <td>Mexico</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Ernst Handel</td>
            {console.log('rendering cell')}
            <td>Roland Mendel</td>
            {console.log('rendering cell')}
            <td>Austria</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Island Trading</td>
            {console.log('rendering cell')}
            <td>Helen Bennett</td>
            {console.log('rendering cell')}
            <td>UK</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            {console.log('rendering cell')}
            <td>Yoshi Tannamuri</td>
            {console.log('rendering cell')}
            <td>Canada</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            {console.log('rendering cell')}
            <td>Giovanni Rovelli</td>
            {console.log('rendering cell')}
            <td>Italy</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            {console.log('rendering cell')}
            <td>Maria Anders</td>
            {console.log('rendering cell')}
            <td>Germany</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            {console.log('rendering cell')}
            <td>Francisco Chang</td>
            {console.log('rendering cell')}
            <td>Mexico</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Ernst Handel</td>
            {console.log('rendering cell')}
            <td>Roland Mendel</td>
            {console.log('rendering cell')}
            <td>Austria</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Island Trading</td>
            {console.log('rendering cell')}
            <td>Helen Bennett</td>
            {console.log('rendering cell')}
            <td>UK</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            {console.log('rendering cell')}
            <td>Yoshi Tannamuri</td>
            {console.log('rendering cell')}
            <td>Canada</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            {console.log('rendering cell')}
            <td>Giovanni Rovelli</td>
            {console.log('rendering cell')}
            <td>Italy</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            {console.log('rendering cell')}
            <td>Maria Anders</td>
            {console.log('rendering cell')}
            <td>Germany</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            {console.log('rendering cell')}
            <td>Francisco Chang</td>
            {console.log('rendering cell')}
            <td>Mexico</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Ernst Handel</td>
            {console.log('rendering cell')}
            <td>Roland Mendel</td>
            {console.log('rendering cell')}
            <td>Austria</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Island Trading</td>
            {console.log('rendering cell')}
            <td>Helen Bennett</td>
            {console.log('rendering cell')}
            <td>UK</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            {console.log('rendering cell')}
            <td>Yoshi Tannamuri</td>
            {console.log('rendering cell')}
            <td>Canada</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            {console.log('rendering cell')}
            <td>Giovanni Rovelli</td>
            {console.log('rendering cell')}
            <td>Italy</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            {console.log('rendering cell')}
            <td>Maria Anders</td>
            {console.log('rendering cell')}
            <td>Germany</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            {console.log('rendering cell')}
            <td>Francisco Chang</td>
            {console.log('rendering cell')}
            <td>Mexico</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Ernst Handel</td>
            {console.log('rendering cell')}
            <td>Roland Mendel</td>
            {console.log('rendering cell')}
            <td>Austria</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Island Trading</td>
            {console.log('rendering cell')}
            <td>Helen Bennett</td>
            {console.log('rendering cell')}
            <td>UK</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            {console.log('rendering cell')}
            <td>Yoshi Tannamuri</td>
            {console.log('rendering cell')}
            <td>Canada</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            {console.log('rendering cell')}
            <td>Giovanni Rovelli</td>
            {console.log('rendering cell')}
            <td>Italy</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            {console.log('rendering cell')}
            <td>Maria Anders</td>
            {console.log('rendering cell')}
            <td>Germany</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            {console.log('rendering cell')}
            <td>Francisco Chang</td>
            {console.log('rendering cell')}
            <td>Mexico</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Ernst Handel</td>
            {console.log('rendering cell')}
            <td>Roland Mendel</td>
            {console.log('rendering cell')}
            <td>Austria</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Island Trading</td>
            {console.log('rendering cell')}
            <td>Helen Bennett</td>
            {console.log('rendering cell')}
            <td>UK</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            {console.log('rendering cell')}
            <td>Yoshi Tannamuri</td>
            {console.log('rendering cell')}
            <td>Canada</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            {console.log('rendering cell')}
            <td>Giovanni Rovelli</td>
            {console.log('rendering cell')}
            <td>Italy</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            {console.log('rendering cell')}
            <td>Maria Anders</td>
            {console.log('rendering cell')}
            <td>Germany</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            {console.log('rendering cell')}
            <td>Francisco Chang</td>
            {console.log('rendering cell')}
            <td>Mexico</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Ernst Handel</td>
            {console.log('rendering cell')}
            <td>Roland Mendel</td>
            {console.log('rendering cell')}
            <td>Austria</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Island Trading</td>
            {console.log('rendering cell')}
            <td>Helen Bennett</td>
            {console.log('rendering cell')}
            <td>UK</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            {console.log('rendering cell')}
            <td>Yoshi Tannamuri</td>
            {console.log('rendering cell')}
            <td>Canada</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            {console.log('rendering cell')}
            <td>Giovanni Rovelli</td>
            {console.log('rendering cell')}
            <td>Italy</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            {console.log('rendering cell')}
            <td>Maria Anders</td>
            {console.log('rendering cell')}
            <td>Germany</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            {console.log('rendering cell')}
            <td>Francisco Chang</td>
            {console.log('rendering cell')}
            <td>Mexico</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Ernst Handel</td>
            {console.log('rendering cell')}
            <td>Roland Mendel</td>
            {console.log('rendering cell')}
            <td>Austria</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Island Trading</td>
            {console.log('rendering cell')}
            <td>Helen Bennett</td>
            {console.log('rendering cell')}
            <td>UK</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            {console.log('rendering cell')}
            <td>Yoshi Tannamuri</td>
            {console.log('rendering cell')}
            <td>Canada</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            {console.log('rendering cell')}
            <td>Giovanni Rovelli</td>
            {console.log('rendering cell')}
            <td>Italy</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            {console.log('rendering cell')}
            <td>Maria Anders</td>
            {console.log('rendering cell')}
            <td>Germany</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            {console.log('rendering cell')}
            <td>Francisco Chang</td>
            {console.log('rendering cell')}
            <td>Mexico</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Ernst Handel</td>
            {console.log('rendering cell')}
            <td>Roland Mendel</td>
            {console.log('rendering cell')}
            <td>Austria</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Island Trading</td>
            {console.log('rendering cell')}
            <td>Helen Bennett</td>
            {console.log('rendering cell')}
            <td>UK</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            {console.log('rendering cell')}
            <td>Yoshi Tannamuri</td>
            {console.log('rendering cell')}
            <td>Canada</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            {console.log('rendering cell')}
            <td>Giovanni Rovelli</td>
            {console.log('rendering cell')}
            <td>Italy</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            {console.log('rendering cell')}
            <td>Maria Anders</td>
            {console.log('rendering cell')}
            <td>Germany</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            {console.log('rendering cell')}
            <td>Francisco Chang</td>
            {console.log('rendering cell')}
            <td>Mexico</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Ernst Handel</td>
            {console.log('rendering cell')}
            <td>Roland Mendel</td>
            {console.log('rendering cell')}
            <td>Austria</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Island Trading</td>
            {console.log('rendering cell')}
            <td>Helen Bennett</td>
            {console.log('rendering cell')}
            <td>UK</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            {console.log('rendering cell')}
            <td>Yoshi Tannamuri</td>
            {console.log('rendering cell')}
            <td>Canada</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            {console.log('rendering cell')}
            <td>Giovanni Rovelli</td>
            {console.log('rendering cell')}
            <td>Italy</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            {console.log('rendering cell')}
            <td>Maria Anders</td>
            {console.log('rendering cell')}
            <td>Germany</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            {console.log('rendering cell')}
            <td>Francisco Chang</td>
            {console.log('rendering cell')}
            <td>Mexico</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Ernst Handel</td>
            {console.log('rendering cell')}
            <td>Roland Mendel</td>
            {console.log('rendering cell')}
            <td>Austria</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Island Trading</td>
            {console.log('rendering cell')}
            <td>Helen Bennett</td>
            {console.log('rendering cell')}
            <td>UK</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            {console.log('rendering cell')}
            <td>Yoshi Tannamuri</td>
            {console.log('rendering cell')}
            <td>Canada</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            {console.log('rendering cell')}
            <td>Giovanni Rovelli</td>
            {console.log('rendering cell')}
            <td>Italy</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            {console.log('rendering cell')}
            <td>Maria Anders</td>
            {console.log('rendering cell')}
            <td>Germany</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            {console.log('rendering cell')}
            <td>Francisco Chang</td>
            {console.log('rendering cell')}
            <td>Mexico</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Ernst Handel</td>
            {console.log('rendering cell')}
            <td>Roland Mendel</td>
            {console.log('rendering cell')}
            <td>Austria</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Island Trading</td>
            {console.log('rendering cell')}
            <td>Helen Bennett</td>
            {console.log('rendering cell')}
            <td>UK</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            {console.log('rendering cell')}
            <td>Yoshi Tannamuri</td>
            {console.log('rendering cell')}
            <td>Canada</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            {console.log('rendering cell')}
            <td>Giovanni Rovelli</td>
            {console.log('rendering cell')}
            <td>Italy</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            {console.log('rendering cell')}
            <td>Maria Anders</td>
            {console.log('rendering cell')}
            <td>Germany</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            {console.log('rendering cell')}
            <td>Francisco Chang</td>
            {console.log('rendering cell')}
            <td>Mexico</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Ernst Handel</td>
            {console.log('rendering cell')}
            <td>Roland Mendel</td>
            {console.log('rendering cell')}
            <td>Austria</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Island Trading</td>
            {console.log('rendering cell')}
            <td>Helen Bennett</td>
            {console.log('rendering cell')}
            <td>UK</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            {console.log('rendering cell')}
            <td>Yoshi Tannamuri</td>
            {console.log('rendering cell')}
            <td>Canada</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            {console.log('rendering cell')}
            <td>Giovanni Rovelli</td>
            {console.log('rendering cell')}
            <td>Italy</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            {console.log('rendering cell')}
            <td>Maria Anders</td>
            {console.log('rendering cell')}
            <td>Germany</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            {console.log('rendering cell')}
            <td>Francisco Chang</td>
            {console.log('rendering cell')}
            <td>Mexico</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Ernst Handel</td>
            {console.log('rendering cell')}
            <td>Roland Mendel</td>
            {console.log('rendering cell')}
            <td>Austria</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Island Trading</td>
            {console.log('rendering cell')}
            <td>Helen Bennett</td>
            {console.log('rendering cell')}
            <td>UK</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            {console.log('rendering cell')}
            <td>Yoshi Tannamuri</td>
            {console.log('rendering cell')}
            <td>Canada</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            {console.log('rendering cell')}
            <td>Giovanni Rovelli</td>
            {console.log('rendering cell')}
            <td>Italy</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            {console.log('rendering cell')}
            <td>Maria Anders</td>
            {console.log('rendering cell')}
            <td>Germany</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            {console.log('rendering cell')}
            <td>Francisco Chang</td>
            {console.log('rendering cell')}
            <td>Mexico</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Ernst Handel</td>
            {console.log('rendering cell')}
            <td>Roland Mendel</td>
            {console.log('rendering cell')}
            <td>Austria</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Island Trading</td>
            {console.log('rendering cell')}
            <td>Helen Bennett</td>
            {console.log('rendering cell')}
            <td>UK</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            {console.log('rendering cell')}
            <td>Yoshi Tannamuri</td>
            {console.log('rendering cell')}
            <td>Canada</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            {console.log('rendering cell')}
            <td>Giovanni Rovelli</td>
            {console.log('rendering cell')}
            <td>Italy</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            {console.log('rendering cell')}
            <td>Maria Anders</td>
            {console.log('rendering cell')}
            <td>Germany</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            {console.log('rendering cell')}
            <td>Francisco Chang</td>
            {console.log('rendering cell')}
            <td>Mexico</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Ernst Handel</td>
            {console.log('rendering cell')}
            <td>Roland Mendel</td>
            {console.log('rendering cell')}
            <td>Austria</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Island Trading</td>
            {console.log('rendering cell')}
            <td>Helen Bennett</td>
            {console.log('rendering cell')}
            <td>UK</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            {console.log('rendering cell')}
            <td>Yoshi Tannamuri</td>
            {console.log('rendering cell')}
            <td>Canada</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            {console.log('rendering cell')}
            <td>Giovanni Rovelli</td>
            {console.log('rendering cell')}
            <td>Italy</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            {console.log('rendering cell')}
            <td>Maria Anders</td>
            {console.log('rendering cell')}
            <td>Germany</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            {console.log('rendering cell')}
            <td>Francisco Chang</td>
            {console.log('rendering cell')}
            <td>Mexico</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Ernst Handel</td>
            {console.log('rendering cell')}
            <td>Roland Mendel</td>
            {console.log('rendering cell')}
            <td>Austria</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Island Trading</td>
            {console.log('rendering cell')}
            <td>Helen Bennett</td>
            {console.log('rendering cell')}
            <td>UK</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            {console.log('rendering cell')}
            <td>Yoshi Tannamuri</td>
            {console.log('rendering cell')}
            <td>Canada</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            {console.log('rendering cell')}
            <td>Giovanni Rovelli</td>
            {console.log('rendering cell')}
            <td>Italy</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            {console.log('rendering cell')}
            <td>Maria Anders</td>
            {console.log('rendering cell')}
            <td>Germany</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            {console.log('rendering cell')}
            <td>Francisco Chang</td>
            {console.log('rendering cell')}
            <td>Mexico</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Ernst Handel</td>
            {console.log('rendering cell')}
            <td>Roland Mendel</td>
            {console.log('rendering cell')}
            <td>Austria</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Island Trading</td>
            {console.log('rendering cell')}
            <td>Helen Bennett</td>
            {console.log('rendering cell')}
            <td>UK</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            {console.log('rendering cell')}
            <td>Yoshi Tannamuri</td>
            {console.log('rendering cell')}
            <td>Canada</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            {console.log('rendering cell')}
            <td>Giovanni Rovelli</td>
            {console.log('rendering cell')}
            <td>Italy</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            {console.log('rendering cell')}
            <td>Maria Anders</td>
            {console.log('rendering cell')}
            <td>Germany</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            {console.log('rendering cell')}
            <td>Francisco Chang</td>
            {console.log('rendering cell')}
            <td>Mexico</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Ernst Handel</td>
            {console.log('rendering cell')}
            <td>Roland Mendel</td>
            {console.log('rendering cell')}
            <td>Austria</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Island Trading</td>
            {console.log('rendering cell')}
            <td>Helen Bennett</td>
            {console.log('rendering cell')}
            <td>UK</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            {console.log('rendering cell')}
            <td>Yoshi Tannamuri</td>
            {console.log('rendering cell')}
            <td>Canada</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            {console.log('rendering cell')}
            <td>Giovanni Rovelli</td>
            {console.log('rendering cell')}
            <td>Italy</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            {console.log('rendering cell')}
            <td>Maria Anders</td>
            {console.log('rendering cell')}
            <td>Germany</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            {console.log('rendering cell')}
            <td>Francisco Chang</td>
            {console.log('rendering cell')}
            <td>Mexico</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Ernst Handel</td>
            {console.log('rendering cell')}
            <td>Roland Mendel</td>
            {console.log('rendering cell')}
            <td>Austria</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Island Trading</td>
            {console.log('rendering cell')}
            <td>Helen Bennett</td>
            {console.log('rendering cell')}
            <td>UK</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            {console.log('rendering cell')}
            <td>Yoshi Tannamuri</td>
            {console.log('rendering cell')}
            <td>Canada</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            {console.log('rendering cell')}
            <td>Giovanni Rovelli</td>
            {console.log('rendering cell')}
            <td>Italy</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            {console.log('rendering cell')}
            <td>Maria Anders</td>
            {console.log('rendering cell')}
            <td>Germany</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            {console.log('rendering cell')}
            <td>Francisco Chang</td>
            {console.log('rendering cell')}
            <td>Mexico</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Ernst Handel</td>
            {console.log('rendering cell')}
            <td>Roland Mendel</td>
            {console.log('rendering cell')}
            <td>Austria</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Island Trading</td>
            {console.log('rendering cell')}
            <td>Helen Bennett</td>
            {console.log('rendering cell')}
            <td>UK</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            {console.log('rendering cell')}
            <td>Yoshi Tannamuri</td>
            {console.log('rendering cell')}
            <td>Canada</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            {console.log('rendering cell')}
            <td>Giovanni Rovelli</td>
            {console.log('rendering cell')}
            <td>Italy</td>
            {console.log('rendering cell')}
          </tr>
        </table>
      </Tab>
      <Tab text="third tab">
        <table>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            {console.log('rendering cell')}
            <td>Maria Anders</td>
            {console.log('rendering cell')}
            <td>Germany</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            {console.log('rendering cell')}
            <td>Francisco Chang</td>
            {console.log('rendering cell')}
            <td>Mexico</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Ernst Handel</td>
            {console.log('rendering cell')}
            <td>Roland Mendel</td>
            {console.log('rendering cell')}
            <td>Austria</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Island Trading</td>
            {console.log('rendering cell')}
            <td>Helen Bennett</td>
            {console.log('rendering cell')}
            <td>UK</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            {console.log('rendering cell')}
            <td>Yoshi Tannamuri</td>
            {console.log('rendering cell')}
            <td>Canada</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            {console.log('rendering cell')}
            <td>Giovanni Rovelli</td>
            {console.log('rendering cell')}
            <td>Italy</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            {console.log('rendering cell')}
            <td>Maria Anders</td>
            {console.log('rendering cell')}
            <td>Germany</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            {console.log('rendering cell')}
            <td>Francisco Chang</td>
            {console.log('rendering cell')}
            <td>Mexico</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Ernst Handel</td>
            {console.log('rendering cell')}
            <td>Roland Mendel</td>
            {console.log('rendering cell')}
            <td>Austria</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Island Trading</td>
            {console.log('rendering cell')}
            <td>Helen Bennett</td>
            {console.log('rendering cell')}
            <td>UK</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            {console.log('rendering cell')}
            <td>Yoshi Tannamuri</td>
            {console.log('rendering cell')}
            <td>Canada</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            {console.log('rendering cell')}
            <td>Giovanni Rovelli</td>
            {console.log('rendering cell')}
            <td>Italy</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            {console.log('rendering cell')}
            <td>Maria Anders</td>
            {console.log('rendering cell')}
            <td>Germany</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            {console.log('rendering cell')}
            <td>Francisco Chang</td>
            {console.log('rendering cell')}
            <td>Mexico</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Ernst Handel</td>
            {console.log('rendering cell')}
            <td>Roland Mendel</td>
            {console.log('rendering cell')}
            <td>Austria</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Island Trading</td>
            {console.log('rendering cell')}
            <td>Helen Bennett</td>
            {console.log('rendering cell')}
            <td>UK</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            {console.log('rendering cell')}
            <td>Yoshi Tannamuri</td>
            {console.log('rendering cell')}
            <td>Canada</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            {console.log('rendering cell')}
            <td>Giovanni Rovelli</td>
            {console.log('rendering cell')}
            <td>Italy</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            {console.log('rendering cell')}
            <td>Maria Anders</td>
            {console.log('rendering cell')}
            <td>Germany</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            {console.log('rendering cell')}
            <td>Francisco Chang</td>
            {console.log('rendering cell')}
            <td>Mexico</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Ernst Handel</td>
            {console.log('rendering cell')}
            <td>Roland Mendel</td>
            {console.log('rendering cell')}
            <td>Austria</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Island Trading</td>
            {console.log('rendering cell')}
            <td>Helen Bennett</td>
            {console.log('rendering cell')}
            <td>UK</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            {console.log('rendering cell')}
            <td>Yoshi Tannamuri</td>
            {console.log('rendering cell')}
            <td>Canada</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            {console.log('rendering cell')}
            <td>Giovanni Rovelli</td>
            {console.log('rendering cell')}
            <td>Italy</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            {console.log('rendering cell')}
            <td>Maria Anders</td>
            {console.log('rendering cell')}
            <td>Germany</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            {console.log('rendering cell')}
            <td>Francisco Chang</td>
            {console.log('rendering cell')}
            <td>Mexico</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Ernst Handel</td>
            {console.log('rendering cell')}
            <td>Roland Mendel</td>
            {console.log('rendering cell')}
            <td>Austria</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Island Trading</td>
            {console.log('rendering cell')}
            <td>Helen Bennett</td>
            {console.log('rendering cell')}
            <td>UK</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            {console.log('rendering cell')}
            <td>Yoshi Tannamuri</td>
            {console.log('rendering cell')}
            <td>Canada</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            {console.log('rendering cell')}
            <td>Giovanni Rovelli</td>
            {console.log('rendering cell')}
            <td>Italy</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            {console.log('rendering cell')}
            <td>Maria Anders</td>
            {console.log('rendering cell')}
            <td>Germany</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            {console.log('rendering cell')}
            <td>Francisco Chang</td>
            {console.log('rendering cell')}
            <td>Mexico</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Ernst Handel</td>
            {console.log('rendering cell')}
            <td>Roland Mendel</td>
            {console.log('rendering cell')}
            <td>Austria</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Island Trading</td>
            {console.log('rendering cell')}
            <td>Helen Bennett</td>
            {console.log('rendering cell')}
            <td>UK</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            {console.log('rendering cell')}
            <td>Yoshi Tannamuri</td>
            {console.log('rendering cell')}
            <td>Canada</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            {console.log('rendering cell')}
            <td>Giovanni Rovelli</td>
            {console.log('rendering cell')}
            <td>Italy</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            {console.log('rendering cell')}
            <td>Maria Anders</td>
            {console.log('rendering cell')}
            <td>Germany</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            {console.log('rendering cell')}
            <td>Francisco Chang</td>
            {console.log('rendering cell')}
            <td>Mexico</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Ernst Handel</td>
            {console.log('rendering cell')}
            <td>Roland Mendel</td>
            {console.log('rendering cell')}
            <td>Austria</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Island Trading</td>
            {console.log('rendering cell')}
            <td>Helen Bennett</td>
            {console.log('rendering cell')}
            <td>UK</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            {console.log('rendering cell')}
            <td>Yoshi Tannamuri</td>
            {console.log('rendering cell')}
            <td>Canada</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            {console.log('rendering cell')}
            <td>Giovanni Rovelli</td>
            {console.log('rendering cell')}
            <td>Italy</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            {console.log('rendering cell')}
            <td>Maria Anders</td>
            {console.log('rendering cell')}
            <td>Germany</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            {console.log('rendering cell')}
            <td>Francisco Chang</td>
            {console.log('rendering cell')}
            <td>Mexico</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Ernst Handel</td>
            {console.log('rendering cell')}
            <td>Roland Mendel</td>
            {console.log('rendering cell')}
            <td>Austria</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Island Trading</td>
            {console.log('rendering cell')}
            <td>Helen Bennett</td>
            {console.log('rendering cell')}
            <td>UK</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            {console.log('rendering cell')}
            <td>Yoshi Tannamuri</td>
            {console.log('rendering cell')}
            <td>Canada</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            {console.log('rendering cell')}
            <td>Giovanni Rovelli</td>
            {console.log('rendering cell')}
            <td>Italy</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            {console.log('rendering cell')}
            <td>Maria Anders</td>
            {console.log('rendering cell')}
            <td>Germany</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            {console.log('rendering cell')}
            <td>Francisco Chang</td>
            {console.log('rendering cell')}
            <td>Mexico</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Ernst Handel</td>
            {console.log('rendering cell')}
            <td>Roland Mendel</td>
            {console.log('rendering cell')}
            <td>Austria</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Island Trading</td>
            {console.log('rendering cell')}
            <td>Helen Bennett</td>
            {console.log('rendering cell')}
            <td>UK</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            {console.log('rendering cell')}
            <td>Yoshi Tannamuri</td>
            {console.log('rendering cell')}
            <td>Canada</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            {console.log('rendering cell')}
            <td>Giovanni Rovelli</td>
            {console.log('rendering cell')}
            <td>Italy</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            {console.log('rendering cell')}
            <td>Maria Anders</td>
            {console.log('rendering cell')}
            <td>Germany</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            {console.log('rendering cell')}
            <td>Francisco Chang</td>
            {console.log('rendering cell')}
            <td>Mexico</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Ernst Handel</td>
            {console.log('rendering cell')}
            <td>Roland Mendel</td>
            {console.log('rendering cell')}
            <td>Austria</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Island Trading</td>
            {console.log('rendering cell')}
            <td>Helen Bennett</td>
            {console.log('rendering cell')}
            <td>UK</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            {console.log('rendering cell')}
            <td>Yoshi Tannamuri</td>
            {console.log('rendering cell')}
            <td>Canada</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            {console.log('rendering cell')}
            <td>Giovanni Rovelli</td>
            {console.log('rendering cell')}
            <td>Italy</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            {console.log('rendering cell')}
            <td>Maria Anders</td>
            {console.log('rendering cell')}
            <td>Germany</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            {console.log('rendering cell')}
            <td>Francisco Chang</td>
            {console.log('rendering cell')}
            <td>Mexico</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Ernst Handel</td>
            {console.log('rendering cell')}
            <td>Roland Mendel</td>
            {console.log('rendering cell')}
            <td>Austria</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Island Trading</td>
            {console.log('rendering cell')}
            <td>Helen Bennett</td>
            {console.log('rendering cell')}
            <td>UK</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            {console.log('rendering cell')}
            <td>Yoshi Tannamuri</td>
            {console.log('rendering cell')}
            <td>Canada</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            {console.log('rendering cell')}
            <td>Giovanni Rovelli</td>
            {console.log('rendering cell')}
            <td>Italy</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            {console.log('rendering cell')}
            <td>Maria Anders</td>
            {console.log('rendering cell')}
            <td>Germany</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            {console.log('rendering cell')}
            <td>Francisco Chang</td>
            {console.log('rendering cell')}
            <td>Mexico</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Ernst Handel</td>
            {console.log('rendering cell')}
            <td>Roland Mendel</td>
            {console.log('rendering cell')}
            <td>Austria</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Island Trading</td>
            {console.log('rendering cell')}
            <td>Helen Bennett</td>
            {console.log('rendering cell')}
            <td>UK</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            {console.log('rendering cell')}
            <td>Yoshi Tannamuri</td>
            {console.log('rendering cell')}
            <td>Canada</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            {console.log('rendering cell')}
            <td>Giovanni Rovelli</td>
            {console.log('rendering cell')}
            <td>Italy</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            {console.log('rendering cell')}
            <td>Maria Anders</td>
            {console.log('rendering cell')}
            <td>Germany</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            {console.log('rendering cell')}
            <td>Francisco Chang</td>
            {console.log('rendering cell')}
            <td>Mexico</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Ernst Handel</td>
            {console.log('rendering cell')}
            <td>Roland Mendel</td>
            {console.log('rendering cell')}
            <td>Austria</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Island Trading</td>
            {console.log('rendering cell')}
            <td>Helen Bennett</td>
            {console.log('rendering cell')}
            <td>UK</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            {console.log('rendering cell')}
            <td>Yoshi Tannamuri</td>
            {console.log('rendering cell')}
            <td>Canada</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            {console.log('rendering cell')}
            <td>Giovanni Rovelli</td>
            {console.log('rendering cell')}
            <td>Italy</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            {console.log('rendering cell')}
            <td>Maria Anders</td>
            {console.log('rendering cell')}
            <td>Germany</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            {console.log('rendering cell')}
            <td>Francisco Chang</td>
            {console.log('rendering cell')}
            <td>Mexico</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Ernst Handel</td>
            {console.log('rendering cell')}
            <td>Roland Mendel</td>
            {console.log('rendering cell')}
            <td>Austria</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Island Trading</td>
            {console.log('rendering cell')}
            <td>Helen Bennett</td>
            {console.log('rendering cell')}
            <td>UK</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            {console.log('rendering cell')}
            <td>Yoshi Tannamuri</td>
            {console.log('rendering cell')}
            <td>Canada</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            {console.log('rendering cell')}
            <td>Giovanni Rovelli</td>
            {console.log('rendering cell')}
            <td>Italy</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            {console.log('rendering cell')}
            <td>Maria Anders</td>
            {console.log('rendering cell')}
            <td>Germany</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            {console.log('rendering cell')}
            <td>Francisco Chang</td>
            {console.log('rendering cell')}
            <td>Mexico</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Ernst Handel</td>
            {console.log('rendering cell')}
            <td>Roland Mendel</td>
            {console.log('rendering cell')}
            <td>Austria</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Island Trading</td>
            {console.log('rendering cell')}
            <td>Helen Bennett</td>
            {console.log('rendering cell')}
            <td>UK</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            {console.log('rendering cell')}
            <td>Yoshi Tannamuri</td>
            {console.log('rendering cell')}
            <td>Canada</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            {console.log('rendering cell')}
            <td>Giovanni Rovelli</td>
            {console.log('rendering cell')}
            <td>Italy</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            {console.log('rendering cell')}
            <td>Maria Anders</td>
            {console.log('rendering cell')}
            <td>Germany</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            {console.log('rendering cell')}
            <td>Francisco Chang</td>
            {console.log('rendering cell')}
            <td>Mexico</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Ernst Handel</td>
            {console.log('rendering cell')}
            <td>Roland Mendel</td>
            {console.log('rendering cell')}
            <td>Austria</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Island Trading</td>
            {console.log('rendering cell')}
            <td>Helen Bennett</td>
            {console.log('rendering cell')}
            <td>UK</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            {console.log('rendering cell')}
            <td>Yoshi Tannamuri</td>
            {console.log('rendering cell')}
            <td>Canada</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            {console.log('rendering cell')}
            <td>Giovanni Rovelli</td>
            {console.log('rendering cell')}
            <td>Italy</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            {console.log('rendering cell')}
            <td>Maria Anders</td>
            {console.log('rendering cell')}
            <td>Germany</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            {console.log('rendering cell')}
            <td>Francisco Chang</td>
            {console.log('rendering cell')}
            <td>Mexico</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Ernst Handel</td>
            {console.log('rendering cell')}
            <td>Roland Mendel</td>
            {console.log('rendering cell')}
            <td>Austria</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Island Trading</td>
            {console.log('rendering cell')}
            <td>Helen Bennett</td>
            {console.log('rendering cell')}
            <td>UK</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            {console.log('rendering cell')}
            <td>Yoshi Tannamuri</td>
            {console.log('rendering cell')}
            <td>Canada</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            {console.log('rendering cell')}
            <td>Giovanni Rovelli</td>
            {console.log('rendering cell')}
            <td>Italy</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            {console.log('rendering cell')}
            <td>Maria Anders</td>
            {console.log('rendering cell')}
            <td>Germany</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            {console.log('rendering cell')}
            <td>Francisco Chang</td>
            {console.log('rendering cell')}
            <td>Mexico</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Ernst Handel</td>
            {console.log('rendering cell')}
            <td>Roland Mendel</td>
            {console.log('rendering cell')}
            <td>Austria</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Island Trading</td>
            {console.log('rendering cell')}
            <td>Helen Bennett</td>
            {console.log('rendering cell')}
            <td>UK</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            {console.log('rendering cell')}
            <td>Yoshi Tannamuri</td>
            {console.log('rendering cell')}
            <td>Canada</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            {console.log('rendering cell')}
            <td>Giovanni Rovelli</td>
            {console.log('rendering cell')}
            <td>Italy</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            {console.log('rendering cell')}
            <td>Maria Anders</td>
            {console.log('rendering cell')}
            <td>Germany</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            {console.log('rendering cell')}
            <td>Francisco Chang</td>
            {console.log('rendering cell')}
            <td>Mexico</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Ernst Handel</td>
            {console.log('rendering cell')}
            <td>Roland Mendel</td>
            {console.log('rendering cell')}
            <td>Austria</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Island Trading</td>
            {console.log('rendering cell')}
            <td>Helen Bennett</td>
            {console.log('rendering cell')}
            <td>UK</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            {console.log('rendering cell')}
            <td>Yoshi Tannamuri</td>
            {console.log('rendering cell')}
            <td>Canada</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            {console.log('rendering cell')}
            <td>Giovanni Rovelli</td>
            {console.log('rendering cell')}
            <td>Italy</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            {console.log('rendering cell')}
            <td>Maria Anders</td>
            {console.log('rendering cell')}
            <td>Germany</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            {console.log('rendering cell')}
            <td>Francisco Chang</td>
            {console.log('rendering cell')}
            <td>Mexico</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Ernst Handel</td>
            {console.log('rendering cell')}
            <td>Roland Mendel</td>
            {console.log('rendering cell')}
            <td>Austria</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Island Trading</td>
            {console.log('rendering cell')}
            <td>Helen Bennett</td>
            {console.log('rendering cell')}
            <td>UK</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            {console.log('rendering cell')}
            <td>Yoshi Tannamuri</td>
            {console.log('rendering cell')}
            <td>Canada</td>
            {console.log('rendering cell')}
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            {console.log('rendering cell')}
            <td>Giovanni Rovelli</td>
            {console.log('rendering cell')}
            <td>Italy</td>
            {console.log('rendering cell')}
          </tr>
        </table>
      </Tab>
    </TabBar>
  );
};
export default TabInterface;
