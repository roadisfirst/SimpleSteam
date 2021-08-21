import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models';
import { ProfileService } from '../../services/profile.service';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'steam-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public currentUser: User | undefined;
  public profileForm: FormGroup;
  public constructor(
    private tokenStorage: TokenStorageService,
    private profileService: ProfileService,
    private readonly activatedRoute: ActivatedRoute
    ) { }

  public ngOnInit(): void {
    this.currentUser = this.tokenStorage.getUser();
    this.initForm();
    //this.currentUser = this.authService.getUserDetails();
    // this.profileForm.setValue({
    //   username: this.userDetails.username,
    //   email: this.userDetails.email,
    //   age: this.userDetails.age
    // });
  }

  public submit() {
    console.log(this.profileForm.value);
  }

  private initForm() {
    const agePattern = /^(?!0)\d{1,2}$/;
    this.profileForm = new FormGroup({
      username: new FormControl(null, [
        Validators.required,
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
      ]),
      age: new FormControl(null, [
        Validators.required,
        Validators.pattern(agePattern),
      ]),
    });
  }

}
