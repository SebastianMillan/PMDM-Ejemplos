export interface Alumno{
    nombre: String;
    apellidos: String;
    id: number;
    edad: number;
    sexo: String;
    modulos: modulo[];
}
export interface modulo{
    nombre: String;
    numHoras: number;
}