import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServerComponent } from './servers/servers.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';
import { AppRoutingModule } from './app-routing.module';
import { MyPipesComponent } from './pipes/myPipes.component';
import { ShortenPipe } from './shorten.pipe';
import { FilterPipe } from './filter.pipe';
import { PostRequestComponent } from './httpRequest/postRequest.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PostService } from './httpRequest/posts.service';
import { AuthInterceptorService } from './httpRequest/auth-interceptor.service';
import { LoggingInterceptorService } from './httpRequest/logging-interceptor.service';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServerComponent,
    PageNotFoundComponent,
    MyPipesComponent,
    ShortenPipe,
    FilterPipe,
    PostRequestComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    PostService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
