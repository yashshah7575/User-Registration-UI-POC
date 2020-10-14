import { User } from './../user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common'

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private baseUrl: string;

  constructor(private http: HttpClient, private datepipe: DatePipe) {
    this.baseUrl = 'http://localhost:9191/User/';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}\getuser`);
  }

  public register(user: User): Observable<User> {
    //user.createdDate =  d1;
    //user.updatedDate =  d1;

    return this.http.post<User>(`${this.baseUrl}\Register`, user);
  }
}
