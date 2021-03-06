import { Injectable } from '@angular/core';
import { Place } from '../places/places.model';
import { Booking } from './booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {
  private _bookings: Booking[] = [
    {
      id: 'xyz',
      placeId: 'p1',
      placeTitle: 'Ruko Bolsena',
      guestNumber: 2,
      userId: 'abc'
    },
    {
      id: 'abc',
      placeId: 'p2',
      placeTitle: 'Scientia Residence',
      guestNumber: 8,
      userId: 'def'
    }
  ];

  get bookings() {
    return [...this._bookings];
  }

  deleteBooking(_bookings: any) {
    this._bookings.splice(this._bookings.indexOf(_bookings), 1);
  }
  constructor() { }
}
