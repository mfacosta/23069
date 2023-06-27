//arrays/vector de objeto alumnos
const alumnos =  [//atributos de alumno
    {
        curso: 'cac 23069', 
        edad: 37,
        nomnbre: 'carlos',
        apellido: 'lopez',
        dni: 123456789
    },
    {
        curso: 'cac 23069', 
        edad: 34,
        nomnbre: 'ana',
        apellido: 'spindola',
        dni: 345678911
    },
    {
        curso: 'cac 23069', 
        edad: 59,
        nomnbre: 'enrique',
        apellido: 'torregiani',
        dni: 456789654
    }
];

/* //buscar a la persona mas: mayor-menor-promedio

let auxMenor = alumnos [0].edad;
let auxMayor = alumnos [0].edad;
let suma = alumnos [0].edad;

//voy por los pisos preguntando si es menor al que tengo

for(let i=1;i < alumnos.length;i++) {
    if(alumnos[i].edad < auxMenor) {
        //si la respuesta es si, actualizo el menor
        auxMenor = alumnos[i].edad;
    }
    if(alumnos[i].edad > auxMayor) {
        //si la respuesta es si, actualizo el mayor
        auxMayor = alumnos[i].edad;
    }
    //suma = suma + alumnos[i].edad
    suma += alumnos[i].edad;
}

//al final tengo el mayor y el menor
console.log(auxMenor, auxMayor);
console.log(suma / alumnos.length); */


/*
funcion = (a,b) =>{

}
(a,b) => {}
*/

const apellidos = alumnos.map ( x => x.apellido);
console.log(apellidos); //veo solo los apellidos