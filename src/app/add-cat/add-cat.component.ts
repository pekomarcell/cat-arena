import { Component, Input, OnInit } from "@angular/core";
import { DbService } from "../db.service";
import { Kiscica } from "src/types/cat-type";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-cat",
  templateUrl: "./add-cat.component.html",
  styleUrls: ["./add-cat.component.css"],
})
export class AddCatComponent implements OnInit {
  @Input() cat?: Kiscica;

  loading = true;
  name = "";
  atk = 0;
  def = 0;
  img?: string = "";

  constructor(private db: DbService, private router: Router) {}
  ngOnInit(): void {
    if (!this.cat) {
      this.loading = false;
    } else {
      this.name = this.cat.name;
      this.atk = this.cat.atk;
      this.def = this.cat.def;
      this.img = this.cat.img;
      this.loading = false;
    }
  }
  addCat(): void {
    const cat: Kiscica = {
      name: this.name,
      atk: this.atk,
      def: this.def,
      img: this.img,
    };
    this.db.addCat(cat).subscribe(() => {
      this.router.navigate([`cats`]);
      window.location.reload();
      console.log("cica hozzaadva");
    });
  }

  editCat() {
    let editedCat: Kiscica = {
      id: this.cat?.id,
      name: this.name,
      atk: this.atk,
      def: this.def,
      img: this.img,
    };
    this.db.editCat(editedCat).subscribe(() => {
      console.log("Cica frissítve");
      window.location.reload();
    });
  }
}
