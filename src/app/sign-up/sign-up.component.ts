import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  // 登録後はTOPページへ遷移
  signup(form: NgForm): void {
    const { email, password } = form.value;
    this.authService.createUser(email, password)
      .then(() => this.router.navigateByUrl('/'));
  }
}
