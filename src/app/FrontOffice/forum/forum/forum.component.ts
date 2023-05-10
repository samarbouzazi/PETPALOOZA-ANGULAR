
// forum.component.ts
import { Component, OnInit } from '@angular/core';
import { ForumService } from 'src/app/services/forum/forum.service';
import { NgForm } from '@angular/forms';

import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})

  
export class ForumComponent implements OnInit  {
  formData = {
    question: ''
  };
  question: any;

  id!:number;

    description!:String ;
     createdDate!:Date;
  constructor(private forumService: ForumService,private router:ActivatedRoute, private route: Router) {}
 
  
  onSubmit(myForm: NgForm) {
    console.log(myForm.value);
    this.forumService.addquestion(myForm.value)
      .subscribe(res => {
        console.log(res);
      });
  }

  
  ngOnInit(): void {
    
    this.forumService.getQuestions().subscribe(data => {
      this.question = data;
      
    });
    console.log(this.question);
  
  }

  Sumbit(myform:any){

   
  
    this.forumService.addanswer(myform.value).subscribe(res=>console.log(res))
    
  
  
  }
 


 

}