import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";

import { User } from "./user";
import { HttpErrorHandler, HandleError } from "../http-error-handler.service";

@Injectable()
export class UsersService {
  private handleError: HandleError;

  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError("UsersService");
  }

  getUsers(): Observable<User[]> {
    return this.http
      .get<User[]>("api/user")
      .pipe(catchError(this.handleError("getUser", [])));
  }

  addUser(user: User): Observable<User> {
    console.log(user);
    return this.http
      .post<User>("api/user", user)
      .pipe(catchError(this.handleError("addUser", User)));
  }

  deleteUser(id: number): Observable<{}> {
    const url = `api/user/${id}`;
    return this.http
      .delete(url)
      .pipe(catchError(this.handleError("deleteUser")));
  }

  updateUser(user: User): Observable<User> {
    return this.http
      .put<User>(`api/user/${user.id}`, user)
      .pipe(catchError(this.handleError("updateUser", user)));
  }
}
