import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Kiscica } from "src/types/cat-type";

@Injectable({
  providedIn: "root",
})
export class DbService {
  
  headers = new HttpHeaders({
    "Content-Type": "application/json",
  });

  constructor(private http: HttpClient) {}


  getAllCats() {
    return this.http.get("http://localhost:3000/cats");
  }

  //Csináljunk cashelést

  addCat(cat: Kiscica) {
   
    return this.http.post("http://localhost:3000/cats", cat, {
      headers: this.headers,
    });
  }

  editCat(cat: Kiscica) {
    
    return this.http.put("http://localhost:3000/cats/" + cat.id, cat,{
      headers: this.headers
    })
  }
}
