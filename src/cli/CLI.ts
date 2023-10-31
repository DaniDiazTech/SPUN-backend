import * as readline from 'readline';
import { Controller } from './controller';

function get_option(message: string): Promise<string> {
    return new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        rl.question(message, (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

export class CLI {
    is_admin: boolean;
    is_client: boolean;
    controller: Controller;

    constructor() {
        this.is_admin = false;
        this.is_client = false;
        this.controller = new Controller();
    }

    show_menu_login(): void {
        console.log('¿Cómo deseas entrar? \n \n1 -> Como administrador \n2 -> Como estudiante \n3 -> Salir');
    }

    show_menu_admin(): void {
        console.log('Menu \n \n1 -> Agregar pregunta \n2 -> Ver preguntas \n3 -> Modificar pregunta \n4 -> Salir');
    }

    show_menu_client(): void {
        console.log('Menu \n \n1 -> Hacer examen \n2 -> Salir');
    }

    login_as_admin(): void {
        this.is_admin = true;
    }

    login_as_client(): void {
        this.is_client = true;
    }

    logout(): void {
        this.is_admin = false;
        this.is_client = false;
    }

    async add_question(): Promise<void> {
        console.log("Ingrese la pregunta: ")
        let question = await get_option('>>> ');
        console.log("Ingrese la respuesta: ")
        let answer = await get_option('>>> ');
        await this.controller.create_question(question, answer);
    }

    async run_admin() {
        while (true) {
            this.show_menu_admin();
            let option: string = await get_option('>>> ');

            if (option == '1') {
                await this.add_question(); // Debes esperar a que se complete
            }
            else if (option == '2') {
                // Ver preguntas 
                console.log('Ver preguntas');
            }
            else if (option == '3') {
                // Modificar pregunta
                console.log('Modificar preguntas');
            }
            else if (option == '4') {
                this.logout();
                break;
            }
            else {
                console.log('Ingrese una opción válida');
            }
        }
    }

    async run_client() {
        while (true) {
            this.show_menu_client();
            let option: string = await get_option('>>> ');

            if (option == '1') {
                // Hacer examen
                console.log('Hacer examen');
            }
            else if (option == '2') {
                this.logout();
                break;
            }
            else {
                console.log('Ingrese una opción válida');
            }
        }
    }

    async run() {
        while (true) {
            this.show_menu_login();
            let option: string = await get_option('>>> ');

            if (option == '1') {
                this.login_as_admin();
                await this.run_admin(); // Debes esperar a que se complete
            }
            else if (option == '2') {
                this.login_as_client();
                await this.run_client(); // Debes esperar a que se complete
            }
            else if (option == '3') {
                break;
            }
            else {
                console.log('Ingrese una opción válida');
            }
        }
    }
}