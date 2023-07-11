import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../entities';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  user: User = { email: '', password: '', role: '' };
  error = '';
  constructor(private service: AuthService) {}

  onSubmitFail(){
    this.error = 'Errors';
  }
  onSubmit(user: User) {
    this.service.addUser(user).subscribe({error: () => this.onSubmitFail()});
  }
}
