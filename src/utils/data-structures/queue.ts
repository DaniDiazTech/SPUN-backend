class queue<T> {
    private frontIndex: number;
    private rearIndex: number;
    private capacity: number;
    private data: T[];

    constructor() {
        this.frontIndex = this.rearIndex = 0;
        this.capacity = 2;
        this.data = new Array<T>(this.capacity);
    }

    empty(): boolean {
        /*
            Returns a boolean indicating whether the queue is empty.
            Time complexity: O(1).
        */

        return this.frontIndex === this.rearIndex;
    }

    size(): number {
        /*
            Returns the number of elements in the queue.
            Time complexity: O(1).
        */

        return this.rearIndex - this.frontIndex;
    }

    enqueue(item: T): void {
        /*
            Adds an element to the back of the queue.
            Time complexity: Amortized O(1).
        */

        if (this.size() === this.capacity) {
            let newData = new Array<T>(this.capacity * 2);

            for(let i = this.frontIndex; i < this.rearIndex; i++) {
                newData[i - this.frontIndex] = this.data[i];
            }
            this.rearIndex -= this.frontIndex;
            this.frontIndex = 0;
            this.data = newData;
            this.capacity *= 2;
        }
        this.data[this.rearIndex++] = item;
    }

    front(): T {
        /*
            Returns the first element added to the queue.
            Time complexity: O(1).
        */

        if (this.empty()) {
            throw new Error("The queue is empty.");
        }
        return this.data[this.frontIndex];
    }

    dequeue(): T {
        /*
            Returns and removes the first element added to the queue.
            Time complexity: O(1).
        */

        if (this.empty()) {
            throw new Error("The queue is empty.");
        }
        return this.data[this.frontIndex++];
    }
}