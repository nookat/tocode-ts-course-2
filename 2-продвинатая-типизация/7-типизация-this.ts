const user = {
  id: 123,
  admin: false,
  becomeAdmin: function () {
    this.admin = true;
  }
}

// как типизировать this в обработчике
function myClickHandler(this: HTMLButtonElement, event: Event) {
  this.disabled = true;
}

export {}