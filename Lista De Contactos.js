// Crear una lista de contactos con datos predefinidos
let listaContactos = ["Juan Pérez", "María López", "Carlos Gómez"];

// Función para añadir un nuevo contacto a la lista
function agregarContacto(contacto) {
  listaContactos.push(contacto);
}

// Función para borrar un contacto existente de la lista
function borrarContacto(contacto) {
  let indice = listaContactos.indexOf(contacto);
  if (indice !== -1) {
    listaContactos.splice(indice, 1);
  }
}

// Función para imprimir los contactos presentes en la lista
function imprimirContactos() {
  console.log("Lista de contactos:");
  for (let i = 0; i < listaContactos.length; i++) {
    console.log(listaContactos[i]);
  }
}

// Agregar un nuevo contacto a la lista
agregarContacto("Samuel Guerra");

// Borrar un contacto existente de la lista
borrarContacto("Carolina Gómez");

// Imprimir los contactos en la consola
imprimirContactos();