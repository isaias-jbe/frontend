import { Component } from "@angular/core";
import { EventsService } from "./events.service";
import { Event } from "./event";

@Component({
  selector: "app-create-event",
  templateUrl: "./create-events.component.html",
  providers: [EventsService]
})
export class EventsComponent {
  events: Event[];
  editEvent: Event;

  constructor(private eventsService: EventsService) {}

  addEvent(
    title: string,
    description: string,
    responsible: number,
    start: Date,
    end: Date
  ): void {
    this.editEvent = undefined;
    title = title.trim();
    if (!title) {
      return;
    }

    const newEvent: Event = {
      title,
      description,
      responsible,
      start,
      end
    } as Event;
    this.eventsService
      .addEvent(newEvent)
      .subscribe(event => this.events.push(event));
  }
}
