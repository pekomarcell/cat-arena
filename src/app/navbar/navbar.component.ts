import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent {
  searchInput: any;

  constructor(private router: Router) {}

  search() {
    this.router.navigate(["cats"], { queryParams: { key: this.searchInput } });
  }
}
