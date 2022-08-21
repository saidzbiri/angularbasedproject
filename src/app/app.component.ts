import { Component, ViewEncapsulation } from '@angular/core';
import { FavoriteArgs } from './course/course.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';

  viewmode = 'list';
  isActive = false;
  post = {
    title: 'Title',
    isFavorite: false
  };

  courses = [
    {id: 1, name: 'math'},
    {id: 2, name: 'info'},
    {id: 3, name: 'physique'},
  ];

  onFavoriteChange(eventArgs: FavoriteArgs){
    console.log('Hi: ', eventArgs);
  }

  onAdd() {
    this.courses = [
      {id: 1, name: 'math'},
      {id: 2, name: 'info'},
      {id: 4, name: 'philosophy'},
    ];
  }


  trackCourse(index, course) {
    return course ? course.id : undefined;
  }
}
