import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';
import { User } from '../../models/User';
import { AddUser } from '../../store/users.actions';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddUserComponent {

  public userForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private store: Store
  ) { 
    this.userForm = this.fb.group({
      name: '',
      surname: '',
      age: ''
    });
  }

  public saveUser(): void {
    const user: Partial<User> = this.userForm.value;
    this.store.dispatch(new AddUser({ user }))
  }
}
