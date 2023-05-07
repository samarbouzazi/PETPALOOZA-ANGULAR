
import { User } from "./User";


export class Event {
  numEvent!: number;
  titre!: string;
  type!: string;
  description!: string;
  location!: string;
  maxParticipants!: number;
  dateDebut!: Date;
  dateFin!: Date;
  owner!: User[];
  interestedUsers!: User[];
  participants!: User[];
  image!:any;

  constructor() {
    this.owner = [];
    this.interestedUsers = [];
    this.participants = [];
  }
}
