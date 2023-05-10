
// forum.component.ts
import { Component, OnInit } from '@angular/core';
import { ForumService } from 'src/app/services/forum/forum.service';
import { NgForm } from '@angular/forms';
import { QuestionsModule } from 'src/app/models/questions/questions.module';
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


  constructor(private forumService: ForumService,private router:ActivatedRoute, private route: Router) {}
 
  
  onSubmit(myForm: NgForm) {
    console.log(myForm.value);
    this.forumService.addData(myForm.value)
      .subscribe(response => {
        console.log(response);
      });
  }

  
  ngOnInit(): void {
    this.forumService.getQuestions().subscribe(data => {
      this.question = data;
      
    });
    console.log(this.question);
  
  }

}