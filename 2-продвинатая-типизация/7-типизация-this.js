"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    id: 123,
    admin: false,
    becomeAdmin: function () {
        this.admin = true;
    }
};
// как типизировать this в обработчике
function myClickHandler(event) {
    this.disabled = true;
}
