import { Component } from '@angular/core';
import {Card} from './card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-name-card';
  card: Card = {
    phone : '0836886899',
    email: 'vanhopld98@gmail.com',
    cardName: 'Hợp Đẹp Trai thế'
  };
}
