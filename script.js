const words = [];

words[0] = prompt("Add a Word to Trie");
words[1] = prompt("Add a Word to Trie");
words[2] = prompt("Add a Word to Trie");
words[3] = prompt("Add a Word to Trie");
words[4] = prompt("Add a Word to Trie");
words[5] = prompt("Add a Word to Trie");


const root = new createNode('\0');
for (const word of words)
    add(word, 0, root);

const text_box = document.getElementById("text-box");
const list = document.getElementById("list");

function handler(e) {
    const string = e.target.value;
    const suggestions = search(string, 0, root);

    console.log(suggestions);

    list.innerHTML = "";
    for (const suggestion of suggestions)
        list.innerHTML += `<li id="word" class="list-group-item clickable" onclick="handleClick(this)"><b>${string}</b>${suggestion.substring(string.length)}</li>`;
}

function handleClick(e) {
    text_box.value = e.innerText;
}

handler({ target: { value: "" } });


text_box.addEventListener("keyup", handler);