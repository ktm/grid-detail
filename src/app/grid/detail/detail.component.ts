import {Component, Input} from '@angular/core';

import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-detail-component',
  templateUrl: './detail.component.html'
})
export class DetailComponent {
  @Input() itemId;

  public model: any;
  constructor(public activeModal: NgbActiveModal) {}

  public onSave() {
    console.log('SAVE!!!');
    this.activeModal.close();
  }
}
