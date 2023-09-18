import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleComponent } from './people.component';
import { PersonComponent } from './person/person.component';

const routes: Routes = [
  {
    path: '',
    component: PeopleComponent
  },
  {
    path: 'person/:id',
    component: PersonComponent
  },
  {
    path: 'save',
    component: PersonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
