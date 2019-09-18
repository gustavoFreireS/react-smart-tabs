import {
  default as React,
  Fragment,
  useState,
  useRef,
  useEffect,
  ReactElement,
  createRef,
  ReactChildren
} from 'react';
import ReactSVG from 'react-svg';
import cancelSvg from './cancel.svg';
import Tab from './tab';
import uuid from 'uuid';
import { arrayMove } from './utils';

interface Tab {
  tabComponent: ReactElement;
  id: string;
}

export interface TabBarProps {
  newTab?: (e?: any) => void;
  reorderable?: boolean; // boolean to activate the reorderable behavior of the tabs
  children: any; // the tab passed as children
  closeable?: boolean; // booblean to activate the closeable behavior on tabs
  onTabClick?: (tab: ReactElement) => void;
  // Function to be called when the tab List changes it receives the modified tabList
  onTabsChange?: (modifiedList: Tab[], tabList?: ReactChildren) => void;
  closeIcon?: ReactElement;
  onTabClose?: (tab: ReactElement, nextTab: ReactElement) => void;
  className?: string;
  hiddenPanel?: boolean;
  hiddenTabs?: boolean;
  inactive?: boolean;
}

const TabBar = (props: TabBarProps) => {
  const [tabId, setTabId] = useState('');
  const [activeTab, setActiveTab] = useState(null);
  const tabBar = useRef(null);
  const closeElement = useRef(null);
  const pos1 = useRef(0);
  const pos3 = useRef(0);
  const [dragged, setDrag] = useState(null);
  const [tabList, setTabList] = useState([]);
  const refList = useRef(
    React.Children.toArray(props.children).map(() => {
      return createRef<HTMLLIElement>();
    })
  );

  // Add the tabs that comes from props to the tabList Array
  useEffect(() => {
    // setTabList(React.Children.toArray(props.children));
    const tabs = React.Children.toArray(props.children).map((tab, i) => {
      return {
        tabComponent: tab,
        id: uuid(),
        arrayIndex: i
      };
    });
    setTabList(tabs);
  }, []);

  // if the onTabsChange prop is provided, send the modified tablist array
  // as a parameter for the callback function
  useEffect(() => {
    if (props.onTabsChange) {
      props.onTabsChange(tabList, props.children);
    }
  }, [tabList]);
  useEffect(() => {
    const list = React.Children.toArray(props.children);
    const last = list[list.length - 1];
    if (tabList.length === 0 && list.length > 1) return;
    // modify tabLIst when a tab is added from outside
    if (list.length > tabList.length && list.length > 0) {
      tabList.find(tab => tab.tabComponent.props === last.props);
      const newElement = {
        tabComponent: last,
        id: uuid(),
        arrayIndex: list.length - 1
      };
      setTabList([...tabList, newElement]);
      setActive(newElement);
      refList.current.push(createRef<HTMLLIElement>());
    }
    // modify tabLIst when a tab is removed from outside
    if (list.length < tabList.length) {
      const tabs = list.map((tab, i) => {
        return {
          tabComponent: tab,
          id: uuid(),
          arrayIndex: i
        };
      });
      setTabList(tabs);
    }
    // modify tabLIst when a tab is modified from outside
    if (list.length === tabList.length) {
      if (dragged) return;
      const tabs = tabList.map(tab => {
        const item = list.find((element, i) => i === tab.arrayIndex);
        return {
          ...tab,
          tabComponent: item
        };
      });
      setTabList([...tabs]);
    }
  }, [props.children]);

  function getRef(tab: any) {
    return refList.current.find(item => item.current.id === tab.id);
  }
  function exactPos(e: React.MouseEvent<HTMLElement>) {
    pos1.current = pos3.current - e.clientX;
    pos3.current = e.clientX;
    return getRef(dragged).current.offsetLeft - pos1.current;
  }

  function dragMouseDown(e: any, tab: any) {
    if ('close' === e.target.className || tab.tabComponent.props.blocked) {
      return;
    }
    if (props.onTabClick) {
      props.onTabClick(tab);
    }
    const elemn = getRef(tab).current;
    setActive(tab);
    if (!props.reorderable) return;
    setDrag(tab);
    // get the mouse cursor position at startup:
    pos3.current = e.clientX;
    elemn.style.left = `${elemn.getBoundingClientRect().left}px`;
    elemn.style.position = 'absolute';
    elemn.style.width = `${elemn.offsetWidth}px`;
    const nextElement = elemn.nextSibling as HTMLElement;
    const previousElement = elemn.previousSibling as HTMLElement;
    if (nextElement && previousElement) {
      nextElement.style.marginLeft = `${elemn.getBoundingClientRect().width -
        1}px`;
    } else if (previousElement) {
      previousElement.style.marginRight = `${elemn.getBoundingClientRect()
        .width - 2}px`;
    } else {
      nextElement.style.marginLeft = `${elemn.getBoundingClientRect().width -
        1}px`;
    }
  }

  // function called when the tab is dragged
  function elementDrag(e: React.MouseEvent<HTMLElement>) {
    if (!dragged) return;
    const position = exactPos(e);
    const currentElement = getRef(dragged).current;
    const nextElement = currentElement.nextSibling as HTMLElement;
    const previousElement = currentElement.previousSibling as HTMLElement;
    // all this -1 margins is for covering the aditional line after the tab
    const placeholderMargin = currentElement.getBoundingClientRect().width - 1;
    currentElement.style.left = `${position}px`;
    currentElement.style.position = 'absolute';
    if (
      nextElement &&
      nextElement.getBoundingClientRect().left - 70 < position
    ) {
      if (previousElement) {
        previousElement.style.marginRight = '-1px';
        previousElement.style.marginLeft = '0';
      }
      nextElement.style.marginLeft = '0px';
      nextElement.style.marginRight = `${placeholderMargin - 1}px`;
      nextElement.className = 'animated';
      arrayMove(
        tabList,
        tabList.indexOf(dragged),
        tabList.indexOf(dragged) + 1
      );
      setTabList([...tabList]);
    }
    if (
      previousElement &&
      previousElement.getBoundingClientRect().right - 80 > position
    ) {
      if (nextElement) {
        nextElement.style.marginRight = '-1px';
        nextElement.style.marginLeft = '0';
      }
      previousElement.style.marginRight = '-1px';
      previousElement.style.marginLeft = `${placeholderMargin}px`;
      previousElement.className = 'deanimated';
      arrayMove(
        tabList,
        tabList.indexOf(dragged),
        tabList.indexOf(dragged) - 1
      );
      setTabList([...tabList]);
    }
  }

  // Function called when the dragged element is relased
  function closeDragElement(e: React.MouseEvent<HTMLElement>) {
    if (!dragged) return;
    const elemn = getRef(dragged).current;
    const nextElement = elemn.nextSibling as HTMLElement;
    const previousElement = elemn.previousSibling as HTMLElement;
    if (nextElement) {
      nextElement.style.marginLeft = '0';
      nextElement.style.marginRight = '-1px';
    }
    if (previousElement) {
      previousElement.style.marginLeft = '0';
      previousElement.style.marginRight = '-1px';
    }
    elemn.style.position = 'relative';
    elemn.style.left = 'auto';
    tabBar.current.onmouseup = null;
    setDrag(null);
  }

  // closes elements based on List Order
  const removeTab = (id: string, e: any, tab: any) => {
    if (checkActive(tab) && tabList.length > 1) {
      const backTab = tabList[tabList.indexOf(tab) + 1];
      const frontTab = tabList[tabList.indexOf(tab) - 1];
      if (backTab) {
        props.onTabClose && props.onTabClose(tab, backTab);
        // setActive(backTab);
      } else {
        props.onTabClose && props.onTabClose(tab, frontTab);
        // setActive(frontTab);
      }
    } else {
      props.onTabClose(tab, null);
    }
    setTabId('');
  };

  // set a tab as the active tab based on it's id
  const setActive = (tab: any) => {
    setTabId(tab.id);
    setActiveTab(tab);
  };

  // function to add a new element on the list of tabs
  const addTab = (e: any) => {
    props.newTab();
    refList.current.push(createRef<HTMLLIElement>());
  };

  // function the check if the tab is the active one
  const checkActive = (child: any) => {
    if (props.inactive) return false;
    const active = React.Children.toArray(props.children).find((child: any) => {
      return child.props.active;
    });
    const currentTab =
      active && active.props === child.tabComponent.props ? active : null;
    if (child.id === tabId) {
      return true;
    }
    if (tabId === '' && currentTab) {
      return true;
    }
    if (!currentTab && tabId === '' && !active) {
      if (
        React.Children.toArray(props.children)[0].props ===
        child.tabComponent.props
      ) {
        setActive(tabList[0]);
        return true;
      }
    }
    return false;
  };
  return (
    <div className={props.className}>
      {!props.hiddenTabs && (
        <div className={'bar__wrapper'}>
          <ul
            className="tab__bar"
            onMouseMove={elementDrag}
            onMouseLeave={closeDragElement}
            ref={tabBar}
          >
            {tabList.length > 0 &&
              tabList.map((child: any, i) => {
                const className = child.tabComponent.props.className;
                const activeClassName =
                  child.tabComponent.props.classNameActive;
                const closeableTab = child.tabComponent.props.closeable;
                const { closeable } = props;
                const shouldClose =
                  closeableTab !== undefined
                    ? closeableTab && closeable
                    : closeable;
                return (
                  <li
                    id={child.id}
                    key={child.id}
                    ref={refList.current[i]}
                    className={
                      checkActive(child)
                        ? `${activeClassName || 'active'} reposition`
                        : className
                    }
                    onMouseDown={e => dragMouseDown(e, child)}
                    onMouseUp={closeDragElement}
                  >
                    {child.tabComponent.props.tabHeader ||
                      child.tabComponent.props.text}
                    {shouldClose && (
                      <span
                        ref={closeElement}
                        className="close"
                        onClick={e => removeTab(child.id, e, child)}
                      >
                        {props.closeIcon || (
                          <ReactSVG
                            className="close-icon"
                            src={cancelSvg.toString()}
                          />
                        )}
                      </span>
                    )}
                  </li>
                );
              })}
          </ul>
          {props.newTab && (
            <span className="addButton" onClick={e => addTab(e)}>
              +
            </span>
          )}
        </div>
      )}
      {tabList.length > 0 &&
        tabList.map((child: any) => {
          return (
            <div
              id={`${child.id}-panel`}
              key={`${child.id}-panel`}
              className={`tab-panel ${
                checkActive(child) && !props.hiddenPanel ? 'active' : ''
              }`}
            >
              {child.tabComponent}
            </div>
          );
        })}
    </div>
  );
};
export default TabBar;
