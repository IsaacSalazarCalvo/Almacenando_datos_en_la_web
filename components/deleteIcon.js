import { displayTasks } from "./readTask.js";

const deleteIcon =(id)=>{
    const i = document.createElement('i');
    i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
    i.addEventListener("click", () => deleteTask(id));//para que encuentre una tarea en especifico e identifique cuando borra esa tarea y sacarlo del local storage
    return i;
}

const deleteTask = (id) =>{
    /*const parent = event.target.parentElement;//para acceder a la clase padre del icono del basurero, para poder acceder a la carta completa
    parent.remove();*/
    const li = document.querySelector("[data-list]");//para acceder al elemento padre
    const tasks = JSON.parse(localStorage.getItem("tasks"));    
    const index = tasks.findIndex((item) => item.id === id);//Para que se guarde la posicion del arreglo
    tasks.splice(index,1);//splice elimina elementos de un arreglo especificando la cantidad de elementos que se quieren eliminar. Aquí quita la tarea
    li.innerHTML ="";//esto limpia el elemento padre, quitando visualmente de la lista el elemento.
    localStorage.setItem('tasks', JSON.stringify(tasks));//Con esto se actualiza el local storage sin esa tarea.
    displayTasks();
}

export default deleteIcon;