import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from '../httpRequest/posts.model';

@Component({
  selector: 'postRequest-app',
  templateUrl: './postRequest.component.html',
  // styleUrls: ['./postRequest.component.css']
})
export class PostRequestComponent implements OnInit {
  loadedPosts: Post[] = [];
  isFetching = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPost();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.http
      .post<{ name: string }>(
        'https://ng-complete-guide-ebb66-default-rtdb.firebaseio.com/posts.json',
        postData
      )
      .subscribe((responceData) => {
        console.log(responceData);
      });
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPost();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPost() {
    this.isFetching = true;
    this.http
      .get<{ [key: string]: Post }>(
        'https://ng-complete-guide-ebb66-default-rtdb.firebaseio.com/posts.json'
      )
      .pipe(
        map((responceData) => {
          const postArray: Post[] = [];
          for (const key in responceData) {
            if (responceData.hasOwnProperty(key)) {
              postArray.push({ ...responceData[key], id: key });
            }
          }
          return postArray;
        })
      )
      .subscribe((getData) => {
        this.isFetching = false;
        this.loadedPosts = getData;
      });
  }
}
