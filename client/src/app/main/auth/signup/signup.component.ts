import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service'
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  data:'Your details are submitted successfully';
  firstFormGroup: FormGroup;
  email_pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  constructor(private _formBuilder: FormBuilder, private userService: UserService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      user_name: ['', Validators.required],
      first_name: ['', Validators.compose([Validators.required, Validators.maxLength(100), Validators.minLength(3)])],
      last_name: ['', Validators.compose([Validators.required, Validators.maxLength(100), Validators.minLength(3)])],
      email: ['', Validators.compose([
        Validators.required, Validators.pattern(this.email_pattern)
      ])],
      password: ['', Validators.compose([Validators.required, Validators.maxLength(100), Validators.minLength(3)])]
    });
  }
  openSnackBar() {
    this._snackBar.open('Your details are submitted successfully','X',{
      duration:2000
    })
  }
  submit() {
    if (this.firstFormGroup.valid) {
      this.userService.createUser(this.firstFormGroup.value).subscribe(
        (msg) => {
          this.openSnackBar()
          this.firstFormGroup.reset();
        }, (err) => {
          console.log(err);
        })
    } else {
      (err) => {
        console.log(err)
      }
    }

  }
}