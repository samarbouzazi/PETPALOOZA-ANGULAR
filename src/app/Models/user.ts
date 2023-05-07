// export class User {
//   idUser!:number;
//   firstName!: string;
//   lastName !: string;
//   username  !: string;
//   email!: string;
//   birthDate  !:Date;
//   registrationDate   !: Date;
//   phone !: string;
//   occupation !: string;
//   active!: number;
//   Role!:string;
//
//
// }


export interface User {
  idUser:number;
  firstName: string;
  lastName : string;
  username  : string;
  email: string;
  birthDate  :Date;
  registrationDate  : Date;
  phone : string;
  occupation : string;
  active : number;
  role :string [];
  numberOfSignal: number;
  address:string;
  userRole?: string;

}
