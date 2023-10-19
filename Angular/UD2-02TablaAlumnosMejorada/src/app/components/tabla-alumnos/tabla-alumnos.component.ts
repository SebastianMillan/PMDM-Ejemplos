import { Component } from '@angular/core';
import { Alumno } from 'src/app/moduls/alumno.interface';

const ALUMNOS: Alumno[] = [
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
  selector: 'app-tabla-alumnos',
  templateUrl: './tabla-alumnos.component.html',
  styleUrls: ['./tabla-alumnos.component.css']
})
export class TablaAlumnosComponent {
  listaAlumnos = ALUMNOS;
  displayedColumns : string[] = ['id','nombre','apellidos','edad','sexo','modulos']

  checkedId = true;
  checkedNombre = true;
  checkedApellido = true;
  checkedEdad = false;
  checkedSexo = false;
  checkedModulos = false;

  getAllMod(a: Alumno) {
    let nameModulos: string;
    nameModulos = "";
    for (let i = 0; i < a.modulos.length; i++) {
      nameModulos+=" "+a.modulos[i].nombre
    }
    return nameModulos;
  }

  addColumn(nombreTabla:string) {
    let id = this.displayedColumns.indexOf(nombreTabla);
    this.displayedColumns.slice(id);
  }
  getCheckedId(checkedId:boolean) {
    if (checkedId) 
      this.addColumn("id");
    else
      this.removeColumn("id");
  }
  getCheckedNombre(checkedNombre:boolean) {
    if (checkedNombre) 
      this.addColumn("nombre");
    else
      this.removeColumn("nombre");
  }

  getCheckedApellido(checkedApellido:boolean) {
    if (checkedApellido) 
      this.addColumn("apellidos");
    else
      this.removeColumn("apellidos");
  }

  removeColumn(nombreTabla:string) {
    this.displayedColumns.push(nombreTabla);
  }

}
