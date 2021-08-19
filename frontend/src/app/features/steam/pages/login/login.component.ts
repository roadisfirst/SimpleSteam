import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { TokenStorageService } from '../../services/token-storage.service';

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
  public constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

  public ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
    //if (true) {
      this.isLoggedIn = true;
    } else {
      this.initForm();
    }
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

  public submit() {
    console.log(this.loginForm.value);
    const { email, password } = this.loginForm.value;
    this.authService.login(email, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  private reloadPage(): void {
    window.location.reload();
  }

}
