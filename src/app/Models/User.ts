export class User {
    idUser!: number;
    username: string;
    password: string;
    resetPasswordToken!: string;
    firstName!: string;
    lastName!: string;
    email: string;
    gender!: Gender;
    occupation!: string;
    active: number = 0;
    phone!: string;
    birthDate!: Date;
    address!: string;
    registrationDate!: Date;
    numberOfSignal!: number;
    roles: Set<Role> = new Set<Role>();
    chatMessageSet: Set<ChatMessage> = new Set<ChatMessage>();
    events!: Event[];
    eventInterested: Set<Event> = new Set<Event>();
    eventsParticipating: Set<Event> = new Set<Event>();
    interests: string[] = [];
    constructor(username: string, email: string, password: string) {
      this.username = username;
      this.email = email;
      this.password = password;
    }
  }
  
  export enum Gender {
    MALE = 'MALE',
    FEMALE = 'FEMALE'
  }
  
  export class Role {
    id: number;
    name: string;
    constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
    }
  }
  
  export class ChatMessage {
    id!: number;
    message!: string;
  }
  
  
  