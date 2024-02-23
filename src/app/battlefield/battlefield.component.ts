import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';
import { Kiscica } from 'src/types/cat-type';

@Component({
  selector: 'app-battlefield',
  templateUrl: './battlefield.component.html',
  styleUrls: ['./battlefield.component.css']
})
export class BattlefieldComponent implements OnInit {

  

  firstCatData?:Kiscica
  secondCatData?:Kiscica
  isModalOpen:boolean = false

  constructor(private db:DbService){}

  //const catFight = array[Math.floor(Math.random() * array.length)];
  ngOnInit():any{
    this.randomCatGenerator()
  }

  randomCatGenerator(){
    this.db.getAllCats().subscribe(
      (cats:any)=>{ 

         this.firstCatData = cats[Math.floor(Math.random() * cats.length)]

         this.secondCatData = cats[Math.floor(Math.random() * cats.length)]
       
        console.log(this.firstCatData, this.secondCatData);
              
      }
    )
      
  }
  
  openModal(){
    this.isModalOpen = true
  }

  closeModal(){
    this.isModalOpen = false
  }

}
