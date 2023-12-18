import { Component, Input } from '@angular/core';
import { Kiscica } from 'src/types/cat-type';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent {
  @Input({ required: true }) cat!:Kiscica;


}
 
