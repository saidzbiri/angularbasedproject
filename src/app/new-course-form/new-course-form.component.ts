import { FormArray, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {
  form;
  /* form = new FormGroup({
      name: new FormControl('', Validators.required),
      contact: new FormGroup({
        email: new FormControl(),
        phone: new FormControl()
      }),
      topics: new FormArray([])
  }); */

  constructor(fb: FormBuilder){
    this.form = fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email: [],
        phone: []
      }),
      topics: fb.array([])
    });
  }

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }

  onRemoveTopic = (topic: FormControl) => {
    const index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  get topics() {
   // return this.form.get('topics') as FormArray;
    return this.form.controls['topics'] as FormArray;
  }

  get name() {
    return this.form.get('name');
  }

}
