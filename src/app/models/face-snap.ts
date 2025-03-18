import { SnapType } from "./snap-type.type";

export class FaceSnap {
    location?: string;
    id : string;

    constructor(public title: string,
                public description: string,
                public imageUrl: string,
                public createdAt: Date,
                public snaps: number) {
                  this.id = crypto.randomUUID();
                }
  
    addSnap(): void {
      this.snaps++;
    }
  
    removeSnap(): void {
      this.snaps--;
    }
    snap(snapType: SnapType) {
      if (snapType === 'snap') { // ajout d'un snap
        this.addSnap();
      } else if (snapType === 'unsnap') { // retrait d'un snap
        this.removeSnap();
      }
    }
    setLocation(location: string): void {

      this.location = location;
    }


    withLocation(location: string): FaceSnap { // fonction utiliser dans le service pour ajouter un lieu à une photo
      this.setLocation(location);
      return this;
    }

}