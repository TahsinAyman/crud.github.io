import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { AuthGuard } from './guard/auth.guard';
import { ServerOfflineComponent } from './errors/server-offline/server-offline.component';
import { UnauthorizedComponent } from './errors/unauthorized/unauthorized.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth-routing.module').then(m => m.AuthRoutingModule)
  },
  {
    path: 'people',
    loadChildren: () => import('./people/people-routing.module').then(m => m.PeopleRoutingModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'server-offline',
    component: ServerOfflineComponent
  },
  {
    path: 'unauthorized',
    component: UnauthorizedComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
