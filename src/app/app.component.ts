import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FaceSnapComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  faceSnaps!: FaceSnap[];

  ngOnInit(): void {
    this.faceSnaps = [
      new FaceSnap(
        'archibald',
        'Mon meilleur ami depuis toujours !',
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        new Date(),
        10
      ),
      new FaceSnap(
        'Three Rock Mountain',
        'Un endroit magnifique pour les randonnées.',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
        new Date(),
        6
      ),
      new FaceSnap(
        'Un bon repas',
        'Mmmh que c\'est bon !',
        'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
        new Date(),
        156
      ),
      new FaceSnap(
        'Coucher de soleil sur la plage',
        'Un moment de détente absolu.',
        'https://cdn.pixabay.com/photo/2017/01/20/00/30/beach-1993706_1280.jpg',
        new Date(),
        89
      ),
      new FaceSnap(
        'Le chat curieux',
        'Il explore toujours de nouveaux endroits.',
        'https://tse4.mm.bing.net/th?id=OIP._dfDNmERNB2rpiu8rC8x6AHaHa&pid=Api',
        new Date(),
        45
      ),
      new FaceSnap(
        'Montagne enneigée',
        'La beauté de l\'hiver en altitude.',
        'https://tse4.mm.bing.net/th?id=OIP.-cTsD9AdrL7CAu9fT2ZZywHaEo&pid=Api',
        new Date(),
        78
      ),
      new FaceSnap(
        'Forêt enchantée',
        'Un lieu magique pour une balade.',
        'https://tse1.mm.bing.net/th?id=OIP.FndYsnM5RTGZLy5Z8fcM0gHaHa&pid=Api',
        new Date(),
        120
      ),
      new FaceSnap(
        'Un bon café',
        'Parfait pour commencer la journée.',
        'https://tse4.mm.bing.net/th?id=OIP.9yChBM360dl2DF5RJfbFtQHaEb&pid=Api',
        new Date(),
        33
      ),
      new FaceSnap(
        'Château mystérieux',
        'Une architecture fascinante.',
        'https://tse2.mm.bing.net/th?id=OIP.u0Hn_zpDCCFAXVD-VYFNjAHaEA&pid=Api',
        new Date(),
        61
      ),
      new FaceSnap(
        'Bibliothèque ancienne',
        'Un paradis pour les amoureux des livres.',
        'https://tse1.mm.bing.net/th?id=OIP.WsPCc9m_ZeGRt6fHLW3SdwHaEg&pid=Api',
        new Date(),
        98
      ),
      new FaceSnap(
        'Feu de camp',
        'Ambiance chaleureuse sous les étoiles.',
        'https://tse2.mm.bing.net/th?id=OIP.qk2ys1h3j5myh1gG9djgXgHaFj&pid=Api',
        new Date(),
        72
      ),
      new FaceSnap(
        'Lever de soleil en montagne',
        'Un spectacle inoubliable.',
        'https://tse3.mm.bing.net/th?id=OIP.8Jl_5s_LvV8Mykj_w7ALawHaEK&pid=Api',
        new Date(),
        85
      ),
      new FaceSnap(
        'Voie lactée',
        'Le ciel étoilé est fascinant.',
        'https://tse1.mm.bing.net/th?id=OIP.tzyuq4EzG7wLDlR3nv-QigHaDq&pid=Api',
        new Date(),
        150
      )
    ];

    this.faceSnaps[1].setLocation('à la montagne');
    this.faceSnaps[5].setLocation('au sommet');
    this.faceSnaps[6].setLocation('dans la forêt');
  }
}
