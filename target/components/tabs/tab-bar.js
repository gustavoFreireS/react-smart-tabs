"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_svg_1 = __importDefault(require("react-svg"));
const cancel_svg_1 = __importDefault(require("./cancel.svg"));
const uuid_1 = __importDefault(require("uuid"));
const utils_1 = require("./utils");
const TabBar = (props) => {
    const [tabId, setTabId] = react_1.useState("");
    const tabBar = react_1.useRef(null);
    const pos1 = react_1.useRef(0);
    const pos3 = react_1.useRef(0);
    const [dragged, setDrag] = react_1.useState(null);
    const [tabList, setTabList] = react_1.useState([]);
    const refList = react_1.useRef(react_1.default.Children.toArray(props.children).map(() => {
        return react_1.createRef();
    }));
    // Add the tabs that comes from props to the tabList Array
    react_1.useEffect(() => {
        // setTabList(React.Children.toArray(props.children));
        const tabs = react_1.default.Children.toArray(props.children).map((tab, i) => {
            return {
                tabComponent: tab,
                id: uuid_1.default(),
                arrayIndex: i,
            };
        });
        setTabList(tabs);
    }, []);
    // if the onTabsChange prop is provided, send the modified tablist array...
    // as a parameter for the callback function
    react_1.useEffect(() => {
        if (props.onTabsChange) {
            props.onTabsChange(tabList, props.children);
        }
    }, [tabList]);
    react_1.useEffect(() => {
        const list = react_1.default.Children.toArray(props.children);
        const last = list[list.length - 1];
        if (list.length > tabList.length) {
            const newElement = {
                tabComponent: last,
                id: uuid_1.default(),
                arrayIndex: list.length - 1
            };
            setTabList([...tabList, newElement]);
            setActive(newElement);
            refList.current.push(react_1.createRef());
        }
        else {
            const tabs = tabList.map((tab) => {
                const item = list.find((element, i) => i === tab.arrayIndex);
                console.log(item);
                return Object.assign({}, tab, { tabComponent: item });
            });
            console.log(tabs);
            setTabList([...tabs]);
        }
    }, [props.children]);
    function getRef(tab) {
        return refList.current.find(item => item.current.id === tab.id);
    }
    function exactPos(e) {
        pos1.current = pos3.current - e.clientX;
        pos3.current = e.clientX;
        return getRef(dragged).current.offsetLeft - pos1.current;
    }
    function dragMouseDown(e, tab) {
        const elemn = getRef(tab).current;
        setActive(tab);
        if (!props.reorderable)
            return;
        setDrag(tab);
        // get the mouse cursor position at startup:
        pos3.current = e.clientX;
        elemn.style.left = `${elemn.getBoundingClientRect().left}px`;
        elemn.style.position = "absolute";
        elemn.style.width = `${elemn.offsetWidth}px`;
        const nextElement = elemn.nextSibling;
        const previousElement = elemn.previousSibling;
        if (nextElement && previousElement) {
            nextElement.style.marginLeft = `${elemn.getBoundingClientRect().width -
                1}px`;
        }
        else if (previousElement) {
            previousElement.style.marginRight = `${elemn.getBoundingClientRect()
                .width - 2}px`;
        }
        else {
            nextElement.style.marginLeft = `${elemn.getBoundingClientRect().width -
                1}px`;
        }
    }
    // function called when the tab is dragged
    function elementDrag(e) {
        if (!dragged)
            return;
        const position = exactPos(e);
        const currentElement = getRef(dragged).current;
        const nextElement = currentElement.nextSibling;
        const previousElement = currentElement.previousSibling;
        // all this -1 margins is for covering the aditional line after the tab
        const placeholderMargin = currentElement.getBoundingClientRect().width - 1;
        currentElement.style.left = `${position}px`;
        if (nextElement &&
            nextElement.getBoundingClientRect().left - 70 < position) {
            if (previousElement) {
                previousElement.style.marginRight = "-1px";
                previousElement.style.marginLeft = "0";
            }
            nextElement.style.marginLeft = "0px";
            nextElement.style.marginRight = `${placeholderMargin - 1}px`;
            nextElement.className = "animated";
            utils_1.arrayMove(tabList, tabList.indexOf(dragged), tabList.indexOf(dragged) + 1);
            setTabList([...tabList]);
        }
        if (previousElement &&
            previousElement.getBoundingClientRect().right - 80 > position) {
            if (nextElement) {
                nextElement.style.marginRight = "-1px";
                nextElement.style.marginLeft = "0";
            }
            previousElement.style.marginRight = "-1px";
            previousElement.style.marginLeft = `${placeholderMargin}px`;
            previousElement.className = "deanimated";
            utils_1.arrayMove(tabList, tabList.indexOf(dragged), tabList.indexOf(dragged) - 1);
            setTabList([...tabList]);
        }
    }
    // Function called when the dragged element is relased
    function closeDragElement(e) {
        if (!dragged)
            return;
        const elemn = getRef(dragged).current;
        const nextElement = elemn.nextSibling;
        const previousElement = elemn.previousSibling;
        if (nextElement) {
            nextElement.style.marginLeft = "0";
            nextElement.style.marginRight = "-1px";
        }
        if (previousElement) {
            previousElement.style.marginLeft = "0";
            previousElement.style.marginRight = "-1px";
        }
        elemn.style.position = "relative";
        elemn.style.left = "auto";
        elemn.style.width = "145px";
        tabBar.current.onmouseup = null;
        setDrag(null);
    }
    // closes elements based on List Order
    const removeTab = (id, e, tab) => {
        e.stopPropagation();
        if (checkActive(tab) && tabList.length > 1) {
            const backTab = tabList[tabList.indexOf(tab) + 1];
            const frontTab = tabList[tabList.indexOf(tab) - 1];
            if (backTab) {
                setActive(backTab);
            }
            else {
                setActive(frontTab);
            }
        }
        const removed = tabList;
        removed.splice(tabList.indexOf(tab), 1);
        setTabList([...removed]);
        props.onTabClose(tab);
    };
    // set a tab as the active tab based on it's id
    const setActive = (tab) => {
        setTabId(tab.id);
        if (props.onTabClick) {
            props.onTabClick(tab);
        }
    };
    // function to add a new element on the list of tabs
    const addTab = () => {
        props.newTab();
    };
    // function the check if the tab is the active one
    const checkActive = (child) => {
        const active = react_1.default.Children.toArray(props.children).find((child) => {
            return child.props.active;
        });
        const currentTab = active && active.key === child.tabComponent.key ? active : null;
        if (child.id === tabId) {
            return true;
        }
        if (tabId === "" && currentTab) {
            return true;
        }
        if (!currentTab && tabId === "" && !active) {
            if (react_1.default.Children.toArray(props.children)[0].key === child.tabComponent.key) {
                return true;
            }
        }
        return false;
    };
    return (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement("div", { className: `bar__wrapper ${props.className}` },
            react_1.default.createElement("ul", { className: "tab__bar", onMouseMove: elementDrag, onMouseLeave: closeDragElement, ref: tabBar }, tabList.map((child, i) => {
                const className = child.tabComponent.props.className;
                const activeClassName = child.tabComponent.props.classNameActive;
                const closeableTab = child.tabComponent.props.closeable;
                const { closeable } = props;
                const shouldClose = closeableTab !== undefined
                    ? closeableTab && closeable
                    : closeable;
                return (react_1.default.createElement("li", { id: child.id, key: child.id, ref: refList.current[i], className: checkActive(child)
                        ? `${activeClassName || "active"} reposition`
                        : className, onMouseDown: e => dragMouseDown(e, child), onMouseUp: closeDragElement },
                    child.tabComponent.props.tabHeader ||
                        child.tabComponent.props.text,
                    shouldClose && (react_1.default.createElement("span", { className: "close", onClick: e => removeTab(child.id, e, child) }, props.closeIcon || (react_1.default.createElement(react_svg_1.default, { className: "close-icon", src: cancel_svg_1.default.toString() }))))));
            })),
            props.newTab &&
                react_1.default.createElement("span", { className: "addButton", onClick: addTab }, "+")),
        tabList.map((child) => {
            return (react_1.default.createElement("div", { id: `${child.id}-panel`, key: `${child.id}-panel`, className: `tab-panel ${checkActive(child) ? "active" : ""}` }, child.tabComponent));
        })));
};
exports.default = TabBar;
//# sourceMappingURL=tab-bar.js.map