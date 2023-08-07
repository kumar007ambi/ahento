import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'home-app',
  templateUrl: './home.component.html',
  // styleUrls: ['./app.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubsription!: Subscription;
  constructor() {}
  ngOnInit() {
    // this.firstObsSubsription = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });
    // const customObserbale = Observable.create(
    //   (observer: { next: (arg0: number) => void }) => {
    //     let cnt = 0;
    //     setInterval(() => {
    //       observer.next(cnt);
    //       cnt++;
    //     }, 1000);
    //   }
    // );
    // this.firstObsSubsription = customObserbale.subscribe(
    //   (data: any) => {
    //     console.log(data);
    //   },
    //   (error: any) => {
    //     console.log(error);
    //   }
    // );
  }

  ngOnDestroy(): void {
    // this.firstObsSubsription.unsubscribe();
  }
}
