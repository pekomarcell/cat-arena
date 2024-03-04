import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NavbarComponent } from "./navbar/navbar.component";
import { CatsComponent } from "./cats/cats.component";
import { HomeComponent } from "./home/home.component";
import { FormsModule } from "@angular/forms";
import { CatComponent } from "./cat/cat.component";
import { AddCatComponent } from "./add-cat/add-cat.component";
import { HttpClientModule } from "@angular/common/http";
import { BattlefieldComponent } from "./battlefield/battlefield.component";
import { TimerComponent } from "./timer/timer.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CatsComponent,
    HomeComponent,
    CatComponent,
    AddCatComponent,
    BattlefieldComponent,
    TimerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
