import { displayTasks } from "../components/readTask.js";

export const uniqueDates = (tasks)=>{
    const unique =[];
    tasks.forEach(task => {//para acceder a la fecha de cada tarea.
        if (!unique.includes(task.dateFormat)){//Pregunta que si no existe la fecha dentro del arreglo, lo agreggue, sino no
            unique.push(task.dateFormat);
        }
    });

    return unique;
}

export const orderDays = (dates) => {
    return dates.sort((a,b) =>{//Se va a encarga de ordenar las fechas
        const firstDate = moment(a, 'DD/MM/YYYY');
        const secondDate = moment(b, 'DD/MM/YYYY');
        return firstDate-secondDate; 
    });
}