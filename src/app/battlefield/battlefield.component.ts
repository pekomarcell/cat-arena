import { Component, OnInit } from "@angular/core";
import { DbService } from "../db.service";
import { Kiscica } from "src/types/cat-type";

@Component({
  selector: "app-battlefield",
  templateUrl: "./battlefield.component.html",
  styleUrls: ["./battlefield.component.css"],
})
export class BattlefieldComponent implements OnInit {
  firstCatData?: Kiscica;
  secondCatData?: Kiscica;
  isModalOpen: boolean = false;
  winner?: string = "";

  constructor(private db: DbService) {}

  //const catFight = array[Math.floor(Math.random() * array.length)];
  ngOnInit(): any {
    this.randomCatGenerator();
  }

  randomCatGenerator() {
    this.db.getAllCats().subscribe((cats: any) => {
      this.firstCatData = cats[Math.floor(Math.random() * cats.length)];

      this.secondCatData = cats[Math.floor(Math.random() * cats.length)];

      // console.log(this.firstCatData, this.secondCatData);
      let whoAttacksFirst: boolean = Math.random() <= 0.5;

      if (whoAttacksFirst) {
        let firstCase =
          (this.firstCatData?.atk || 0) > (this.secondCatData?.def || 0);
        let secondCase =
          (this.secondCatData?.atk || 0) > (this.firstCatData?.def || 0);

        if (firstCase) {
          this.winner = this.firstCatData?.name;
        } else if (secondCase) {
          this.winner = this.secondCatData?.name;
        } else {
          this.winner = "Döntetlen, mindkét macska remekül harcolt!";
        }
      } else {
        let firstCase =
          (this.secondCatData?.atk || 0) > (this.firstCatData?.def || 0);
        let secondCase =
          (this.firstCatData?.atk || 0) > (this.secondCatData?.def || 0);

        if (firstCase) {
          this.winner = this.secondCatData?.name;
        } else if (secondCase) {
          this.winner = this.firstCatData?.name;
        } else {
          this.winner = "Döntetlen, mindkét macska remekül harcolt!";
        }
      }
    });
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  newBattle() {
    window.location.reload();
  }
}
