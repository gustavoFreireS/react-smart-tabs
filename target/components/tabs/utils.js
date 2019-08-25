"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function arrayMove(arr, oldIndex, newIndex) {
    arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
    return arr;
}
exports.arrayMove = arrayMove;
//# sourceMappingURL=utils.js.map