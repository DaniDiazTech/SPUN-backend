// Doubly Linked List implementation in TS

/// @brief  DoublyLinkedListNode

/// Methods

/// Methods
// getElement()
// setElement()

class DoublyLinkedListNode<T>{
    private element: T;
    public prev: DoublyLinkedListNode<T> | null;
    public next: DoublyLinkedListNode<T> | null;
    
    public constructor(el: T, prevNode : DoublyLinkedListNode<T> | null = null,  nextNode : DoublyLinkedListNode<T> | null = null){
        this.element = el;
        this.prev = prevNode;
        this.next = nextNode; 
    }
    public getElement(): T{
        return this.element;
    }

    public setElement(el: T): void{
        this.element = el;
    }
}


/// @brief  DoublyLinkedList

/// Methods
// push_back(el): O(1)
// push_front(el): O(1)
// pop_back(): O(1)
// pop_front(): O(1)
// size(): O(1)
// empty(): O(1)
// front(): O(1)
// back(): O(1)

// Let T be a general type
class DoublyLinkedList<T>{
    private head: null | DoublyLinkedListNode<T>;
    private tail: null | DoublyLinkedListNode<T>;
    private _size: number;

    constructor(){
        this.head = null;
        this.tail = null;
        this._size = 0;
    }   
    
    public size() : number{
        return this._size;
    }

    public empty(): boolean{
        return this.size() == 0;
    }


    public push_front(el: T) : void{

        let newNode = new DoublyLinkedListNode<T>(el, this.head);

        if (this.head != null){
            this.head.prev = newNode;
        }

        this.head = newNode;

        if (this.tail == null){
            this.tail = this.head;
        }
        this._size++;
    }

    public push_back(el: T) : void{
        if (this.head == null){
            this.push_front(el);
            return;
        }

        let newNode = new DoublyLinkedListNode<T>(el, null, this.tail);

        this.tail!.next = newNode;
        this.tail = newNode;
        this._size++;
    }

    public pop_front(): T{
        if (this.head == null){
            throw new Error("Can't pop front from empty list"); 
        }

        let element: T = this.head.getElement();

        this.head = this.head.next;

        if (this.head == null){
            this.tail == null;
        }
        else{
            this.head.prev = null;
        }
        this._size--;
        return element;
    }

    public pop_back() : T{
        if (this.size() <= 1){
            return this.pop_front();
        }

        let element: T = this.tail!.getElement();
        
        this.tail = this.tail!.prev;
        this.tail!.next = null;
        this._size--;
        return element;
    }

    public front(): T {
        if (this.empty()){
            throw new Error("Can't access empty LinkedList");
        }

        return this.head!.getElement();
    }

    public back(): T{
        if (this.empty()){
            throw new Error("Can't access empty LinkedList");
        }

        return this.tail!.getElement();
    }
    
}