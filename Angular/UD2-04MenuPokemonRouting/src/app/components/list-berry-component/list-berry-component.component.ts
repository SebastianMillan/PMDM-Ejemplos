import { Component, OnInit } from '@angular/core';
import { Berry } from 'src/app/models/berry-list.interface';
import { BerryService } from 'src/app/services/berry.service';

@Component({
  selector: 'app-list-berry-component',
  templateUrl: './list-berry-component.component.html',
  styleUrls: ['./list-berry-component.component.css']
})
export class ListBerryComponentComponent implements OnInit{

  berryList: Berry[] = [];

  constructor(private berryService: BerryService) { }
  
  ngOnInit(): void {
    this.berryService.getAllBerries().subscribe(resp => {
      this.berryList = resp.results;
    })
  }
  
  
}
