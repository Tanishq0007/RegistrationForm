import { Injectable } from '@angular/core';
import {HttpClient ,HttpHeaders } from '@angular/common/http';
import { DOMAIN } from '../../shared/assets';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  domain: string;

  constructor(private http: HttpClient) {
    this.domain = DOMAIN;
  }
  createUser(body: any) {
    const headers = new HttpHeaders(
      {
        'Content-Type': 'application/json; charset=utf-8',
      });

    return this.http.post<any>(`${this.domain}/api/auth/register`, body, { headers: headers });
  }
  loginUser(body: any) {
    const headers = new HttpHeaders(
      {
        'Content-Type': 'application/json; charset=utf-8',
      });

    return this.http.post<any>(`${this.domain}/api/auth/login`, body, { headers: headers });
    }
}
