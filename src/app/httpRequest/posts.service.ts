import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../httpRequest/posts.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  createAndStorePosts(title: string, content: string) {
    // Send Http request
    const postData: Post = { title: title, content: content };
    this.http
      .post<{ name: string }>(
        'https://ng-complete-guide-ebb66-default-rtdb.firebaseio.com/posts.json',
        postData
      )
      .subscribe((responceData) => {
        console.log(responceData);
      });
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
