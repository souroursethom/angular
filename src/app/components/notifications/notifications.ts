
import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css'
})
export class Notifications {

  notificationCount: number = 2;

  notifications: string[] = [
    'Une nouvelle conférence est disponible.',
    'Votre inscription a été confirmée.'
  ];

  showNotifications: boolean = false;

  toggleNotifications(): void {
    this.showNotifications = !this.showNotifications;
  }
}
