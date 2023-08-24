import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';
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
        postData,
        {
          observe: 'body',
        }
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
        'https://ng-complete-guide-ebb66-default-rtdb.firebaseio.com/posts.json',
        {
          headers: new HttpHeaders({ 'Custom-header': 'Hello' }),
        }
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
        }),
        catchError((errorRes) => {
          return throwError(errorRes);
        })
      );
  }
  deletePosts() {
    return this.http
      .delete(
        'https://ng-complete-guide-ebb66-default-rtdb.firebaseio.com/posts.json',
        {
          observe: 'events',
        }
      )
      .pipe(
        tap((event) => {
          console.log(event);
          if(event.type===HttpEventType.Sent){
            
          }
          if (event.type === HttpEventType.Response) {
            console.log(event.body)
          }
        })
      );
  }
}
