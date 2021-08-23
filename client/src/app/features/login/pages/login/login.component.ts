import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';
import { TokenStorageService } from '../../../../core/services/token-storage.service';

@Component({
  selector: 'steam-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public isLoggedIn = false;
  public isLoginFailed = false;
  public errorMessage = '';
  public constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router
    ) { }

  public ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.redirect();
    }
    this.initForm();
  }

  private initForm() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12),
      ]),
    });
  }

  public submit(): void {
    console.log(this.loginForm.value);
    const { email, password } = this.loginForm.value;
    this.authService.login(email, password).subscribe(
      data => {
        console.log(data);
        this.tokenStorage.saveToken(data.jwt_token);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.reloadPage();
      },
      err => {
        console.log(err);
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  private reloadPage(): void {
    window.location.reload();
  }

  private redirect(): void {
    this.router.navigate(['/games']);
  }

}
