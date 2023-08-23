import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Post } from '../httpRequest/posts.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  error = new Subject<string>();
  constructor(private http: HttpClient) {}

  createAndStorePosts(title: string, content: string) {
    // Send Http request
    const postData: Post = { title: title, content: content };
    this.http
      .post<{ name: string }>(
        'https://ng-complete-guide-ebb66-default-rtdb.firebaseio.com/posts.json',
        postData
      )
      .subscribe(
        (responceData) => {
          console.log(responceData);
        },
        (error) => {
          this.error.next(error.message);
        }
      );
  }
  fetchPosts() {
    return this.http
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
      );
  }
  deletePosts() {
    return this.http.delete(
      'https://ng-complete-guide-ebb66-default-rtdb.firebaseio.com/posts.json'
    );
  }
}
