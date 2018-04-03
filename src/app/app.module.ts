import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbActiveModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { DetailComponent } from './grid/detail/detail.component';
import { AppRoutingModule } from './app-routing.module';
import {GridModule} from '@progress/kendo-angular-grid';


@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridModule,
    NgbModule.forRoot(),
  ],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
