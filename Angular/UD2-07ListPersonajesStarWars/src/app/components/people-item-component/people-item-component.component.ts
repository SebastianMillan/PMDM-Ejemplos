import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { People } from 'src/app/models/people.interface';

@Component({
  selector: 'app-people-item-component',
  templateUrl: './people-item-component.component.html',
  styleUrls: ['./people-item-component.component.css']
})
export class PeopleItemComponentComponent {
  @Input() people!: People;
  @Output() peopleClick = new EventEmitter<string>();
  peopleId = this.people.url.split('/')[4];
  peopleName = '';

  constructor(private modalService: NgbModal) { }
  
  viewPeopleDetail(modal: any) {
    this.peopleClick.emit(this.peopleId);
    //this.peopleName = this.people.name;
  }

  getPeopleImg() {
    return `https://starwars-visualguide.com/assets/img/characters/${this.peopleId}.jpg`
  }
}
