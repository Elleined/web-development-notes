import { RouterOutlet } from '@angular/router';
import { PrimeNGImportModules } from './primeng-imports';
import { NgModule, OnInit } from '@angular/core';
import { importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
import { EventColor } from 'calendar-utils';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PrimeNGImportModules,
    CommonModule,
    FormsModule,
    FlatpickrModule,
    CalendarModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'core-project';

  calendarView = CalendarView; // Always should be pair with view for data binding only in html
  view: CalendarView = CalendarView.Month; // Makes the calendar view in months. But this can be changed either weekly and daily
  viewDate: Date = new Date(); // Makes the calendar view in months. But this can be changed either weekly and daily also
  refresh = new Subject<void>();

  addAppointmentDialogVisible!: boolean;
  
  draggedOrResizeDialogVisible!: boolean;
  appointments!: CalendarEvent[];

  modalData: {
    action: string;
    event: CalendarEvent;
  } | undefined;

  ngOnInit(): void {
    this.appointments = [
      {
        start: subDays(startOfDay(new Date()), 1),
        end: addDays(new Date(), 1),
        title: 'A 3 day event',

        allDay: true,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
        draggable: true,
      },
      {
        start: startOfDay(new Date()),
        title: 'An event with no end date',

      },
      {
        start: subDays(endOfMonth(new Date()), 3),
        end: addDays(endOfMonth(new Date()), 3),
        title: 'A long event that spans 2 months',

        allDay: true,
      },
      {
        start: addHours(startOfDay(new Date()), 2),
        end: addHours(new Date(), 2),
        title: 'A draggable and resizable event',

        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
        draggable: true,
      },
    ];
  }

  removeAppointment(appointment: CalendarEvent) {
    this.appointments = this.appointments.filter((event) => event !== appointment);
  }

  appointmentClicked(event: CalendarEvent): void {
    this.draggedOrResizeDialogVisible = true;
    const action = "Clicked";
    this.modalData = { event, action };
  }

  appointmentChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    this.draggedOrResizeDialogVisible = true;
    this.appointments = this.appointments.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
    const action = "Dropped or resized";
    this.modalData = { action, event };
  }
}