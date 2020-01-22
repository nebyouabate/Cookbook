import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cook-recipes-filter',
  templateUrl: './recipes-filter.component.html',
  styleUrls: ['./recipes-filter.component.scss']
})
export class RecipesFilterComponent implements OnInit {
  showSortingList: boolean;
  sortingProp: string;
  private _filter: string;

  constructor() { }

  ngOnInit() {
  }

  @Input() get filter() {
    return this._filter;
  }

  set filter(val: string) {
    this._filter = val;
    this.changed.emit(this.filter); //Raise changed event
  }

  @Output() changed: EventEmitter<string> = new EventEmitter<string>();
  sort(prop) {
    this.sortingProp = prop;
    this.showSortingList = false;
  }
  showHideList() {
    this.showSortingList = !this.showSortingList;
  }

}
