import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-user-editor',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  public active = false;
  public selectedItem: any;

  @Input() public isNew = false;

  @Input()
  public set model(model: any) {
    if (model) {
      console.log(model)
      this.selectedItem = model;
      this.active = model !== undefined;
    }
  }

  public onSave(e): void {
    e.preventDefault();
    if (this.isNew) {
      // add
    } else {
      // update
    }
  }

  public onCancel(e): void {
    e.preventDefault();
    this.closeForm();
  }

  private closeForm(): void {
    this.active = false;
    this.router.navigate(['users']);
  }

  public onTabSelect(e) {
    console.log(e);
  }

  constructor(private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      if (id !== 'new') {
        // fetch item
      } else {
        this.model = {};
        this.isNew = true;
      }
    }
  }
}
