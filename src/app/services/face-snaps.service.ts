import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";

@Injectable({
    providedIn: 'root'
})


export class FaceSnapsService {
    private faceSnaps: FaceSnap[] = [
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
          ).withLocation('à la montagne'),
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
          ).withLocation('dans la forêt'),
          new FaceSnap(
            'Montagne enneigée',
            'La beauté de l\'hiver en altitude.',
            'https://tse4.mm.bing.net/th?id=OIP.-cTsD9AdrL7CAu9fT2ZZywHaEo&pid=Api',
            new Date(),
            78
          ).withLocation('au sommet'),
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
          ),
          new FaceSnap(
            'Cascade secrète',
            'Un endroit caché au milieu de la jungle.',
            'https://tse3.mm.bing.net/th?id=OIP.LQbN9QJd8GnN3pHOVJGzNAHaEo&pid=Api',
            new Date(),
            95
          ).withLocation('près de la cascade'),
          new FaceSnap(
            'Chemin de randonnée',
            'Un sentier paisible en pleine nature.',
            'https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_1280.jpg',
            new Date(),
            40
          ),
          new FaceSnap(
            'Dunes du désert',
            'Un paysage doré à perte de vue.',
            'https://tse2.mm.bing.net/th?id=OIP.3g6T_MR9xLXpl7Q6j7VCZgHaEo&pid=Api',
            new Date(),
            55
          ),
          new FaceSnap(
            'Village enneigé',
            'Un décor hivernal digne d’un conte de fées.',
            'https://tse1.mm.bing.net/th?id=OIP.c-TiQEV7WY7lTtdt-5T9WQHaEo&pid=Api',
            new Date(),
            110
          ).withLocation('dans le désert'),
          new FaceSnap(
            'Voilier en mer',
            'Naviguer sur des eaux calmes.',
            'https://tse4.mm.bing.net/th?id=OIP.lMcO5mYScReSwX9E-TPQogHaEo&pid=Api',
            new Date(),
            80
          ),
          new FaceSnap(
            'Lac miroir',
            'Un lac si calme qu’il reflète le ciel.',
            'https://tse3.mm.bing.net/th?id=OIP.5uQiwSEUoFykh6SpuERxGAHaEK&pid=Api',
            new Date(),
            65
          ).withLocation('sur un lac'),
          new FaceSnap(
            'Cabane dans les arbres',
            'Un refuge parfait en pleine nature.',
            'https://tse2.mm.bing.net/th?id=OIP.A8qTmsjRTz3dXyxqzF1YrwHaE8&pid=Api',
            new Date(),
            105
          )
        ];

        getFaceSnaps(): FaceSnap[] {
            return [...this.faceSnaps];
        }
        calculateAverageSnaps(): number {
            if (this.faceSnaps.length > 0) {
                const totalSnaps = this.faceSnaps.reduce((total, snap) => total + snap.snaps, 0);
                return totalSnaps / this.faceSnaps.length;
            } else {
                return 0;
            }
        }
}


