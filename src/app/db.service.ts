import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Kiscica } from "src/types/cat-type";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DbService {
  
  headers = new HttpHeaders({
    "Content-Type": "application/json",
  });

  constructor(private http: HttpClient) {}


  getAllCats():Observable<Kiscica[]> {
    return this.http.get<Kiscica[]>("http://localhost:3000/cats");
    
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

  deleteCat(deletedCat: Kiscica){
    return this.http.delete("http://localhost:3000/cats/" + deletedCat.id,{
      headers: this.headers
    })
  }

}
