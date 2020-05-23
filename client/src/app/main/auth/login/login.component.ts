import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup
  email = new FormControl('', [Validators.required, Validators.email]);
  constructor(private _fb: FormBuilder, private userService: UserService,private _snackBar: MatSnackBar) { }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  openSnackBar() {
    this._snackBar.open('Your details are submitted successfully','X',{
      duration:2000
    })
  }
  ngOnInit() {
    this.loginFormGroup = this._fb.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.compose([Validators.required, Validators.maxLength(100), Validators.minLength(3)])]
    })

  }
  submit() {
    if(this.loginFormGroup.valid){
      this.userService.loginUser(this.loginFormGroup.value).subscribe(
        (msg) => {
          this.openSnackBar()
          this.loginFormGroup.reset();
        }, (err) => {
          console.log(err);
        })
    }else{

    }
  }
}