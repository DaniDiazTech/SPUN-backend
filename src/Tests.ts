import { vector } from "./utils/data-structures/vector";
import { Component } from './types';

// Función para generar una letra aleatoria entre M, N, S, T e I
function generarLetraAleatoria(): string {

    const myVector = new vector<string>();
    myVector.push_back('M');
    myVector.push_back('N');
    myVector.push_back('S');
    myVector.push_back('T');
    myVector.push_back('I');
    const indiceAleatorio = Math.floor(Math.random() * myVector.size());
    return myVector.at(indiceAleatorio);
}

// Función principal que utiliza la función anterior y almacena los números en un vector
function Test() {
    const cantidadNumeros = 10000; // Puedes cambiar esto según cuántos números quieras generar
    const myVector = new vector<string>();

    for (let i = 0; i < cantidadNumeros; i++) {
        const numeroAleatorio = generarLetraAleatoria();
        myVector.push_back(numeroAleatorio);
    }

    console.log("Números aleatorios generados:");
    console.log(myVector);

    const componentes: Component[] = ["math", "natural sciences", "social sciences", "text analysis", "image analysis"];
    const vectorAleatorio: Component[] = [];

    for (let i = 0; i < 10000; i++) {
        const indiceAleatorio = Math.floor(Math.random() * componentes.length);
        const componenteAleatorio = componentes[indiceAleatorio];
        vectorAleatorio.push(componenteAleatorio);
    }
    console.log("Vector de Componentes aleatorios:");
    console.log(vectorAleatorio);


}

// Llama a la función principal
Test();




