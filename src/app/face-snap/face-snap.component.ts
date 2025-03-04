import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string; // ! indique à Typesrcipt que l'on va initialiser les propriétés par la suite, et qu'il ne s'agit pas d'une erreur
  createdAt!: Date;
  snaps!: number;
  imageUrl!: string;
  snapButtonText! : string;
  userHasSnapped! : boolean; // permet de savoir si l'utilisateur à déjà snapper l'image

  ngOnInit() { // Permet d'initialiser les propriétés
    this.title = 'Archibald';
    this.description = 'Mon meilleur ami depuis toujours !';
    this.createdAt = new Date();
    this.snaps = 5;
    this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
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
      this.snaps--;
      this.snapButtonText = 'Oh Snap!';
      this.userHasSnapped = false;
  }

  snap() {
      this.snaps++;
      this.snapButtonText = 'Oops, unSnap!';
      this.userHasSnapped = true;
  }
}