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
  selectedCat?:Kiscica

  constructor(private db:DbService){}
  ngOnInit(): void {
     this.db.getAllCats().subscribe(
      (cats)=>{ 
        this.cats = cats
      }
     )
  }

  editSelectedCat(cat:Kiscica){
     this.selectedCat = cat
  }

  closeEditModal(){
    this.selectedCat = undefined
  }

}

