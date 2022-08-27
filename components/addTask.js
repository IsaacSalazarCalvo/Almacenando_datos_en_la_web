import { uniqueDates } from "../services/date.js";
import checkComplete from "./checkComplete.js";//para importar las funciones de los otros js
import deleteIcon from "./deleteIcon.js";
import { displayTasks } from "./readTask.js";

export const addTask =  (evento)=>{//Este genera el formulario
    evento.preventDefault();//Para evitar que se refresque la pagina cada vez que se clickea el botón.
    
    const list = document.querySelector('[data-list]');//Este va a ser el elemento padre de las task.
    const input = document.querySelector('[data-form-input]');
    const calendar = document.querySelector('[data-form-date]');//Input del calendario

    const value = input.value;//Guarda el texto del input
    const date = calendar.value;//Guarda el dato de la fecha y hora que selecciona el usuario.
    const dateFormat = moment(date).format("DD/MM/YYYY");//Moment es una librería de JS que permite establecer diferentes formatos de fecha y hora
    
    if (value === "" || date === ""){
        return//Si no se ingresa fecha o tarea no haga nada
    }

    input.value="";//para que se limpie el input después de escribir
    calendar.value="";

    const complete = false;//Para indicar que no se ha completado una tarea (el check)

    const taskObj ={//Este objeto va a almacenar los datos de la tarea tanto la tarea como la fecha
        value,
        dateFormat,
        complete,
        id: uuid.v4()//crea un identificador unico por tarea
    };

    list.innerHTML = "";//Por cada tarea que se esté agregando, se va a inicializar su estructura.

    const taskList = JSON.parse(localStorage.getItem('tasks')) || [];//Con local storage get item o con un arreglo vacio se pueden capturar todas las tareas que se agregan. JSON.parse regresa el objeto en string a un objeto en el que pueda trabajar 
    taskList.push(taskObj);//De esta manera se almacenan en un arreglo todos los datos ingresados, y ahora taskList se utilizara en taskObj
    localStorage.setItem('tasks', JSON.stringify(taskList));//De esta forma utilizando un arreglo que guarda todas tareas ingresadas, se guardan y no se sobreescriben.
    /*const task = createTask(taskObj);
    list.appendChild(task);//para anexarle los elementos del task*/
    displayTasks();    
}

export const createTask = ({value, dateFormat, complete, id}) =>{//Destructuración del objeto "({})"", es solo decir que valores queremos sacar del objeto que vamos a recibir
    const task = document.createElement('li');
        task.classList.add('card');//para agregar la clase al li      

    /*sessionStorage.setItem('tasks', JSON.stringify(taskObj));//setItem recibe dos parametros la clave y el objeto que es la informacion que se desea almacenar. Este tipo de almacenamiento de sesion tiene la desventaja de que se borran los datos al cerrar la pestana en la que se encuentra la pagina.*/

    const taskContent = document.createElement('div');//todos los appendChild tienen que ir en orden, como si se estuviera haciendo en html
    
    const check = checkComplete(id);
    
    if (complete){//Estamos sobreescribiendo las clases según el estado del check. "Si complete es true entonces..."
        check.classList.toggle("fas");
        check.classList.toggle("far");
        check.classList.toggle("completeIcon");
    }
    const titleTask = document.createElement('span');
        titleTask.classList.add('task'); 
        titleTask.innerText = value; //Acá se le agrega el texto que se ingresa en el input
        taskContent.appendChild(check);// para que se cree el elemento html dentro de la div creada
        taskContent.appendChild(titleTask);

    const dateElement = document.createElement('span');
        dateElement.innerHTML = dateFormat;
        task.appendChild(taskContent);
        task.appendChild(dateElement);
        task.appendChild(deleteIcon(id));

    //Template strings: Se colocan las comillas backticks. Esto permite combinar etiquetas html con variables de JS (como por ejemplo el value dentro del span en este caso)
    /*task.innerHTML = content;// esto agrega al li el dato que tiene el value.   */

    return task;
}