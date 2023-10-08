import { Vector } from "./utils/data-structures/Vector";
import { LinkedList } from "./utils/data-structures/LinkedList";
import { Component } from './types';
import { Queue } from "./utils/data-structures/Queue";

function start() {
    //ClassifyTestVector();
    eliminateTestVector();
    ClassifyTestLinkedList();
    eliminateLinkedList();
}

function ClassifyTestVector() {
    const cantTest = 100000000;
    const myVectorBank = new Vector<Component>();
    const myVectorOfComponent = new Vector<Component>();
    myVectorOfComponent.push_back("math");
    myVectorOfComponent.push_back("natural sciences");
    myVectorOfComponent.push_back("social sciences");
    myVectorOfComponent.push_back("text analysis");
    myVectorOfComponent.push_back("image analysis");
    //create xNumber of questions
    console.time();
    for (let i = 0; i < cantTest; i++) {
        const randomIndex = Math.floor(Math.random() * myVectorOfComponent.size());
        const randomComponent = myVectorOfComponent.at(randomIndex);
        myVectorBank.push_back(randomComponent);
    }
    console.log("time for "+cantTest+" data creation")
    console.timeEnd();
    //console.log("Vector de Componentes aleatorios:");
    //console.log(myVectorC);
    const queueMath = new Queue<Component>();
    const queueNatSci = new Queue<Component>();
    const queueText = new Queue<Component>();
    const queueSocSci = new Queue<Component>();
    const queueImg = new Queue<Component>();

    // classify by components all the questions 
    console.time();
    for(let i = 0; i < cantTest; i++) {
        let question = myVectorBank.at(i);
        switch (question) {
            case "math":
                    queueMath.enqueue(question);
                break;
            case "natural sciences":
                    queueNatSci.enqueue(question);
                break;
            case "social sciences":
                    queueSocSci.enqueue(question);
                break;
            case "text analysis":
                    queueText.enqueue(question);
                break;
            case "image analysis":
                    queueImg.enqueue(question);
                break;
            default:
                console.log("Not valid");
        }
    }
    console.log("time for "+cantTest+" data classification")
    console.timeEnd();
}

function eliminateTestVector() {
    const cantTest = 100;
    const myVectorBank = new Vector<String>();
    //create xNumber of questions
    for (let i = 0; i < cantTest; i++) {
        myVectorBank.push_back('M');
    }
    console.time();
    for(let i = 0; i <cantTest; i++) {
        const randomIndex = Math.floor(Math.random() * myVectorBank.size());
        myVectorBank.erase(randomIndex);
        myVectorBank.push_back("M");
    }
    console.log("time for "+cantTest+" data elimination")
    console.timeEnd();
}

function eliminateLinkedList() {
    const cantTest = 100000000;
    const linkedList = new LinkedList();
    
    for(let i = 0; i <cantTest; i++) {
        linkedList.pop();
    }
    for(let i = 0; i <cantTest; i++) {
        //const randomIndex = Math.floor(Math.random() * queueImg.size());
        //  Toca que el indexrandom sea eliminado myVectorBank.eliminate(randomIndex);
        //para irla llenando siempre
        // linkedList.push_back("math");
    }
}

function ClassifyTestLinkedList(){
    const cantTest = 100000000;
    const linkedList = new LinkedList();
    const linkedListOfComponents = new LinkedList();
    linkedListOfComponents.push("math");
    linkedListOfComponents.push("natural sciences");
    linkedListOfComponents.push("social sciences");
    linkedListOfComponents.push("text analysis");
    linkedListOfComponents.push("image analysis");
    //create xNumber of questions
    console.time();
    for (let i = 0; i < cantTest; i++) {
        const randomIndex = Math.floor(Math.random() * linkedListOfComponents.size());
        const randomComponent = linkedList.at(randomIndex);
        linkedList.push(randomComponent);
    }
    console.log("time for "+cantTest+" data creation")
    console.timeEnd();
    const queueMath = new Queue<Component>();
    const queueNatSci = new Queue<Component>();
    const queueText = new Queue<Component>();
    const queueSocSci = new Queue<Component>();
    const queueImg = new Queue<Component>();
    // classify by components all the questions 
    console.time();
    for(let i = 0; i < cantTest; i++) {
        let question = linkedList.at(i);
        switch (question) {
            case "math":
                    queueMath.enqueue(question);
                break;
            case "natural sciences":
                    queueNatSci.enqueue(question);
                break;
            case "social sciences":
                    queueSocSci.enqueue(question);
                break;
            case "text analysis":
                    queueText.enqueue(question);
                break;
            case "image analysis":
                    queueImg.enqueue(question);
                break;
            default:
                console.log("Not valid");
        }
    }
    console.log("time for "+cantTest+" data classification")
    console.timeEnd();

}

start();
