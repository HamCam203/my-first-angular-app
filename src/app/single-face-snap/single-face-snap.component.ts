import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { CommonModule, DatePipe, DecimalPipe, NgClass, NgStyle, TitleCasePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [NgStyle, NgClass, TitleCasePipe, DatePipe, CommonModule,RouterLink],
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  
  faceSnap!: FaceSnap;
  @Input() allFaceSnaps!: FaceSnap[];
  @Input() averageSnaps!: number;
  @Output() snapUpdated = new EventEmitter<void>();

  snapButtonText!: string;
  userHasSnapped!: boolean;

  constructor(private faceSnapService : FaceSnapsService, private route: ActivatedRoute){}

  ngOnInit() {
    this.prepareInterface();
    this.getFaceSnap();
  }

  private getFaceSnap(){
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFaceSnapById(faceSnapId);
  }
  private prepareInterface(){
    this.snapButtonText = "Oh Snap!";
    this.userHasSnapped = false;
  }
  onSnap(): void {
    if (this.userHasSnapped) {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.snapButtonText = 'Oh Snap!';
      this.userHasSnapped = false;
    } else {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.snapButtonText = 'Oops, unSnap!';
      this.userHasSnapped = true;
    }
    
    this.snapUpdated.emit(); // Émettre l'événement pour recalculer la moyenne
  }

  isAboveAverage(snaps: number): boolean {
    return snaps > this.averageSnaps;
  }
  isEqualAverage(snaps: number): boolean {
    return snaps === this.averageSnaps;
  }

  isBelowAverage(snaps: number): boolean {
    return snaps < this.averageSnaps;
  }
}
