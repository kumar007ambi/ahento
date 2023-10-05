import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogService } from './dogs.service';

@Component({
  selector: 'app-dog-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent {
  constructor(readonly dogService:DogService){}
}
