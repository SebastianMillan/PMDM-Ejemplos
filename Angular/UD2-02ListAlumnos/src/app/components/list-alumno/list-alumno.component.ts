import { Component } from '@angular/core';
import { Alumno } from 'src/app/modules/alumno.interface';

const listAlumno: Alumno[] = [
  {
    "nombre": "Sebastián",
    "apellidos": "Millán Ordóñez",
    "id": 1,
    "edad": 23,
    "sexo": "H",
    "modulos": [
      {
        "nombre": "AD-PSP",
        "numHoras": 25,
      },
      {
        "nombre": "DI",
        "numHoras": 50,
      },
      {
        "nombre": "PMDM",
        "numHoras": 15,
      }
    ]
  },
  {
    "nombre": "Fernando",
    "apellidos": "Claro de Diego",
    "id": 2,
    "edad": 20,
    "sexo": "H",
    "modulos": [
      {
        "nombre": "AD-PSP",
        "numHoras": 25,
      },
      {
        "nombre": "PMDM",
        "numHoras": 15,
      }
    ]
  },
  {
    "nombre": "Miguel",
    "apellidos": "Campos",
    "id": 3,
    "edad": 50,
    "sexo": "H",
    "modulos": [
      {
        "nombre": "PMDM",
        "numHoras": 15,
      }
    ]
  }
  
]

@Component({
  selector: 'app-list-alumno',
  templateUrl: './list-alumno.component.html',
  styleUrls: ['./list-alumno.component.css']
})
export class ListAlumnoComponent {
  list = listAlumno;
  nameModulos = "";
  horasMatriculaCompleta = 90;
  numHoras = 0;
  
  getAllMod(a: Alumno) {
    this.nameModulos = "";
    for (let i = 0; i < a.modulos.length; i++) {
      this.nameModulos+=" "+a.modulos[i].nombre
    }
    return this.nameModulos;
  }

  getImgSex(sexo: String) {
    if (sexo == 'H' || sexo == 'h') {
      return "bi bi-gender-male";
    } else if (sexo == 'M' || sexo == 'm') {
      return "bi bi-gender-female";
    } else {
      return "bi bi-gender-ambiguous";
    }
  }
  getMatCompl(a: Alumno) {
    this.numHoras = 0;
    for (let i = 0; i < a.modulos.length; i++) {
      this.numHoras += a.modulos[i].numHoras;
    }
    if (this.numHoras == 90) {
      return "Completa"
    } else {
      return "Parcial"
    }
  }
}
