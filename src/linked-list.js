const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {
        let node = new Node(data);
        if (this.length === 0) {
            this._head = node;
            this._tail = node;
        } else {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        }
        this.length++;
        return this;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        let current = this._head; //.next;
        let counter = 0;
        while (current) {
            if (counter == index) return current.data;
            current = current.next;
            counter++;
        }
    }

    insertAt(index, data) {
        let current = this._head;
        let counter = 1;
        let node = new Node(data);
        if (index == 0) {
            this._head.prev = node;
            node.next = this._head;
            this._head = node;
        } else {
            while (current) {
                current = current.next;
                if (counter == index) {
                    node.prev = current.prev;
                    current.prev.next = node;
                    node.next = current;
                    current.prev = node;
                    //return true;
                }
                counter++
            }
        }
        this.length++;
        return this;
    }

    isEmpty() {
        return this.length === 0;
    }

    clear() {
        this.length = 0;
        let current = this._head;
        let counter = 0;
        while (current) {
            current.data = null;
            current = current.next;
            counter++;
        }
        return this;
    }

    deleteAt(index) {
        let current = this._head;
        let counter = 0;
        while (current) {
            if (counter == index) {
                current.prev.next = current.next;
                this.length--;
            }
            current = current.next;
            counter++;
        }
        return this;
    }

    reverse() {
        let current = this._head;
        let prev = null;
        while (current) {
            let next = current.next;
            current.next = prev;
            current.prev = next;
            prev = current;
            current = next;
        }
        this._tail = this._head;
        this._head = prev;
        return this;
    }

    indexOf(data) {
        let current = this._head;
        let counter = 0;
        while (current) {
            if (current.data == data) return counter;
            current = current.next;
            counter++;
        }
        return -1;       
    }
}

module.exports = LinkedList;