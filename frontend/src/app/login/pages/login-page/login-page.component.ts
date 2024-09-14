import { Component } from '@angular/core';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { UserCredentials } from '../../model/user-credentials';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  standalone: true,
  imports: [LoginFormComponent],
})
export class LoginPageComponent {

  constructor(private authentificationService:AuthenticationService){}


  onLogin(userCredentials: UserCredentials) {
    console.log('la fonction de reception de evenement fonctionne');
    this.authentificationService.login(userCredentials);  }
}
