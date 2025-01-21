import { Component } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { SeatBookingComponent } from '../seat-booking/seat-booking.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchComponent, SeatBookingComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
