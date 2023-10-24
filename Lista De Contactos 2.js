// Definir una lista de contactos como un array de objetos
var listaDeContactos = [];

// Función para crear un nuevo contacto
function crearContacto(id, nombres, apellidos, telefono, ubicacionCiudad, ubicacionDireccion) {
    var nuevoContacto = {
        id: id,
        nombres: nombres,
        apellidos: apellidos,
        telefono: telefono,
        ubicaciones: {
            ciudad: ubicacionCiudad,
            direccion: ubicacionDireccion
        }
    };
    listaDeContactos.push(nuevoContacto);
    return "Contacto creado exitosamente.";
}

// Función para eliminar un contacto por su ID
function eliminarContacto(id) {
    var indice = -1;
    for (var i = 0; i < listaDeContactos.length; i++) {
        if (listaDeContactos[i].id === id) {
            indice = i;
            break;
        }
    }
    if (indice !== -1) {
        listaDeContactos.splice(indice, 1);
        return "Contacto eliminado con éxito.";
    } else {
        return "No se encontró ningún contacto con el ID proporcionado.";
    }
}

// Ejemplos de uso
crearContacto(1, "Samuel", "Guerra", "305-320-2012", "Cali", "Av 4B 58N");
crearContacto(2, "Valentina", "Gomez", "305-237-0775", "Medellín", "CR 5 67BL");

console.log(listaDeContactos);
// Output: [ { id: 1, nombres: 'John', apellidos: 'Doe', telefono: '123-456-7890', ubicaciones: { ciudad: 'New York', direccion: '123 Main St' } }, { id: 2, nombres: 'Jane', apellidos: 'Smith', telefono: '987-654-3210', ubicaciones: { ciudad: 'Los Angeles', direccion: '456 Elm St' } } ]

eliminarContacto(1);
console.log(listaDeContactos);
// Output: [ { id: 2, nombres: 'Jane', apellidos: 'Smith', telefono: '987-654-3210', ubicaciones: { ciudad: 'Los Angeles', direccion: '456 Elm St' } } ]
