import {Component, OnInit} from '@angular/core';
import {MonkeyDto, ShelterService} from "./shelter.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit
  {

    listOfMonkeys : MonkeyDto[] = [];
    displayedColumns: string[] = ['id', 'name', 'age', 'weight', 'eyeColor', 'species', 'registered', 'favoriteFruit'];


  constructor(private shelterService:ShelterService) {
  }
    ngOnInit(): void {
    this.shelterService.getMonkeys().subscribe(data =>
      {
        this.listOfMonkeys = data;
      });
    }


}
