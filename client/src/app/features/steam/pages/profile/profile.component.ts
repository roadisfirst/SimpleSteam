import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../../models';
import { ProfileService } from '../../../../core/services/profile.service';

@Component({
  selector: 'steam-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public profileForm: FormGroup;
  public user: User;
  public constructor(
    private profileService: ProfileService,
    private readonly activatedRoute: ActivatedRoute,
    ) { }

  public ngOnInit(): void {
    this.user = this.activatedRoute.snapshot.data.profile.user;
    this.initForm();
  }

  public submit(): void {
    const {username, email, age} = this.profileForm.value;
    this.profileService.updateUserDetails(username, email, age).subscribe();
  }

  private initForm() {
    const agePattern = /^(?!0)\d{1,2}$/;
    this.profileForm = new FormGroup({
      username: new FormControl(this.user.username, [
        Validators.required,
      ]),
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.email,
      ]),
      age: new FormControl(this.user.age, [
        Validators.required,
        Validators.pattern(agePattern),
      ]),
    });
  }
}
