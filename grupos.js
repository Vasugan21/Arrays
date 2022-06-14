const alumnos = [
    {nombre: "FRANCISCO", apellido: "ZUÑIGA", edad: 19, seccion: "A"},
    {nombre: "JAVIER", apellido: "BALESTRA", edad: 20, seccion: "B"},
    {nombre: "JOSE", apellido: "MIGUEL", edad: 21, seccion: "C"},
    {nombre: "ANTONIO", apellido: "BARRALES", edad: 22, seccion: "D"},
    {nombre: "MATIAS", apellido: "TRIAS", edad: 23, seccion: "E"},
    {nombre: "AGUSTIN", apellido: "QUEIROLO", edad: 24, seccion: "F"},
    {nombre: "WALTER", apellido: "BENITEZ", edad: 25, seccion: "G"},
];

let grupos = {},
alumnos.array.forEach(alumno => {
    const nombreGrupo = alumno.seccion;
    if (!grupos[nombreGrupo]) grupos[nombreGrupo] = [];
    grupos[nombreGrupo].push(alumno);    
});

console.log("grupos", grupos);
