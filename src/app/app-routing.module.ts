import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "src/app/home/home.component";
import { CatsComponent } from "src/app/cats/cats.component";
import { AddCatComponent } from "./add-cat/add-cat.component";
import { BattlefieldComponent } from "./battlefield/battlefield.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "cats", component: CatsComponent },
  { path: "battlefield", component: BattlefieldComponent },
  { path: "addcat", component: AddCatComponent },
  { path: "", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
