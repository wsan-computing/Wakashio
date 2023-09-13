import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  // ログインしたらトップページへ
  login(form: NgForm): void {
    const { email, password } = form.value;
    this.authService.login(email, password)
      .then(() => this.router.navigateByUrl('/'));
  }
}
