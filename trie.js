
class createNode {
    constructor(character) {
        this.character = character;
        this.isTerminal = false;
        this.map = {};
        this.words = [];
    }
}

function add(addString, addIndex, root) {

    if (addIndex === addString.length) {
        root.isTerminal = true;
        return;
    }

    if (!root.map[addString[addIndex]])
        root.map[addString[addIndex]] = new createNode(addString[addIndex]);

    root.words.push(addString);
    add(addString, addIndex + 1, root.map[addString[addIndex]]);
}

// function remove(removeString, removeIndex, root) {

//     root.words.remove(removeString);
//     remove(removeString, removeIndex - 1, root.map[removeString[removeIndex]]);
// }

function search(searchString, searchIndex, root) {
    if (searchIndex === searchString.length)
        return root.words;

    if (!root.map[searchString[searchIndex]])
        return [];
    return search(searchString, searchIndex + 1, root.map[searchString[searchIndex]]);

}