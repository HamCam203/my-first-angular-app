import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { DatePipe, NgClass, NgStyle, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [NgStyle, NgClass,TitleCasePipe,DatePipe],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  snapButtonText! : string;
  userHasSnapped! : boolean; // permet de savoir si l'utilisateur à déjà snapper l'image
  @Input() faceSnap!: FaceSnap;

  ngOnInit() { // Permet d'initialiser les propriétés
    this.snapButtonText = "Oh Snap!";

  }
  onSnap(): void {
    if (this.userHasSnapped) {
      this.unSnap();
    } else {
      this.snap();
    }
  }

  unSnap() {
    this.faceSnap.removeSnap();
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;
  }

  snap() {
      this.faceSnap.addSnap();
      this.snapButtonText = 'Oops, unSnap!';
      this.userHasSnapped = true;
  }
}