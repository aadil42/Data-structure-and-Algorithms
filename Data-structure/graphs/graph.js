class Node {

    constructor(name) {
        this.name =  name;
        this.list = new Map();
    }
}


class Graph{

    constructor() {
        this.graphList = new Map();
    }

    idExists(id) {
        if(this.graphList.had(id)) {
            return true;
        } else {
            return false;
        }
    }

    addNode(id, name) {
        if(this.idExists(id)) {
            return 'id already exists try a diffrent id';
        } else {
            this.graphList.set(id, new Node(name));
        }
    }
}




