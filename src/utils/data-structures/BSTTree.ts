import { ExtractValueFunction } from "../../types";

export class BSTTree<T> {
  private root: Node<T> | null;
  private compare: ExtractValueFunction<T>;

  constructor(ExtractValueFunction: ExtractValueFunction<T>) {
    this.compare = ExtractValueFunction;
    this.root = null;
  }

  public insertBST(value: T): void {
    this.root = this.insert(value, this.root);
  }

  public removeBST(value: T): void {
    this.root = this.remove(value, this.root);
  }

  public findBST(value: string | number, extract: ExtractValueFunction<T>): T | null {
    return this.find(value, this.root, extract);
  }

  private insert(value: T, node: Node<T> | null): Node<T> {
    if (node === null) {
      return new Node(value);
    } else if (this.compare(value) < this.compare(node.data)) {
      node.left = this.insert(value, node.left);
    } else if (this.compare(value) > this.compare(node.data)) {
      node.right = this.insert(value, node.right);
    } else {
      return node;
    }
    return node;
  }

  private remove(value: T, node: Node<T> | null): Node<T> | null {
    if (node === null) {
      return node;
    }
    if (this.compare(value) < this.compare(node.data)) {
      node.left = this.remove(value, node.left);
    } else if (this.compare(value) > this.compare(node.data)) {
      node.right = this.remove(value, node.right);
    } else {
      if (node.left === null || node.right === null) {
        const newRoot = node.left !== null ? node.left : node.right;
        if (newRoot === null) {
          node = null;
        } else {
          node = newRoot;
        }
      } else {
        const successor = this.findMin(node.right!);
        node.data = successor.data;
        node.right = this.remove(successor.data, node.right);
      }
    }

    return node;
  }

  private find(value: string | number, node: Node<T> | null, extract: ExtractValueFunction<T>): T | null {
    if (node === null) {
      return null;
    } else if (value < extract(node.data)) {
      return this.find(value, node.left, extract);
    } else if (value > this.compare(node.data)) {
      return this.find(value, node.right, extract);
    } else {
      return node.data;
    }
  }

  private findMin(node: Node<T>): Node<T> {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  public getMax(): T | null {
    if (this.root === null) {
      return null;
    }

    let currentNode: Node<T> | null = this.root;

    while (currentNode.right !== null) {
      currentNode = currentNode.right;
    }

    const answer = currentNode.data;
    this.removeBST(currentNode.data);

    return answer;
  }

  public traverseBST(): void {
    console.log("The tree is:");
    if (this.root !== null) {
      this.traverse(this.root);
    } else {
      console.log("Empty");
    }
    console.log();
  }

  private traverse(ptr: Node<T>): void {
    if (ptr.left !== null) {
      this.traverse(ptr.left);
    }
    console.log(ptr.data);
    if (ptr.right !== null) {
      this.traverse(ptr.right);
    }
  }
}

// Inner Class: Node
class Node<T> {
  public left: Node<T> | null;
  public data: T;
  public right: Node<T> | null;

  constructor(data: T) {
    this.left = null;
    this.data = data;
    this.right = null;
  }
}
