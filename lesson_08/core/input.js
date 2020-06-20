class Input extends HtmlElement {
    constructor() {
        super();
    }

    onInput(func) {
        this._element.addEventListener('keypress', func);
    }

    onFocus(func) {
        this._element.addEventListener('focus', func);
    }
}
