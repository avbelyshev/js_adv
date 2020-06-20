class Div extends HtmlElement {
    constructor() {
        super();
    }

    set onClick(func) {
        this._element.addEventListener('click', func);
    }
}
