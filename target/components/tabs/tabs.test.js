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
const React = __importStar(require("react"));
const enzyme_1 = require("enzyme");
const tab_1 = __importDefault(require("./tab"));
const tab_bar_1 = __importDefault(require("./tab-bar"));
describe('tab subcomponent', () => {
    it('should render a Tab', () => {
        const result = enzyme_1.shallow(React.createElement(tab_1.default, { text: "firstTab" },
            React.createElement("h3", null, "Test")));
        expect(result).toMatchSnapshot();
    });
});
describe('TabBar component', () => {
    it('should render a tab bar with first tab active', () => {
        const result = enzyme_1.shallow(React.createElement(tab_bar_1.default, null,
            React.createElement(tab_1.default, { text: "firstTab" },
                React.createElement("h3", null, "Test")),
            React.createElement(tab_1.default, { text: "firstTab" },
                React.createElement("h3", null, "Test"))));
        expect(result).toMatchSnapshot();
    });
    it('should render a tab bar with second tab active', () => {
        const result = enzyme_1.mount(React.createElement(tab_bar_1.default, null,
            React.createElement(tab_1.default, { text: "firstTab" },
                React.createElement("h3", null, "Test")),
            React.createElement(tab_1.default, { text: "firstTab", active: true },
                React.createElement("h3", null, "Test"))));
        const firstActive = result.find('.active').first();
        const secondTab = result.find('li').last();
        expect(firstActive.props().id).toBe(secondTab.props().id);
    });
    it('should render a tab bar with one tab inside', () => {
        const result = enzyme_1.shallow(React.createElement(tab_bar_1.default, null,
            React.createElement(tab_1.default, { text: "firstTab" },
                React.createElement("h3", null, "Test"))));
        expect(result).toMatchSnapshot();
    });
    it('should render a tab bar with multiple tabs inside', () => {
        const result = enzyme_1.shallow(React.createElement(tab_bar_1.default, null,
            React.createElement(tab_1.default, { text: "firstTab" },
                React.createElement("h3", null, "Test")),
            React.createElement(tab_1.default, { text: "firstTab" },
                React.createElement("h3", null, "Test"))));
        expect(result).toMatchSnapshot();
    });
    it('should add new Tab', () => {
        const openNew = () => {
            return React.createElement(tab_1.default, { text: "new Tab" },
                React.createElement("h3", null, "New Tab"));
        };
        const result = enzyme_1.shallow(React.createElement(tab_bar_1.default, { newTab: openNew },
            React.createElement(tab_1.default, { text: "firstTab" },
                React.createElement("h3", null, "Test")),
            React.createElement(tab_1.default, { text: "firstTab" },
                React.createElement("h3", null, "Test2"))));
        result.find('.addButton').simulate('click');
        expect(result.find('#newOne')).toBeTruthy();
    });
    it('should change the position of a tab fowards', () => {
        const result = enzyme_1.mount(React.createElement(tab_bar_1.default, { reorderable: true },
            React.createElement(tab_1.default, { text: "firstTab" },
                React.createElement("h3", null, "Test")),
            React.createElement(tab_1.default, { text: "secondTab" },
                React.createElement("h3", null, "Test2"))));
        const first = result.find('li').first();
        const second = result.find('li').last();
        result.find('li').first().simulate('mouseDown', { clientX: 500 });
        result.find('.tab__bar').simulate('mouseMove', { clientX: 500 });
        const firstElelment = result.find('li').first();
        const secondElelment = result.find('li').last();
        expect(firstElelment.props().id).toBe(second.props().id);
        expect(secondElelment.props().id).toBe(first.props().id);
    });
    it('should close a Tab', () => {
        const result = enzyme_1.mount(React.createElement(tab_bar_1.default, { closeable: true },
            React.createElement(tab_1.default, { text: "firstTab" },
                React.createElement("h3", null, "Test")),
            React.createElement(tab_1.default, { text: "secondTab" },
                React.createElement("h3", null, "Test2"))));
        result.find('.close').first().simulate('click');
        expect(result.find('#closed').exists()).toBeFalsy();
    });
    it('should close the active second tab', () => {
        const result = enzyme_1.mount(React.createElement(tab_bar_1.default, { closeable: true },
            React.createElement(tab_1.default, { text: "firstTab" },
                React.createElement("h3", null, "Test")),
            React.createElement(tab_1.default, { text: "secondTab", active: true },
                React.createElement("h3", null, "Test2"))));
        result.find('.close').last().simulate('click');
        expect(result.find('li').at(1).exists()).toBeFalsy();
    });
    it('should render 2 tabs with random ids', () => {
        const result = enzyme_1.mount(React.createElement(tab_bar_1.default, null,
            React.createElement(tab_1.default, { text: "firstTab" },
                React.createElement("h3", null, "Test")),
            React.createElement(tab_1.default, { text: "firstTab" },
                React.createElement("h3", null, "Test"))));
        const firstTab = result.find('li').first();
        const secondTab = result.find('li').last();
        expect(firstTab.props().id !== secondTab.props().id).toBeTruthy;
    });
    it('should change the position of a tab backwards', () => {
        const result = enzyme_1.mount(React.createElement(tab_bar_1.default, { reorderable: true },
            React.createElement(tab_1.default, { text: "firstTabw" },
                React.createElement("h3", null, "Test1")),
            React.createElement(tab_1.default, { text: "secondTabw" },
                React.createElement("h3", null, "Test3"))));
        const first = result.find('li').first();
        const second = result.find('li').last();
        result.find('li').last().simulate('mouseDown', { clientX: 0 });
        result.find('.tab__bar').simulate('mouseMove', { clientX: -200 });
        const firstElelment = result.find('li').first();
        const secondElelment = result.find('li').last();
        expect(firstElelment.props().id).toBe(second.props().id);
        expect(secondElelment.props().id).toBe(first.props().id);
    });
    it('should change the position of a tab backwards with three elements', () => {
        const result = enzyme_1.mount(React.createElement(tab_bar_1.default, { reorderable: true },
            React.createElement(tab_1.default, { text: "firstTab" },
                React.createElement("h3", null, "Test1")),
            React.createElement(tab_1.default, { text: "secondTab" },
                React.createElement("h3", null, "Test2")),
            React.createElement(tab_1.default, { text: "thirdTab" },
                React.createElement("h3", null, "Test3"))));
        const first = result.find('li').first();
        const second = result.find('li').at(1);
        second.simulate('mouseDown', { clientX: 0 });
        result.find('.tab__bar').simulate('mouseMove', { clientX: -200 });
        second.simulate('mouseUp', { clientX: -200 });
        const firstElelment = result.find('li').first();
        const secondElelment = result.find('li').at(1);
        expect(firstElelment.props().id).toBe(second.props().id);
        expect(secondElelment.props().id).toBe(first.props().id);
    });
    it('should change the position of a tab foward with three elements', () => {
        const result = enzyme_1.mount(React.createElement(tab_bar_1.default, { reorderable: true },
            React.createElement(tab_1.default, { text: "firstTab" },
                React.createElement("h3", null, "Test1")),
            React.createElement(tab_1.default, { text: "secondTab" },
                React.createElement("h3", null, "Test2")),
            React.createElement(tab_1.default, { text: "thirdTab" },
                React.createElement("h3", null, "Test3"))));
        const third = result.find('li').at(2);
        const second = result.find('li').at(1);
        second.simulate('mouseDown', { clientX: 0 });
        result.find('.tab__bar').simulate('mouseMove', { clientX: 100 });
        second.simulate('mouseUp', { clientX: 100 });
        const thirdElelment = result.find('li').at(2);
        const secondElelment = result.find('li').at(1);
        expect(thirdElelment.props().id).toBe(second.props().id);
        expect(secondElelment.props().id).toBe(third.props().id);
    });
    it('should show the clicked a tab', () => {
        const result = enzyme_1.mount(React.createElement(tab_bar_1.default, null,
            React.createElement(tab_1.default, { text: "firstTab" },
                React.createElement("h3", null, "Test")),
            React.createElement(tab_1.default, { text: "firstTab" },
                React.createElement("h3", null, "Test2"))));
        const tab = result.find('li').last();
        tab.simulate('mouseDown');
        tab.simulate('mouseUp');
        const tabPanel = result.find('.active').last();
        expect(tabPanel.props().id).toBe(`${tab.props().id}-panel`);
    });
    it('try to drag an element without reorderable prop', () => {
        const result = enzyme_1.mount(React.createElement(tab_bar_1.default, null,
            React.createElement(tab_1.default, { text: "firstTab" },
                React.createElement("h3", null, "Test")),
            React.createElement(tab_1.default, { text: "firstTab" },
                React.createElement("h3", null, "Test2"))));
        const first = result.find('li').first();
        const second = result.find('li').at(1);
        first.simulate('mouseDown');
        result.find('.tab__bar').simulate('mouseMove', { clientX: 100 });
        const firstElelment = result.find('li').first();
        const secondElelment = result.find('li').at(1);
        expect(firstElelment.props().id).toBe(first.props().id);
        expect(secondElelment.props().id).toBe(second.props().id);
    });
    it('should call the onTabsChange function', () => {
        const changed = jest.fn();
        const result = enzyme_1.mount(React.createElement(tab_bar_1.default, { closeable: true, onTabsChange: changed },
            React.createElement(tab_1.default, { text: "firstTab" },
                React.createElement("h3", null, "Test")),
            React.createElement(tab_1.default, { text: "secondTab active" },
                React.createElement("h3", null, "Test2"))));
        result.find('.close').last().simulate('click');
        expect(changed).toHaveBeenCalled();
    });
    it('should call the onTabClick function', () => {
        const click = jest.fn();
        const result = enzyme_1.mount(React.createElement(tab_bar_1.default, { closeable: true, onTabClick: click },
            React.createElement(tab_1.default, { text: "firstTab" },
                React.createElement("h3", null, "Test")),
            React.createElement(tab_1.default, { text: "secondTab active" },
                React.createElement("h3", null, "Test2"))));
        result.find('li').last().simulate('mouseDown');
        expect(click).toHaveBeenCalled();
    });
});
//# sourceMappingURL=tabs.test.js.map