import { Component, OnInit } from '@angular/core';
import {products} from './products';

const flatten = filter => {
  const filters = filter.filters;
  if (filters) {
    return filters.reduce((acc, curr) => acc.concat(curr.filters ? flatten(curr) : [curr]), []);
  }
  return [];
};

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  public gridData: any[] = products;

  constructor() { }

  ngOnInit() {
  }
  onProductIdSearch(e) {
  }
  public addHandler() {
  }
  public editClick({sender, dataItem, rowIndex, isEdited}: any): void {
  }
}
