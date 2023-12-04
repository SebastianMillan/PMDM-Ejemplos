import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ListService } from '../../services/list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-list-page',
  templateUrl: './form-list-page.component.html',
  styleUrl: './form-list-page.component.css'
})
export class FormListPageComponent {

  constructor(private listService: ListService, private router: Router){}

  createListForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    language : new FormControl('', Validators.required)
  })  

  createList() {
    this.listService.createList(
      this.createListForm.get('name')?.value,
      this.createListForm.get('description')?.value,
      this.createListForm.get('language')?.value
    ).subscribe(() => {
      this.router.navigateByUrl('/profile');
    })
  }
}
