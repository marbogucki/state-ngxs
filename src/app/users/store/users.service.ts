import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  urlApi = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  fetchUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.urlApi}/users`);
  }

  addUser(user: Partial<User>): Observable<User> {
    return this.http.post<User>(`${this.urlApi}/users`, user);
  }
}
