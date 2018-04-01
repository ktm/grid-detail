import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {GridComponent} from './grid/grid.component';
import {DetailComponent} from './grid/detail/detail.component';

const routes: Routes = [
  { path: 'grid', component: GridComponent },
  { path: 'grid/detail', component: DetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes), CommonModule ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule {}
