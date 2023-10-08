// Linked List implementation in TS
/// @brief  LinkedListNode

/// Methods
// getElement()
// setElement()

class LinkedListNode<T>{
    private element: T;
    public next: DoublyLinkedListNode<T> | null;
    
    public constructor(el: T, nextNode : DoublyLinkedListNode<T> | null = null){
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
// push(el): O(1)
// pop(): O(1)
// size(): O(1)
// empty(): O(1)
// front(): O(1)
// back(): O(1)


// Let T be a general type
class LinkedList<T>{
    

}