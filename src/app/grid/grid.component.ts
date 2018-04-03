import { Component, OnInit } from '@angular/core';
import {products} from './products';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DetailComponent} from './detail/detail.component';

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

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  onItemIdSearch(e) {
  }
  public addHandler() {
  }
  public editClick({sender, dataItem, rowIndex, isEdited}: any): void {
    console.log('edit click' + dataItem);
    this.open(dataItem);
  }

  open(arg: any) {
    const modalRef = this.modalService.open(DetailComponent);
    modalRef.componentInstance.itemId = arg.ProductId;
  }
}
