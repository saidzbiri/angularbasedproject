
import { Component, OnInit } from '@angular/core';
import { InvokeFunctionExpr } from '@angular/compiler';
import { CoursesService } from './services/courses.service';

@Component({
  selector: 'app-courses',
  template: `
  <h1 class="text-success">Courses</h1>
  <h1 [class]="textInfo" [textContent]="title"></h1>
  <h1 class="m-3" [class.text-danger]="true" [textContent]="title"></h1>
  <button class="btn" [style.backgroundColor]= "isActive ? 'red' : 'yellow'" (click)="onSave($event)">
    Save
  </button>
  <br>
  <!-- <input #firstname (keyup.enter)="onKeyUp(firstname.value)"/><br><br>
  <input [(ngModel)]="lastname" (keyup.enter)="onKeyDown()"/> -->

    <ul>
      <li *ngFor="let course of courses">{{ course | uppercase}}</li>
    </ul>
    <!-- <img src="{{ imageUrl }}"/>
    <img [src]="imageUrl"/> -->
   <!--  <table>
        <tr>
           <td [attr.colspan]="colSpan"></td>
        </tr>
    </table> -->
  <p [textContent]="students | number"></p>
  <p [textContent]="students | currency:'AUD':true"></p>
  <p [textContent]="releaseDate | date:'fullDate'"></p>
  <p [textContent]="text | summary:'20':'false' "></p>




  `
})
export class CoursesComponent implements OnInit{
  title = 'List of courses';
  imageUrl = 'https://picsum.photos/536/354';
  courses;
  colSpan = 2;
  textInfo;
  isActive = true;
  lastname = 'ZBIRI';
  students = 30123;
  releaseDate = new Date(2022, 8, 15);
  text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tortor nisi, pharetra eu tempor eu, vehicula sit amet nisi. Fusce dignissim interdum laoreet. Nulla hendrerit sed elit a efficitur';

  constructor(coursesService: CoursesService) {
    this.courses = coursesService.getCourses();
  }

  ngOnInit(): void {
    this.getTitleColor();
  }

  getTitle(): string {
    return this.title;
  }

  onKeyUp(firstname) {
    console.log('ENTER was pressed');
    console.log(this.lastname);
  }
  onKeyDown() {
    console.log('ENTER was pressed');
    console.log(this.lastname);
  }
  getTitleColor() {
    console.log(Math.random() < 0.5);
    if (Math.random() < 0.5) {
      this.textInfo = 'text-info';
    } else {
      this.textInfo = 'text-warning';
    }

  }


  onSave($event) {
    this.isActive = !this.isActive;
    console.log($event);
  }
}
