import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

export interface MonkeyDto {
  Id?: string,
  Name: string,
  Age: number,
  Weight: number,
  EyeColor: string,
  Species: string,
  Registered?: string,
  FavoriteFruit: string
}
@Injectable({
  providedIn: 'root'
})
export class ShelterService {

  constructor(private http:HttpClient)
  {

  }

  getMonkeys() {
    return this.http.get<MonkeyDto[]>("http://localhost:44334/api/Monkeys");
  }

  createMonkey(monkey : MonkeyDto) {
    return this.http.post<MonkeyDto>("http://localhost:44334/api/Monkeys", monkey);
  }

  deleteMonkey(id : string) {
    return this.http.delete<MonkeyDto>(`http://localhost:44334/api/Monkeys/${id}`);
  }

  updateMonkey(id : string, weight : number) {
    return this.http.put<MonkeyDto>(`http://localhost:44334/api/Monkeys/${id}?weight=${weight}`, weight);
  }
}
