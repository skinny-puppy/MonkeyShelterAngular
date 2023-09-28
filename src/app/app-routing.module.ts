import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateMonkeyComponent} from "./create-monkey/create-monkey.component";
import {DeleteMonkeyComponent} from "./delete-monkey/delete-monkey.component";
import {UpdateMonkeyComponent} from "./update-monkey/update-monkey.component";
import {ReportSpeciesComponent} from "./report-species/report-species.component";

const routes: Routes = [{
  path: "create-monkey", component: CreateMonkeyComponent,},
  {
    path: "delete-monkey", component: DeleteMonkeyComponent
  },
  {
    path: "update-monkey", component: UpdateMonkeyComponent
  },
  {
    path: "report-species", component: ReportSpeciesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
