import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class BikeService {
  private url = '/server/api/v1/bikes';

  constructor(private http:HttpClient) { }

  getBikes() {
    return this.http.get(this.url);
  }

  getBike(id: number) {
    return this.http.get(this.url + '/' + id)
  }

  createBikeRegistration(bike: any) {
    let body = JSON.stringify(bike);
    return this.http.post(this.url, body, httpOptions);
  }

}
