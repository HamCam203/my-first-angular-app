import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { DecimalPipe } from '@angular/common';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  imports: [FaceSnapComponent,DecimalPipe],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent  implements OnInit {

  
  faceSnaps!: FaceSnap[];
  averageSnaps: number = 0;

  constructor(private faceSnapsService : FaceSnapsService) { }

  ngOnInit(): void {
    this.faceSnaps = this.faceSnapsService.getFaceSnaps();

    this.averageSnaps = this.faceSnapsService.calculateAverageSnaps();
  }

  
    // Mettre à jour la moyenne après un like/unlike
    onSnapUpdated(): void {
      this.averageSnaps = this.faceSnapsService.calculateAverageSnaps();
    }

}
