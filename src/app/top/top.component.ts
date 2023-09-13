import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {
  // ログイン状態を判定するためのフラグ
  isLoggedIn: boolean = false;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    // コンポーネント遷移時にログイン状態を判定
    this.afAuth.onAuthStateChanged((user) => {
      this.isLoggedIn = !!user
    })
  }

  logout(): void {
    this.authService.logout()
      .then(() => this.router.navigateByUrl('/'));  // ログアウトしたらトップページへ
  }
}
