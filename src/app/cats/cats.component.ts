import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {
  cats:any =  []

  constructor(private db:DbService){}
  ngOnInit(): void {
     this.db.getAllCats().subscribe(
      (cats)=>{ this.cats = cats

      }
     )
  }
}

