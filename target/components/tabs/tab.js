"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const uuid_1 = __importDefault(require("uuid"));
const Tab = (props) => {
    return (react_1.default.createElement("div", { className: "tab-wrapper", key: uuid_1.default() },
        react_1.default.createElement("div", null, props.children)));
};
exports.default = Tab;
//# sourceMappingURL=tab.js.map