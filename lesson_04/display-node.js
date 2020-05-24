/**
 * Вывести в консоль иерархическую структуру документа, так, как это показано на практической части.
 * Реализовать 3 функции, выполняющие это разными способами
 */

function nodeInfo(node, deep) {
    console.log('  '.repeat(deep), node.nodeType, node.nodeName, node.nodeValue);
}

function displayNode(node, deep = 0) {
    nodeInfo(node, deep);
    for (let item = node.firstChild; item; item = item.nextSibling)
        displayNode(item, deep + 1);
}

function displayNode1(node, deep = 0) {
    nodeInfo(node, deep);
    Array.from(node.childNodes).forEach(item =>
        displayNode1(item, deep + 1));
}

function displayNode2(node, deep = 0) {
    nodeInfo(node, deep);
    for (let item of node.childNodes)
        displayNode2(item, deep + 1);
}

displayNode(document.documentElement);
displayNode1(document.documentElement);
displayNode2(document.documentElement);
