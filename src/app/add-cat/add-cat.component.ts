import { Component, Input, OnInit } from "@angular/core";
import { DbService } from "../db.service";
import { Kiscica } from "src/types/cat-type";

@Component({
  selector: "app-add-cat",
  templateUrl: "./add-cat.component.html",
  styleUrls: ["./add-cat.component.css"],
})
export class AddCatComponent implements OnInit {
  @Input() cat?:Kiscica;

  loading = true  
  name = ""
  atk =  0 
  def =  0 
  img?:string =  "" 



  constructor(private db: DbService) {}
  ngOnInit(): void {
    
    if(!this.cat){
      this.loading = false
    }else{
      this.name = this.cat.name
      this.atk = this.cat.atk
      this.def = this.cat.def
      this.img = this.cat.img
      this.loading = false
    }

  }
  //Hozáad egy macskát a db-hez.
  addCat(): void {
    //console.log(this.name)
    const cat: Kiscica = { name: this.name, atk: this.atk, def: this.def, img: this.img };
    this.db.addCat(cat).subscribe(() => {
      console.log("cica hozzaadva");
    });
  }

  editCat(){

    //console.log({name: this.name, atk: this.atk, def: this.def, img: this.img})
    let editedCat:Kiscica = {id: this.cat?.id, name: this.name, atk: this.atk, def: this.def, img: this.img}
    this.db.editCat(editedCat).subscribe(()=>{
      console.log("Cica frissítve")
      window.location.reload() 
    })
    
  }

  

}
