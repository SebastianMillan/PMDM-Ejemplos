import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrl: './tablero.component.css'
})
export class TableroComponent{
  
  lastIcon = 0;
  ganador = 0;

  seleccion(id: number) {
    const element = document.getElementById("celda" + id);
    console.log(id)
    if (element != null) {
      if ((element.getAttribute("marcado") == "null") && this.lastIcon == 0) {
        element.innerHTML = "X";
        element.setAttribute("marcado", "X");
        this.lastIcon = 1;
        console.log(element.getAttribute("marcado"));
      } else if ((element.getAttribute("marcado") == "null") && this.lastIcon == 1) {
        element.innerHTML = "O"
        element.setAttribute("marcado", "O");
        this.lastIcon = 0;
        console.log(element.getAttribute("marcado"));
      }
    }
    this.comprobarGanador();
  }

  comprobarGanador() {
    if (document.getElementById("celda" + 0)?.getAttribute("marcado") == "X" &&
      document.getElementById("celda" + 1)?.getAttribute("marcado") == "X" && 
      document.getElementById("celda" + 2)?.getAttribute("marcado") == "X") {
      this.ganador = 1;
      console.log("Ganador: "+this.ganador)
    } else if (document.getElementById("celda" + 3)?.getAttribute("marcado") == "X" &&
      document.getElementById("celda" + 4)?.getAttribute("marcado") == "X" && 
      document.getElementById("celda" + 5)?.getAttribute("marcado") == "X") {
      this.ganador = 1;
      console.log("Ganador: "+this.ganador)
    } else if (document.getElementById("celda" + 6)?.getAttribute("marcado") == "X" &&
      document.getElementById("celda" + 7)?.getAttribute("marcado") == "X" && 
      document.getElementById("celda" + 8)?.getAttribute("marcado") == "X") {
      this.ganador = 1;
      console.log("Ganador: "+this.ganador)
    } else if (document.getElementById("celda" + 0)?.getAttribute("marcado") == "X" &&
      document.getElementById("celda" + 3)?.getAttribute("marcado") == "X" && 
      document.getElementById("celda" + 6)?.getAttribute("marcado") == "X") {
      this.ganador = 1;
      console.log("Ganador: "+this.ganador)
    } else if (document.getElementById("celda" + 1)?.getAttribute("marcado") == "X" &&
      document.getElementById("celda" + 4)?.getAttribute("marcado") == "X" && 
      document.getElementById("celda" + 7)?.getAttribute("marcado") == "X") {
      this.ganador = 1;
      console.log("Ganador: "+this.ganador)
    } else if (document.getElementById("celda" + 2)?.getAttribute("marcado") == "X" &&
      document.getElementById("celda" + 5)?.getAttribute("marcado") == "X" && 
      document.getElementById("celda" + 8)?.getAttribute("marcado") == "X") {
      this.ganador = 1;
      console.log("Ganador: "+this.ganador)
    } else if (document.getElementById("celda" + 0)?.getAttribute("marcado") == "X" &&
      document.getElementById("celda" + 4)?.getAttribute("marcado") == "X" && 
      document.getElementById("celda" + 8)?.getAttribute("marcado") == "X") {
      this.ganador = 1;
      console.log("Ganador: "+this.ganador)
    } else if (document.getElementById("celda" + 2)?.getAttribute("marcado") == "X" &&
      document.getElementById("celda" + 4)?.getAttribute("marcado") == "X" && 
      document.getElementById("celda" + 6)?.getAttribute("marcado") == "X") {
      this.ganador = 1;
      console.log("Ganador: "+this.ganador)
    } else if (document.getElementById("celda" + 0)?.getAttribute("marcado") == "O" &&
      document.getElementById("celda" + 1)?.getAttribute("marcado") == "O" && 
      document.getElementById("celda" + 2)?.getAttribute("marcado") == "O") {
      this.ganador = 2;
      console.log("Ganador: "+this.ganador)
    } else if (document.getElementById("celda" + 3)?.getAttribute("marcado") == "O" &&
      document.getElementById("celda" + 4)?.getAttribute("marcado") == "O" && 
      document.getElementById("celda" + 5)?.getAttribute("marcado") == "O") {
      this.ganador = 2;
      console.log("Ganador: "+this.ganador)
    } else if (document.getElementById("celda" + 6)?.getAttribute("marcado") == "O" &&
      document.getElementById("celda" + 7)?.getAttribute("marcado") == "O" && 
      document.getElementById("celda" + 8)?.getAttribute("marcado") == "O") {
      this.ganador = 2;
      console.log("Ganador: "+this.ganador)
    } else if (document.getElementById("celda" + 0)?.getAttribute("marcado") == "O" &&
      document.getElementById("celda" + 3)?.getAttribute("marcado") == "O" && 
      document.getElementById("celda" + 6)?.getAttribute("marcado") == "O") {
      this.ganador = 2;
      console.log("Ganador: "+this.ganador)
    } else if (document.getElementById("celda" + 1)?.getAttribute("marcado") == "O" &&
      document.getElementById("celda" + 4)?.getAttribute("marcado") == "O" && 
      document.getElementById("celda" + 7)?.getAttribute("marcado") == "O") {
      this.ganador = 2;
      console.log("Ganador: "+this.ganador)
    } else if (document.getElementById("celda" + 2)?.getAttribute("marcado") == "O" &&
      document.getElementById("celda" + 5)?.getAttribute("marcado") == "O" && 
      document.getElementById("celda" + 8)?.getAttribute("marcado") == "O") {
      this.ganador = 2;
      console.log("Ganador: "+this.ganador)
    } else if (document.getElementById("celda" + 0)?.getAttribute("marcado") == "O" &&
      document.getElementById("celda" + 4)?.getAttribute("marcado") == "O" && 
      document.getElementById("celda" + 8)?.getAttribute("marcado") == "O") {
      this.ganador = 2;
      console.log("Ganador: "+this.ganador)
    } else if (document.getElementById("celda" + 2)?.getAttribute("marcado") == "O" &&
      document.getElementById("celda" + 4)?.getAttribute("marcado") == "O" && 
      document.getElementById("celda" + 6)?.getAttribute("marcado") == "O") {
      this.ganador = 2;
      console.log("Ganador: "+this.ganador)
    }
    
  }
}
