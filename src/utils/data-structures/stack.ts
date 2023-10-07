class stack<T> {
    private topIndex: number;
    private capacity: number;
    private data: T[];

    constructor() {
        this.topIndex = 0;
        this.capacity = 2;
        this.data = new Array<T>(this.capacity);
    }

    empty(): boolean {
        /*
            Returns a boolean indicating whether the stack is empty.
            Time complexity: O(1).
        */

        return this.topIndex === 0;
    }

    size(): number {
        /*
            Returns the number of elements in the stack.
            Time complexity: O(1).
        */

        return this.topIndex;
    }

    push(item: T): void {
        /*
            Adds an element to the top of the stack.
            Time complexity: Amortized O(1).
        */

        if (this.size() === this.capacity) {
            let newData = new Array<T>(this.capacity * 2);

            for (let i = 0; i < this.size(); i++) {
                newData[i] = this.data[i];
            }
            this.data = newData;
            this.capacity *= 2;
        }
        this.data[this.topIndex++] = item;
    }   

    top(): T {
        /*
            Returns the last element added to the stack.
            Time complexity: O(1).
        */

        if (this.empty()) {
            throw new Error("The stack is empty.");
        }
        return this.data[this.topIndex - 1];
    } 

    pop(): T {
        /*
            Returns and removes the last element added to the stack.
            Time complexity: O(1).
        */

        if (this.empty()) {
            throw new Error("The stack is empty.");
        }
        return this.data[--this.topIndex];
    }
}