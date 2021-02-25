const Profesor = document.getElementById('profesor')

export function mostrarProfesor(claseCurso) {
    // crear un nuevo elemento card
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = `
    <img src="${claseCurso.getFoto()}"/>
    <h3>${claseCurso.getNombre()}</h3>
    <h5>Nombre del curso: ${claseCurso.getCurso()}</h5>
    `
    // agregar como hijo de curso
    Profesor.appendChild(card)
}