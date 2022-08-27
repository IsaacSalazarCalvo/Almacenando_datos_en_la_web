const checkComplete = (id) =>{
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square","icon");
    i.addEventListener("click", (event) => completeTask(event, id));
    return i;
}

const completeTask = (event, id) =>{
    const element = event.target;

    element.classList.toggle("fas");//Si la clase existe toggle la quita y si no toggle la agrega, esto es muy útil para seleccionar o deseleccionar el check en este caso
    element.classList.toggle("far");
    element.classList.toggle("completeIcon");

    const tasks = JSON.parse(localStorage.getItem('tasks'));//Captura los datos te la tarea
    const index = tasks.findIndex((item) => item.id === id);//Para que se guarde la posicion del arreglo
    tasks[index]['complete'] = !tasks[index]['complete'];//de esta forma se obtiene el id y el estado del complete (false or true).Al negar el valor que se tiene almacenado se cambia al contrario, en este caso esta por default false, de esta forma se pasa a complete
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

export default checkComplete;