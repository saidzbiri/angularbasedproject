import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  isSelected = true;
  nbOfStars = 5;
  Arr = Array;
  starArray = [false, false, false, false, false];
  constructor() { }

  ngOnInit(): void {
  }

  onClick = (index) => {
    console.log(index);
    this.starArray = [false, false, false, false, false];
    for (let i = 0; i <= index; i++) {
      this.starArray[i] = true;
    }
  }

  onAdd = () => {
    this.isSelected = !this.isSelected;
  }

}
