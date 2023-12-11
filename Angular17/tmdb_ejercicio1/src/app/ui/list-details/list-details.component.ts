import { Component, OnInit } from '@angular/core';
import { DetailListResponse } from '../../models/list-detail.interface';
import { ListService } from '../../services/list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrl: './list-details.component.css'
})
export class ListDetailsComponent implements OnInit{
  
  listDetail!: DetailListResponse;
  id=1;

  constructor(private listaService: ListService, private route : ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(p => this.id = +p['id']);
    this.listaService.getDetailList(this.id).subscribe(resp => {
      this.listDetail = resp;
    })
  }
}
