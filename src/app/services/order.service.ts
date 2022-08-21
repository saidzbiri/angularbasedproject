import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class OrderService {

  constructor(private http: HttpClient) {
  }

  getOrders() {
    const token = localStorage.getItem('token');
    const options = { headers: this.getRequestOptions(token) };

    return this.http.get('/api/orders', this.getRequestOptions(token));
  }

  private getRequestOptions(token?: string) {
    let myHeaders = new HttpHeaders();
    myHeaders = myHeaders.append('Authorization', 'Bearer ' + token);
    return { headers: myHeaders };
  }

}
