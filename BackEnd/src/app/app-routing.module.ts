import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEventComponent } from './component/event/create-event/create-event.component';
import { ListEventComponent } from './component/event/list-event/list-event.component';
import { UpdateEventComponent } from './component/event/update-event/update-event.component';

const routes: Routes = [

  // {path: 'fonction', component: FonctionComponent,canActivate: [AuthGuard]},
   //{path: 'register', component: UtilisateurComponent},

   {path: 'events', component: ListEventComponent},
  {path: 'create-event', component: CreateEventComponent},
  //{path: 'profil-details/:id', component: ProfilDetailsComponent, canActivate: [AuthGuard]},
  {path: 'update-event/:id', component: UpdateEventComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
