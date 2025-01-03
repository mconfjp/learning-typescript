"use strict";
function getLast(node) {
    return node.next ? getLast(node.next) : node.value;
}
