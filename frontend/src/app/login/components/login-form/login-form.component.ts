import { Component, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { UserCredentials } from '../../model/user-credentials';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule,MatFormFieldModule, MatInputModule,MatButtonModule],
})
export class LoginFormComponent {
  loginForm = this.fb.group({
    username: '',
    password: '',
  });


  login = output<UserCredentials>();

  constructor(private fb: FormBuilder) {}

  onLogin() {
    // Définir la regex pour au moins un caractère non blanc
    const regex = /[^\s]+/;
  
    // Récupérer les valeurs des champs avec vérification de leur existence
    const user = this.loginForm.get('username')?.value?.trim() ?? '';
    const pass = this.loginForm.get('password')?.value?.trim() ?? '';
    
    console.log(user);
    console.log(pass);
  
    // Valider les valeurs avec la regex
    if (regex.test(user) && regex.test(pass)) {
      // Émettre les données si les valeurs sont valides
      const credentials: UserCredentials = { username: user, password: pass };
      this.login.emit(credentials);
    } else {
      // Gérer le cas où les données ne sont pas valides
      console.error('Les identifiants fournis ne sont pas valides.');
    }
  }

}
