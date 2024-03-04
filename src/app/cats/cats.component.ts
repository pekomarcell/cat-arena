import { Component, OnInit } from "@angular/core";
import { DbService } from "../db.service";
import { Kiscica } from "src/types/cat-type";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-cats",
  templateUrl: "./cats.component.html",
  styleUrls: ["./cats.component.css"],
})
export class CatsComponent implements OnInit {
  cats: Kiscica[] = [];
  editedCat?: Kiscica;
  deletedCat?: Kiscica;
  search: string = "";
  filteredCats?: Kiscica[] = [];

  constructor(private db: DbService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.db.getAllCats().subscribe((cats) => {
      this.cats = cats;

      this.filteredCats = this.cats.filter((cat) =>
        cat.name.toLowerCase().includes(this.search.toLowerCase())
      );
    });

    this.route.queryParams.subscribe((params) => {
      this.search = params["key"];
      this.filteredCats = this.cats.filter((cat) =>
        cat.name.toLowerCase().includes(this.search.toLowerCase())
      );
    });
  }

  editCat(cat: Kiscica) {
    this.editedCat = cat;
  }

  closeEditModal() {
    this.editedCat = undefined;
  }

  deleteSelectedCat(deletedCat: Kiscica) {
    this.db.deleteCat(deletedCat).subscribe(() => {
      window.location.reload();
      //console.log("Cica törölve")
    });
  }

  deleteCat(cat: Kiscica) {
    this.deletedCat = cat;
  }

  closeDeleteCatModal() {
    this.deletedCat = undefined;
  }
}
