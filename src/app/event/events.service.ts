import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";

import { Event } from "./event";
import { HttpErrorHandler, HandleError } from "../http-error-handler.service";

@Injectable()
export class EventsService {
  private handleError: HandleError;

  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError("EventsService");
  }

  getEvents(): Observable<Event[]> {
    return this.http
      .get<Event[]>("api/event")
      .pipe(catchError(this.handleError("getEvent", [])));
  }

  addEvent(event: Event): Observable<Event> {
    console.log(event);
    return this.http
      .post<Event>("api/event", event)
      .pipe(catchError(this.handleError("addEvent", event)));
  }

  deleteEvent(id: number): Observable<{}> {
    const url = `api/event/${id}`;
    return this.http
      .delete(url)
      .pipe(catchError(this.handleError("deleteEvent")));
  }

  updateEvent(event: Event): Observable<Event> {
    return this.http
      .put<Event>(`api/event/${event.id}`, event)
      .pipe(catchError(this.handleError("updateEvent", event)));
  }
}
