class Group {
    constructor() {
        this.members = [];
    };

        // if the value or name isn't in the list then push it into the array
    add(value) {
        if (!this.has(value)) {
            this.members.push(value);
        }
    };

    delete(value) {
        this.members = this.members.filter(v => v !== value);
    };

    has(value) {
        return this.members.includes(value);
    };

    static from(collection) {
        let group = new Group;
        for(let value of collection) {
            group.add(value);
        }
        return group;
    };

    [Symbol.iterator]() {
        return new GroupIterator(this);
    };
};

class GroupIterator {
    constructor(group) {
        this.group = group;
        this.position = 0;
    }

    next() {
        if (this.position >= this.group.members.length) {
            return {done: true};
        }
        else {
            let result = {value: this.group.members[this.position], done: false};
            this.position++;
            return result;
        }
    }
};

let group = Group.from([10, 20]);
console.log(group.has(10));
console.log(group.has(30));
group.add(10);
group.delete(10);
console.log(group.has(10));

for (let value of Group.from(["k", "l", "i"])) {
    console.log(value);
  }