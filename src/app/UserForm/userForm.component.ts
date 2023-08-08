import { Component } from '@angular/core';

@Component({
  selector: 'userForm-app',
  templateUrl: './userForm.component.html',
  // styleUrls: ['./app.component.css']
})
export class UserFormComponent {
  onSubmit() {
    console.log('Form');
  }
}
