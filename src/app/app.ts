
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from './components/header/header';
import { Navbar } from './components/navbar/navbar';
import { Profile } from './components/profile/profile';
import { Friends } from './components/friends/friends';
import { Notifications } from './components/notifications/notifications';
import { Footer } from './components/footer/footer';
import { ConferenceList } from './components/conference-list/conference-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Header,
    Navbar,
    Profile,
    Friends,
    Notifications,
    Footer,
    ConferenceList
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('conference-app');
}
