import { HttpClient } from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  form: FormGroup;
  isLoading: boolean;
  branches = ['CSE', 'CS&IT', 'IT', 'CS', 'ECE', 'EN', 'EI', 'ME', 'CE'];
  name: FormControl;
  email: FormControl;
  phone_no: FormControl;
  skills: FormControl;
  branch: FormControl;
  student_no: FormControl;
  roll_no: FormControl;
  gender: FormControl;
  domain: FormControl;

  constructor(private _snackBar: MatSnackBar, private router: Router, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.name = new FormControl(null, [Validators.required]);
    this.email = new FormControl(null, [Validators.required, Validators.email]);
    this.phone_no = new FormControl(null, [Validators.required, Validators.pattern(`^[0-9]*$`)]);
    this.skills = new FormControl(null, [Validators.required]);
    this.branch = new FormControl(null, [Validators.required]);
    this.student_no = new FormControl(1810171);
    this.roll_no = new FormControl(null, [Validators.required, Validators.pattern(`^[0-9]*$`)]);
    this.gender = new FormControl('male');
    this.domain = new FormControl('nothing');
    this.form = new FormGroup({
      name: this.name,
      email: this.email,
      phone_no: this.phone_no,
      skills: this.skills,
      branch: this.branch,
      student_no: this.student_no,
      roll_no: this.roll_no,
      domain: this.domain,
      gender: this.gender,
    });
  }

  handleReset() {
    console.log('Reset');
  }

  handleExpire() {
    console.log('Expire');
  }

  handleLoad() {
    console.log('Load');
  }

  handleSuccess(event) {
    console.log('Success');
  }

  submit() {
    console.log(this.form.value);
    this.isLoading = true;
    this.http.post('https://sae-registration.herokuapp.com/register', this.form.value).subscribe((res) => {
        console.log(res);
        this._snackBar.open('Successfully Registered', 'Close', {
        duration: 2000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
        panelClass: ['success']
      });
        this.isLoading = false;
        this.form.reset();
    }, err => {
              this._snackBar.open('Something went wrong! Please try again', 'Close', {
        duration: 2000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
        panelClass: ['error']
      });
      this.isLoading = false;
      console.log(err);
    })
    // this.registerService.register(this.form.value).subscribe((res) => {
    //   this._snackBar.open('Successfully Registered', 'Close', {
    //     duration: 2000,
    //     horizontalPosition: 'center',
    //     verticalPosition: 'top',
    //     panelClass: ['success']
    //   });
    //   this.isLoading = false;
    //   this.router.navigateByUrl('/thankyou');
    //   this.form.reset();
    //   console.log(res);
    // }, error => {
    //   this._snackBar.open('Something went wrong! Please try again', 'Close', {
    //     duration: 2000,
    //     horizontalPosition: 'center',
    //     verticalPosition: 'bottom',
    //     panelClass: ['error']
    //   });
    //   this.isLoading = false;
    //   console.log(error);
    // });
  }
}