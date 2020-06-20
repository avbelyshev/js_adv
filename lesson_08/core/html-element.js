class HtmlElement {
    constructor() {
        this._target = document.body;
    }

    set template(template) {
        this._template = template;
        this.createElement();
    }

    set variables(variables) {
        for (let [key, value] of Object.entries(variables)) {
            const result = (typeof value === 'function') ? value() : value;
            this.template = this._template.replace(`{{${key}}}`, result);
        }
    }

    set target(target) {
        if (!(target instanceof Element)) {
            throw new Error('The target must be a DOM element');
        }
        this._target = target;
    }

    set styles(styles) {
        let result = '';
        for (let [key, value] of Object.entries(styles)) {
            result += `${key}: ${value}`;
        }
        this._element.style.cssText = result;
    }

    createElement() {
        this._element = new DOMParser().parseFromString(this._template, 'text/html').body.children[0];
    }

    _render() {
        this._target.append(this._element);
    }

    _unrender() {
        this._element.remove();
    }

    render() {
        this._render();
    }

    unrender() {
        this._unrender();
    }
}
