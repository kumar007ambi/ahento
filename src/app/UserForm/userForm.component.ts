import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'userForm-app',
  templateUrl: './userForm.component.html',
  // styleUrls: ['./app.component.css']
})
export class UserFormComponent {
  onSubmit() {
    console.log('Submitted');
  }
}
