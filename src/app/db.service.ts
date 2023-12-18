import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Kiscica } from 'src/types/cat-type';

@Injectable({
  providedIn: 'root'
})
export class DbService {



  constructor(private http:HttpClient) { }

 getAllCats(){
  return this.http.get("http://localhost:3000/cats")
}

//Csináljunk cashelést 

addCat(cat:Kiscica){
  let headers = new HttpHeaders(
    {
      "Content-Type": "application/json" 
    }
  )
  return this.http.post("http://localhost:3000/cats", cat,  {
    headers: headers
} )
}

}
