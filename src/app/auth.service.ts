import { Injectable } from '@angular/core';
import { User } from './entities';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  addUser(user: User) {
    return this.http.post<User>('http://localhost:8000/api/user', user);
  }
}
