import { createTask } from "./addTask.js";
import { uniqueDates, orderDays } from "../services/date.js";
import dateElement from "./dateElement.js";
 
export const displayTasks =()=>{//para leer lo que hay almacenado en el local storage
    const list = document.querySelector('[data-list]');
    const tasksList = JSON.parse(localStorage.getItem("tasks")) || [];//JSON.parse convierte el objeto a algo que se pueda manipular con JS. Toma la info que está almacenada en el storage
    const dates = uniqueDates(tasksList);
    orderDays(dates);

    dates.forEach((date) => {//Por cada una de las fechas se recorre el tasklist.
        const dateMoment = moment(date, "DD/MM/YYYY");//Esto es para utilizar una función de la librería moment.
        list.appendChild(dateElement(date));//Para que se crea para un solo date
        tasksList.forEach((task) => {//para que recorra cada una de las tareas ingresadas en el arreglo. 
            const taskDate = moment(task.dateFormat, "DD/MM/YYYY");//
            const diff = dateMoment.diff(taskDate);//Este método ayuda a conocer la si una fecha es diferente a otra, recibiendo como parámetro cual va a ser la siguiente fecha.
            if (diff === 0){
                list.appendChild(createTask(task));//crea la tarea dentro de esa fecha específica con la condición de que correspondan al mismo día.
            }            
        });
    });
}