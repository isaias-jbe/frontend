import { Component, OnInit } from "@angular/core";
import { EventsService } from "./events.service";
import { Event } from "./event";

@Component({
  selector: "app-list-event",
  templateUrl: "./list-events.component.html",
  providers: [EventsService]
})
export class ListEventsComponent implements OnInit {
  events: Event[];
  editEvent: Event;

  constructor(private eventsService: EventsService) {}

  ngOnInit() {
    this.get();
  }

  get(): void {
    this.eventsService.getEvents().subscribe(events => (this.events = events));
  }

  edit(event) {
    this.editEvent = event;
  }

  update() {
    if (this.editEvent) {
      this.eventsService.updateEvent(this.editEvent).subscribe(event => {
        const ix = event ? this.events.findIndex(h => h.id === event.id) : -1;

        if (ix > -1) {
          this.events[ix] = event;
        }
      });
      this.editEvent = undefined;
    }
  }

  delete(event: Event): void {
    this.events = this.events.filter(h => h !== event);
    this.eventsService.deleteEvent(event.id).subscribe();
  }
}
