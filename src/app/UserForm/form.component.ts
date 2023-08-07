import { Component } from '@angular/core';

@Component({
  selector: 'form-app',
  templateUrl: './form.component.html',
  // styleUrls: ['./app.component.css']
})
export class UserFormComponent {
  onSubmit() {
    console.log('Form');
  }
}
