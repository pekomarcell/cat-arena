import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';
import { Kiscica } from 'src/types/cat-type';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {
  cats:any =  []
  editedCat?:Kiscica

  constructor(private db:DbService){}
  ngOnInit(): void {
     this.db.getAllCats().subscribe(
      (cats)=>{ 
        this.cats = cats
      }
     )
  }

  editCat(cat:Kiscica){
     this.editedCat = cat
  }

  closeEditModal(){
    this.editedCat = undefined
  }

  deleteSelectedCat(deletedCat:Kiscica){
    this.db.deleteCat(deletedCat).subscribe(
      ()=>{
        window.location.reload()
        //console.log("Cica törölve")
      }
    )
  }

}

