import {Component, OnInit} from '@angular/core';
import {MonkeyDto, ShelterService, SpeciesDto} from "../shelter.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-report-species',
  templateUrl: './report-species.component.html',
  styleUrls: ['./report-species.component.scss']
})
export class ReportSpeciesComponent implements OnInit {

  form : FormGroup;
  listOfSpecies : SpeciesDto[] = [];
  displayedColumns: string[] = ['species', 'count'];


  constructor(private shelterService:ShelterService, private formBuilder:FormBuilder) {
    this.form = formBuilder.group(
      {
        dateFrom: ['', Validators.required],
        dateTo: ['', Validators.required]
      }
    );
  }
  ngOnInit(): void {
    this.shelterService.getSpecies().subscribe(data =>
    {
      this.listOfSpecies = data;
    });
  }

  public onSubmit() {

    let dateFrom = "";
    let dateTo = "";


    if (this.form.get("dateFrom")?.value)
    {
      dateFrom = new Date(this.form.get("dateFrom")?.value).toISOString();

    }

    if(this.form.get("dateTo")?.value)

    {
      dateTo = new Date(this.form.get("dateTo")?.value).toISOString();

    }

    if (!dateTo)
    {
      this.shelterService.getSpecies().subscribe(data =>
      {
        this.listOfSpecies = data;
      });
    }

    else {
      this.shelterService.getSpeciesByDate(dateFrom, dateTo).subscribe(data =>
      {
        this.listOfSpecies = data;
      });
    }
    }
}
