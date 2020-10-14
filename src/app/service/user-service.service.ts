import { User } from './../user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:9191/User/';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}\getuser`);
  }

  public register(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}\Register`, user);
  }
}
