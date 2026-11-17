
import { Component } from '@angular/core';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Conference } from '../../models/conference';

@Component({
  selector: 'app-conference-list',
  standalone: true,
  imports: [DatePipe, UpperCasePipe, FormsModule],
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css'
})
export class ConferenceList {

  searchTitle: string = '';

  conferences: Conference[] = [
    {
      id: 1,
      title: 'Angular',
      description: 'Conférence sur Angular et le développement web.',
      date: new Date(2026, 11, 10),
      place: 'Tunis',
      maxParticipants: 100,
      nbParticipants: 50
    },
    {
      id: 2,
      title: 'Intelligence Artificielle',
      description: 'Découverte des technologies IA.',
      date: new Date(2026, 11, 15),
      place: 'Sousse',
      maxParticipants: 50,
      nbParticipants: 45
    },
    {
      id: 3,
      title: 'Cloud Computing',
      description: 'Conférence sur les services Cloud.',
      date: new Date(2026, 11, 20),
      place: 'Sfax',
      maxParticipants: 30,
      nbParticipants: 30
    }
  ];

  // Afficher uniquement les conférences à venir
  // et filtrer selon le titre recherché
  get filteredConferences(): Conference[] {

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return this.conferences.filter(conference => {

      const dateConference = new Date(conference.date);
      dateConference.setHours(0, 0, 0, 0);

      const isUpcoming = dateConference >= today;

      const matchesSearch = conference.title
        .toLowerCase()
        .includes(this.searchTitle.trim().toLowerCase());

      return isUpcoming && matchesSearch;
    });
  }

  // Calculer les places restantes
  getPlacesRestantes(conference: Conference): number {
    return conference.maxParticipants - conference.nbParticipants;
  }

  // Déterminer la couleur du bouton
  getButtonColor(conference: Conference): string {

    const placesRestantes = this.getPlacesRestantes(conference);

    if (placesRestantes === 0) {
      return 'red';
    }

    if (placesRestantes < 10) {
      return 'orange';
    }

    return 'green';
  }

  // Inscrire un participant
  inscrire(conference: Conference): void {

    if (this.getPlacesRestantes(conference) > 0) {
      conference.nbParticipants++;
    }

  }
}
