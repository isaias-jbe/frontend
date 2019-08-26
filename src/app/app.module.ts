import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
// import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EventsComponent } from "./event/create-events.component";
import { ListEventsComponent } from "./event/list-events.component";
import { HttpErrorHandler } from "./http-error-handler.service";
import { MessageService } from "./message.service";
@NgModule({
  declarations: [AppComponent, EventsComponent, ListEventsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [MessageService, HttpErrorHandler],
  bootstrap: [AppComponent]
})
export class AppModule {}
