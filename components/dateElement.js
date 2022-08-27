export default (date) => {//export defautl, de esta forma se exporta la función sin necesidad de nombrarla.
    const dateElement = document.createElement('li');
    dateElement.classList.add("date");
    dateElement.innerHTML = date;
    return dateElement;
}