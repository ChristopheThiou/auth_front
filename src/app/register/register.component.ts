import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../entities';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  user: User = { email: '', password: '' };
  error = '';
  constructor(private service: AuthService) {}

  onSubmitFail(){
    this.error = 'Errors';
  }
  onSubmit() {
    this.service.addUser(this.user).subscribe({error: () => this.onSubmitFail()});
  }
}
