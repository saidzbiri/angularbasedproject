import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

export interface FavoriteArgs {
  newValue: boolean;
}

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CourseComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('isFavorite') isSelected: boolean;
  // tslint:disable-next-line:no-output-rename
  @Output('changed') changeF = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  OnClick = () => {
    this.changeF.emit({newValue: this.isSelected});
  }
}
