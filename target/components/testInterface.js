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
const tab_1 = __importDefault(require("./tabs/tab"));
const tab_bar_1 = __importDefault(require("./tabs/tab-bar"));
const uuid_1 = __importDefault(require("uuid"));
const TabInterface = () => {
    const [number, setNumber] = react_1.useState(0);
    const [list, setList] = react_1.useState([
        react_1.default.createElement(tab_1.default, { text: "first tab", key: uuid_1.default() },
            react_1.default.createElement("h1", null, "test"))
    ]);
    const changeValue = () => {
        list[list.length - 1] = (react_1.default.createElement(tab_1.default, { text: "this is tab", active: true, key: uuid_1.default() },
            react_1.default.createElement("h1", null, "test")));
        setList([...list]);
    };
    const createNew = () => {
        setNumber(number + 1);
        return (react_1.default.createElement(tab_1.default, { text: "New Tab" },
            react_1.default.createElement("h1", null, number)));
    };
    function addTab() {
        setList([
            ...list,
            react_1.default.createElement(tab_1.default, { text: "second tab", active: true, key: uuid_1.default() },
                react_1.default.createElement("form", { className: "frm" },
                    react_1.default.createElement("h1", null, "Form 2"),
                    react_1.default.createElement("p", null, "Name"),
                    react_1.default.createElement("input", null),
                    react_1.default.createElement("p", null, "Surname"),
                    react_1.default.createElement("input", null),
                    react_1.default.createElement("p", null, "Adress"),
                    react_1.default.createElement("input", null),
                    react_1.default.createElement("p", null, "Telephone"),
                    react_1.default.createElement("input", null)))
        ]);
        console.log(list);
    }
    return (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement("button", { onClick: addTab }, "add tab"),
        react_1.default.createElement("button", { onClick: changeValue }, "change tab"),
        react_1.default.createElement(tab_bar_1.default, { closeable: true, reorderable: true, newTab: addTab, className: "small-tab" }, list.map(item => item))));
};
exports.default = TabInterface;
//# sourceMappingURL=testInterface.js.map