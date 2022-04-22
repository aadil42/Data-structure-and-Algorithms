class Node{

    constructor(val) {
        this.val = val
        this.next = Array(26).fill(null);
        this.count = 0;
        this.isEnd = false;
    }
}

class Trie{

    constructor() {
        this.root = new Node();
    }

    add(word) {
        let curruntNode = this.root;
        [...word].forEach((char) => {
            if(!curruntNode.next[char.charCodeAt(0) - 97]) {
                curruntNode.next[char.charCodeAt(0) - 97] = new Node(char);
            }
            curruntNode = curruntNode.next[char.charCodeAt(0) - 97];
        });
        curruntNode.isEnd = true;
    }
}

const myTrie = new Trie();
myTrie.add('aadil');
myTrie.add('aacil');
