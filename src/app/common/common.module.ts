import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PopupComponent } from '../popup/popup.component';
// import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    PopupComponent
  ],
  exports: [
    PopupComponent,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule
  ],
})
export class CommonModule { }
