import { Component } from '@angular/core';

@Component({
  selector: 'app-page-mvtstk',
  templateUrl: './page-mvtstk.component.html',
  styleUrls: ['./page-mvtstk.component.scss']
})
export class PageMvtstkComponent {

  isExpanded = true;

  // Function to toggle the collapse state
  toggleCollapse() {
    this.isExpanded = !this.isExpanded;
  }

  // Function to determine whether the collapse is expanded or not
  isCollapseExpanded() {
    return this.isExpanded;
  }
}
