// Linked List implementation in TS
/// @brief  LinkedListNode

/// Methods
// getElement()
// setElement()

class LinkedListNode<T>{
    private element: T;
    public next: LinkedListNode<T> | null;
    
    public constructor(el: T, nextNode : LinkedListNode<T> | null = null){
        this.element = el;
        this.next = nextNode; 
    }
    public getElement(): T{
        return this.element;
    }

    public setElement(el: T): void{
        this.element = el;
    }
}




/// @brief  LinkedList


/// Methods
// push() Pushes in O(1)
// push_back() Pushes in O(n) linear time
// pop(): O(1)
// pop_back(): O(1) Pops back in O(n)
// size(): O(1)
// empty(): O(1)
// front(): O(1)
// back(): O(n) retuns back in O(n)


// Let T be a general type
class LinkedList<T>{
    private head : null | LinkedListNode<T>;
    private _size;

    constructor(){
        this.head = null;
        this._size = 0;
    }

    private getLast() : LinkedListNode<T> | null{
        if (this.empty()) return null;
        let tmp : LinkedListNode<T> | null = this.head;
        while (tmp!.next != null){
            tmp= tmp!.next;
        }
        return tmp;
    }

    public size(): number{
        return this._size;
    }
    public empty(): boolean{
        return this.size() == 0;
    }

    public push(el: T) : void{
        // pushes front in O(1)
        let newNode = new LinkedListNode<T>(el, this.head);
        this.head = newNode;
        this._size++;
    }

    public push_back(el: T) : void{
        if (this.head == null){
            this.push(el);
            return;
        }
        // adds element in O(n) time
        let newNode = new LinkedListNode<T>(el);
        let last = this.getLast();
        last!.next = newNode;
        this._size++;
    }

    public pop() : T{
        // Pops head O(1)
        if (this.empty()){
            throw new Error("Can't pop form empty LinkedList");
        }
        let element: T = this.head!.getElement();
        this.head = this.head!.next;
        this._size--;
        return element;
    }
    public pop_back() : T{
        // Pops back O(n)
        if (this.empty()){
            throw new Error("Can't pop from empty LinkedList");
        }
        let element : T;
        if (this.size() == 1){
            element = this.head!.getElement();
            this.head = null;
        }
        else{
            let tmp = this.head;
            while(tmp!.next!.next != null){
                tmp = tmp!.next;
            }
            element= tmp!.next!.getElement(); 
            tmp!.next= null;
        }

        this._size--;
        return element;
    }

    public front(): T{
        if (this.empty()){
            throw new Error("Can't access empty LinkedList");
        }

        return this.head!.getElement();
    }

    public back() : T{
        if (this.empty()){
            throw new Error("Can't access empty LinkedList");
        }
        return this.getLast()!.getElement();
    }
}