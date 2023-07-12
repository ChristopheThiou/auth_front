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
  feedback = '';
  repeatPassword = '';
  isLogin = false;
  constructor(private authService:AuthService){}

  onSubmit() {
    if (this.isLogin == false) {
      this.authService.login(this.user).subscribe(() => this.feedback ='Login complete');
      return;
    }
    if (this.repeatPassword != this.user.password) {
      this.feedback = 'Password dont match'
      return;
    }
    this.authService.addUser(this.user).subscribe(() => this.feedback ='Registration complete.')
  }
  changeForm(){
    this.isLogin = !this.isLogin;
    console.log(this.isLogin);
    
  }
}
