import { AdminAuthGuard } from './services/admin-auth-guard.service';
import { AuthGuard } from './services/auth-guard.service';
import { FakeBackendFactory } from './common/helpers/fake-backend';
import { OrderService } from './services/order.service';
import { AuthService } from './services/auth.service';
import { NoAccessComponent } from './no-access/no-access.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { GithubFollowersService } from './services/github-followers.service';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { HomeComponent } from './home/home.component';
import { AlbumService } from './services/album.service';
import { DataService } from './services/data.service';
import { AppErrorHandler } from './common/app-error-handler';

import { SignupFormComponent } from './signup-form/signup-form.component';
import { CoursesService } from './services/courses.service';
import { SummaryPipe } from './pipes/summary.pipe';
import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { PanelComponent } from './panel/panel.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './services/post.service';
import { AlbumComponent } from './album/album.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    SummaryPipe,
    PanelComponent,
    FavoriteComponent,
    InputFormatDirective,
    ContactFormComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    PostsComponent,
    AlbumComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent,
    NavbarComponent,
    GithubFollowersComponent,
    AdminComponent,
    LoginComponent,
    NoAccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'followers',
        component: GithubFollowersComponent
      },
      {
        path: 'followers/:userId/:username',
        component: GithubProfileComponent
      },
      {
        path: 'posts',
        component: PostsComponent
      },
      {
        path: 'admin',
        component: AdminComponent,
        canActivate: [
          AuthGuard,
          AdminAuthGuard
        ]
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'no-access',
        component: NoAccessComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      },
    ])
  ],
  providers: [
    CoursesService,
    PostService,
    {
      provide: ErrorHandler,
      useClass: AppErrorHandler
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FakeBackendFactory,
      multi: true
    },
    DataService,
    AlbumService,
    GithubFollowersService,
    AuthService,
    OrderService,
    AuthGuard,
    AdminAuthGuard

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
