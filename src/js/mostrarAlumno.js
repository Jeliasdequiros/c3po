const Alumno = document.getElementById('alumno')

export function mostrarAlumno(cursoAlumno) {
    // crear un nuevo elemento card
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = `
    <img src="${cursoAlumno.getFoto()}"/>
    <h3>${cursoAlumno.getNombre()}</h3>
    <h5>Nombre del curso: ${cursoAlumno.getCurso()}</h5>
    `
    // agregar como hijo de curso
    Alumno.appendChild(card)
}