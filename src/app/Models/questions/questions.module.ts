import { NgModule,NO_ERRORS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
 
})
export class QuestionsModule {
  id!:number;

    question_description!:String ;
 }
