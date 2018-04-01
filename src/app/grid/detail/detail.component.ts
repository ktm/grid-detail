import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../model/user';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';
import { UserService } from '../../service/user.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.scss']
})
export class UserEditorComponent implements OnInit {
  public active = false;
  selectedUser: User;
//  disallowLoadOrderWithIgnoreUser = false;

  @Input() public isNew = false;

  @Input()
  public set model(user: User) {
    if (user) {
      console.log(user)
      this.selectedUser = user;
//      this.disallowLoadOrderWithIgnoreUser = this.selectedUser.disallowLoadOrderWithIgnoreUser;
      this.active = user !== undefined;
    }
  }

  public onSave(e): void {
    e.preventDefault();
    if (this.isNew) {
    } else {
      this.service.updateUser(this.selectedUser)
        .subscribe(user => {
          this.closeForm();
        });
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
    private service: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      if (id !== 'new') {
        this.service.getUser(id)
          .subscribe(user => {
            this.model = user;
          });
      } else {
        this.model = new User();
        this.isNew = true;
      }
    }
  }
}
