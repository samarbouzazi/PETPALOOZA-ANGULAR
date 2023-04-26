export class Event {
    


    
    numEvent:number=1;

    titre: String = "";

   
    type: String='';

    description:String='' ;

    location:String='';

    maxParticipants: number=1;

    
    dateDebut:Date=new Date();

    dateFin:Date=new Date();;

    //User owner;


    
    // private Set<User> interestedUsers: User ;

    // @ManyToMany()
    // @JsonIgnore
    // private Set<User> participants ;


    // @OneToOne
    // private ImageEvent imageEvent;
  
  }