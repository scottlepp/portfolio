import { Component, OnInit } from '@angular/core';
import { DataService } from './data/data.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  repos = [];
  addedMap = false;
  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.fetchRepos().subscribe(repos => {
      this.repos = repos.filter(repo => !repo.fork && !repo.archived);
    });
  }

  onSelect(item) {
    window.open(item.html_url, '_blank');
  }

  onLinkedInSelect() {
    window.open('https://www.linkedin.com/in/scott-lepper-51546b4/', '_blank');
  }

  addMap() {

    if (!this.addedMap) {
      const map = L.map('map').setView([42.590103, -85.54092], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      L.marker([42.590103, -85.54092]).addTo(map)
        .bindPopup('Gun Lake, Michigan')
        .openPopup();

      this.addedMap = true;
    }
  }

  onTabSelect($event) {
    if ($event.index === 3) {
      this.addMap();
    }
  }
}
