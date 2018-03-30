import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { DetailComponent } from './grid/detail/detail.component';


@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
