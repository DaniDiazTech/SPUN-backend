import { Vector } from "./utils/data-structures/Vector";
import { LinkedList } from "./utils/data-structures/LinkedList";
import { Component } from './types';
import { Queue } from "./utils/data-structures/Queue";

function start() {
    ClassifyTest();
    //eliminateTest();
    //createExam();
}

function ClassifyTest() {
    const cantTest = 1000000;
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
    console.log("time for "+cantTest+" data creation vector")
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
                    queueMath.dequeue();
                break;
            case "natural sciences":
                    queueNatSci.enqueue(question);
                    queueNatSci.dequeue();
                break;
            case "social sciences":
                    queueSocSci.enqueue(question);
                    queueSocSci.dequeue();
                break;
            case "text analysis":
                    queueText.enqueue(question);
                    queueText.dequeue();
                break;
            case "image analysis":
                    queueImg.enqueue(question);
                    queueImg.dequeue();
                break;
            default:
                console.log("Not valid");
        }
    }
    console.log("time for "+cantTest+" data classification vector")
    console.timeEnd();

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
        linkedList.push(myVectorBank.at(i));
    }
    console.log("time for "+cantTest+" data creation LinkedList")
    console.timeEnd();
    // classify by components all the questions 
    console.time();
    for(let i = 0; i < cantTest; i++) {
        let question = linkedList.getValueAtPosition(i);
        switch (question) {
            case "math":
                    queueMath.enqueue(question);
                    queueMath.dequeue();
                break;
            case "natural sciences":
                    queueNatSci.enqueue(question);
                    queueNatSci.dequeue();
                break;
            case "social sciences":
                    queueSocSci.enqueue(question);
                    queueSocSci.dequeue();
                break;
            case "text analysis":
                    queueText.enqueue(question);
                    queueText.dequeue();
                break;
            case "image analysis":
                    queueImg.enqueue(question);
                    queueImg.dequeue();
                break;
            default:
                console.log("Not valid");
        }
    }
    console.log("time for "+cantTest+" data classification LinkedList")
    console.timeEnd();
}

function eliminateTest() {
    const cantTest = 100000;
    const myVectorBank = new Vector<String>();
    const myVectorBank2 = new Vector<number>();
    //create xNumber of questions
    for (let i = 0; i < cantTest; i++) {
        myVectorBank.push_back('M');
    }
    console.time();
    for(let i = 0; i <cantTest; i++) {
        const randomIndex = Math.floor(Math.random() * myVectorBank.size());
        myVectorBank.erase(randomIndex);
        myVectorBank.push_back("M");
        myVectorBank2.push_back(randomIndex);
    }
    console.log("time for "+cantTest+" data elimination vector")
    console.timeEnd();

    const linkedList = new LinkedList();
    for (let i = 0; i < cantTest; i++){
        linkedList.push("M");
    }

    console.time();
    for(let i = 0; i <cantTest; i++) {
        linkedList.deleteNodeAtPosition(myVectorBank2.at(i));
        linkedList.push("M");
    }
    console.log("time for "+cantTest+" data elimination LinkedList")
    console.timeEnd();
}

function createExam(){
    const cantTest = 10000;
    const myVectorBank = new Vector<Component>();
    const myVectorOfComponent = new Vector<Component>();
    myVectorOfComponent.push_back("math");
    myVectorOfComponent.push_back("natural sciences");
    myVectorOfComponent.push_back("social sciences");
    myVectorOfComponent.push_back("text analysis");
    myVectorOfComponent.push_back("image analysis");
    //create xNumber of questions
    
    for (let i = 0; i < cantTest; i++) {
        const randomIndex = Math.floor(Math.random() * myVectorOfComponent.size());
        const randomComponent = myVectorOfComponent.at(randomIndex);
        myVectorBank.push_back(randomComponent);
    }
    console.log("time for "+cantTest+" data creation vector")

    const queueMath = new Queue<Component>();
    const questionMath = new Vector<number>();
    const queueNatSci = new Queue<Component>();
    const questionText = new Vector<number>();
    const queueText = new Queue<Component>();
    const questionNatSci = new Vector<number>();
    const queueSocSci = new Queue<Component>();
    const questionSocSci = new Vector<number>();
    const queueImg = new Queue<Component>();
    const questionImg = new Vector<number>();
    //for (let j = 0; j < cantTest; j++) {
        console.time();
        while(queueMath.size()  !== 20 || queueSocSci.size() !== 20 || queueNatSci.size() !== 20 || queueText.size() !== 20 || queueImg.size() !== 20 ){
            let number = Math.floor(Math.random() * myVectorBank.size());
            let question = myVectorBank.at(number);

            switch (question) {
                case "math":
                    if (queueMath.size() < 20 && !questionMath.findObject(number)) {
                        queueMath.enqueue(question);
                        questionMath.push_back(number);
                    }
                    break;
                case "natural sciences":
                    if (queueNatSci.size() < 20 && !questionNatSci.findObject(number)) {
                        queueNatSci.enqueue(question);
                        questionNatSci.push_back(number);
                    }                
                    break;
                case "social sciences":
                    if (queueSocSci.size() < 20 && !questionSocSci.findObject(number)) {
                        queueSocSci.enqueue(question);
                        questionSocSci.push_back(number);
                    }                 
                    break;
                case "text analysis":
                    if (queueText.size() < 20 && !questionText.findObject(number)) {
                        queueText.enqueue(question);
                        questionText.push_back(number);
                    }
                    break;
                case "image analysis":
                    if (queueImg.size() < 20 && !questionImg.findObject(number)) {
                        queueImg.enqueue(question);
                        questionImg.push_back(number);
                    }
                    break;
                default:
                    console.log("Not valid");
            }
        }
        console.timeEnd();
        for (let k = 0; k <20;k++) {
            queueMath.dequeue();
            queueSocSci.dequeue();
            queueNatSci.dequeue();
            queueText.dequeue();
            queueImg.dequeue();
        }        
    //}
}

start();
