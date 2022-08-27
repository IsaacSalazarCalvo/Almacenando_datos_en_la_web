//Inmediately invoked function expression(IIFE): Funciones que en cuanto se declaran se ejecutan/
//git add -A, para agregar todos los cambios. git commit -m "Nombre" y luego git checkout <NOMBRE>
//almacenamiento web 

import { addTask } from "./components/addTask.js";
import { displayTasks } from "./components/readTask.js";

const btn = document.querySelector('[data-form-btn]');//Para llamar los data atributtes del html. Con esto tenemos el botón.

btn.addEventListener('click', addTask);
displayTasks();