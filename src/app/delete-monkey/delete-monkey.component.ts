import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MonkeyDto, ShelterService} from "../shelter.service";

@Component({
  selector: 'app-delete-monkey',
  templateUrl: './delete-monkey.component.html',
  styleUrls: ['./delete-monkey.component.scss']
})
export class DeleteMonkeyComponent {


  form : FormGroup;

  constructor(private shelterService:ShelterService, private formBuilder:FormBuilder) {
    this.form = formBuilder.group(
      {
        Id: ['', Validators.required]
      }
    );
  }

  public onSubmit() {
    const id = this.form.get("Id")?.value;
    console.log(id);
    this.shelterService.deleteMonkey(id).subscribe(data => {
      console.log(data)
    });
  }
}
