import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../entities';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  user:User = {email: '', password: '', role: '' }
  constructor(private service: AuthService) {}

  onSubmit(user: User) {
    this.service.addUser(user).subscribe(data => this.user);
  }
}
