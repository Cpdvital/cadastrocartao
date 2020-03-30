import { PaymentDetail } from './payment-detail.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  formData: PaymentDetail;
  readonly rootURL = 'http://localhost:52675/api/';
  list: PaymentDetail[];

  constructor(private http: HttpClient) { }

  postPaymentDetail() {
    const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'})};
    return this.http.post(this.rootURL + 'PaymentDetail', JSON.stringify(this.formData), { headers: httpOptions.headers });
  }

  putPaymentDetail() {
    return this.http.put(this.rootURL + 'PaymentDetail/' + this.formData.PMId, this.formData);
   }

   deletePaymentDetail(id) {
    return this.http.delete(this.rootURL + 'PaymentDetail/' + id);
   }

  refreshList() {
    this.http.get(this.rootURL + 'PaymentDetail/')
    .toPromise()
    .then(res => this.list = res as PaymentDetail[]);
  }
}
