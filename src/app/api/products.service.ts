import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) {

  }

  getproduct() {
    return this.http.get("http://localhost:3000/posts")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
