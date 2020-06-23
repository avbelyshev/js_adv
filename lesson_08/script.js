const someElement = new Div()

someElement.template = `<div>{{output}}</div>`
someElement.variables = {
    output: 'Some text'
}
someElement.styles = {
    color: 'red'
}
someElement.render()
someElement.onClick = () => {
    console.log('test')
}
someElement.styles = {
    color: 'blue'
}
// someElement.unrender()

const someElement2 = new Input()
someElement2.template = `<input type="text" />`
someElement2.render()
someElement2.onFocus(() => console.log('on focus'))
someElement2.onInput(() => console.log('on input'))
