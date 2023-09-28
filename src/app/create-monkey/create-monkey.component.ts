import { Component } from '@angular/core';
import {MonkeyDto, ShelterService} from "../shelter.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSelectChange} from "@angular/material/select";

@Component({
  selector: 'app-create-monkey',
  templateUrl: './create-monkey.component.html',
  styleUrls: ['./create-monkey.component.scss']
})
export class CreateMonkeyComponent {

  form : FormGroup;
  species: string[] = ['Amazon black howler', 'Bald uakari', 'Blond capuchin', 'Brown spider monkey', 'Colombian woolly monkey',
    'Emperor tamarin', 'Equatorial saki', 'Gray-handed night monkey',
    'Mantled howler', 'Northern muriqui', 'Pygmy marmoset',
    'Red-backed bearded saki', 'Red-faced spider monkey', 'Rio Purus titi',
    'White-coated titi', 'White-nosed saki'
  ];

  constructor(private shelterService:ShelterService, private formBuilder:FormBuilder) {
    this.form = formBuilder.group(
      {
        Name: ['', Validators.required],
        Age: ['', Validators.required],
        Weight: ['', Validators.required],
        EyeColor: ['', Validators.required],
        Species: ['', Validators.required],
        FavoriteFruit: ['', Validators.required]
      }
    );
  }

  public onSubmit() {
    this.shelterService.createMonkey(this.form.getRawValue() as MonkeyDto).subscribe(data => {
      console.log(data)
    });
  }




}
