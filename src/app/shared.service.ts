import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIurl='https://localhost:44373/api';


  constructor(private http:HttpClient) {  }
  
  //functie prin care se ia lista produselor - consuma metoda get
  getProdList():Observable<any[]>{
      return this.http.get<any>(this.APIurl+"/produs");
    }


}