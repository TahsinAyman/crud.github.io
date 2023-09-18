import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AuthIntercepterService } from './services/auth-intercepter.service';
import { ServerAvailabilityInterceptorService } from './services/server-availability-interceptor.service';
import { AuthModule } from './auth/auth-module.module';
import { CommonModule } from './common/common.module';
import { PeopleModule } from './people/people.module';
import { BrowserModule } from '@angular/platform-browser';
import { UnauthorizedComponent } from './errors/unauthorized/unauthorized.component';
import { UnauthorizedInterceptorService } from './services/unauthorized-interceptor.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    UnauthorizedComponent,
  ],
  imports: [    
    AppRoutingModule,
    CommonModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthIntercepterService,
      multi: true
    },
    { 
      provide: HTTP_INTERCEPTORS,
      useClass: ServerAvailabilityInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UnauthorizedInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
