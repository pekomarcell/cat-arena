import { Component } from '@angular/core';
import { DbService } from '../db.service';
import { Kiscica } from 'src/types/cat-type';

@Component({
  selector: 'app-add-cat',
  templateUrl: './add-cat.component.html',
  styleUrls: ['./add-cat.component.css']
})
export class AddCatComponent {

name = "";
atk = 0;
def = 0;

constructor(private db:DbService){}
//Hozáad egy macskát a db-hez.
addCat():void{
  //console.log(this.name)
  const cat:Kiscica = {name:this.name, atk:this.atk, def:this.def}
this.db.addCat(cat).subscribe(
  ()=>{ console.log("cica hozzaadva");
  

  }
)

}

}
