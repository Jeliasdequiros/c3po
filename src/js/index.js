// Importar módulos
import { Cursos } from './Cursos.js'
import { mostrarCurso } from './mostrarCurso.js'
import { Alumnos } from './Alumnos.js'
import { mostrarAlumno } from './mostrarAlumno.js'
import { Profesores } from './Profesores.js'
import { mostrarProfesor } from './mostrarProfesor.js'




// acceder al elemento de HTML
const formulario = document.getElementById('formulario')

// Funciones

// acceder al formulario
// escuchar el envio del formulario
formulario.addEventListener('submit', evento => {
    // hacer que el formulario no se ejecute
    evento.preventDefault()
    // guardar el FORMULARIO
    // recoger el formulario entero
    const formObtenido = evento.target
    // Prueba ******
    // console.log(formObtenido.nombreCurso.value)
    // console.log(formObtenido.rutaImagen.value)
    // console.log(formObtenido.cantidadHoras.value)
    // ******
    // crear el nuevo curso
    const curso = new Cursos(formObtenido.nombreCurso.value, formObtenido.rutaImagen.value, formObtenido.cantidadHoras.value)
    // mostrar curso
    mostrarCurso(curso)
    // refrescar formulario
    formObtenido.reset()
})

// Acceder al formulario de Profesores
const formProfesor = document.getElementById('formProfesor')

formProfesor.addEventListener('submit', evento => {
    evento.preventDefault()
    // guardar el FORMULARIO
    // recoger el formulario entero  
    const formObtenido = evento.target
    // crear el nuevo curso
    const Profesor = new Profesores(formObtenido.nombreProfesor.value, formObtenido.imagenProfesor.value, formObtenido.cursoImpartido.value)
    // mostrar curso
    mostrarProfesor(Profesor)
    // refrescar formulario
    formObtenido.reset()
})

// Acceder al formulario de Alumnos
const formAlumnos = document.getElementById('formAlumnos')

formAlumnos.addEventListener('submit', evento => {
    evento.preventDefault()
    // guardar el FORMULARIO
    // recoger el formulario entero  
    const formObtenido = evento.target
    // crear el nuevo curso
    const Alumno = new Alumnos(formObtenido.nombreAlumno.value, formObtenido.imagenAlumno.value, formObtenido.curso.value )
    // mostrar curso
    mostrarAlumno(Alumno)
    // refrescar formulario
    formObtenido.reset()
})


