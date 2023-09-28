import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ShelterService} from "../shelter.service";

@Component({
  selector: 'app-update-monkey',
  templateUrl: './update-monkey.component.html',
  styleUrls: ['./update-monkey.component.scss']
})
export class UpdateMonkeyComponent {


  form : FormGroup;

  constructor(private shelterService:ShelterService, private formBuilder:FormBuilder) {
    this.form = formBuilder.group(
      {
        Id: ['', Validators.required],
        Weight: ['', Validators.required]
      }
    );
  }

  public onSubmit() {
    const id = this.form.get("Id")?.value;
    const weight = this.form.get("Weight")?.value;
    this.shelterService.updateMonkey(id, weight).subscribe(data => {
      console.log(data)
    });
  }
}
