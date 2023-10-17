import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent {
  nombre ='';
  apellidos='';
  email='';
  contrasena='';
  repetirContrasena='';
  sexo='';
  dni='';
  telefono='';

  validarFormulario(){

    if (this.nombre == '' || this.apellidos == '' || this.email == '' || this.contrasena == '' || this.repetirContrasena == '' ||
        this.sexo == '' || this.dni == '' || this.telefono == ''){

        alert("Hay un campo vacío.")
      
    }else{

        if(this.contrasena === this.repetirContrasena)
          console.log(this.nombre, this.apellidos, this.email, this.contrasena, this.repetirContrasena, this.sexo, this.dni, this.telefono);

        else
          alert('Las contraseñas no coinciden');
    }
  }  

}
