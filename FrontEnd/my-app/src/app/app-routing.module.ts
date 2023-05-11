import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayNoteComponent } from './display-note/display-note.component';
import { ListNoteComponent } from './list-note/list-note.component';

const routes: Routes = [
  { path: 'note', component: DisplayNoteComponent },
  { path: 'accueil', component: ListNoteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
