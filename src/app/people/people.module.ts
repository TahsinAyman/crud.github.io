import { NgModule } from '@angular/core';
import { PeopleComponent } from './people.component';
import { PersonComponent } from './person/person.component';
import { CommonModule } from '../common/common.module';
import { PeopleRoutingModule } from './people-routing.module';



@NgModule({
  declarations: [
    PeopleComponent,
    PersonComponent
  ],
  imports: [
    PeopleRoutingModule,
    CommonModule
  ],
})
export class PeopleModule { }
