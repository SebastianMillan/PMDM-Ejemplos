import { Component, Input } from '@angular/core';
import { List } from '../../models/list-of-lists.interface';
import { ListService } from '../../services/list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-card',
  templateUrl: './lista-card.component.html',
  styleUrl: './lista-card.component.css'
})
export class ListaCardComponent {
  @Input() listToShow!: List;

  constructor(private listService: ListService, private router : Router){}

  verDetalle() {
    this.listService.getDetailList(this.listToShow.id).subscribe(() => {
      this.router.navigate(["/profile/list", this.listToShow.id])
    })
  }

  vaciarLista() {
    this.listService.clearList(this.listToShow.id).subscribe(() => {
      window.location.reload();
    });
  }
  eliminarLista() {
    this.listService.removeList(this.listToShow.id).subscribe(() => {
      window.location.reload();
    });
  }
}
