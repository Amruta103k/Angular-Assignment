import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders }    from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class ServiceService {

constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'mode': 'no-cors'
      // 'Accept': 'application/json',
      // 'Access-Control-Allow-Origin': '*'
    })
  }
  getData(){

    return this.http.get('https://localhost:44385/api/driver');  //https://localhost:44385/ webapi host url
  }

  postData(formData: any){
    alert(formData);
    return this.http.post('https://localhost:44385/api/driver',formData);
  }

  putData(id: string,formData: any){
    return this.http.put('https://localhost:44385/api/driver/'+id,formData);
  }
  deleteData(id: number){
    return this.http.delete('https://localhost:44385/api/driver/'+id);
  }

}
