import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'reactiveForm-app',
  templateUrl: './reactiveForm.component.html',
  // styleUrls: ['./app.component.css']
})
export class ReactiveFormComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup | undefined;
  // name = new FormControl('');
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
  ngOnInit() {
    // this.signupForm = new FormGroup({
    //   username: new FormControl(null),
    //   email: new FormControl(null),
    //   gender: new FormControl('male'),
    // });
  }
  // signup() {
  //console.log(this.signupForm.value);
  //}
}
