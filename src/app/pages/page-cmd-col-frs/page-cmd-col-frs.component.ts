import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-cmd-col-frs',
  templateUrl: './page-cmd-col-frs.component.html',
  styleUrls: ['./page-cmd-col-frs.component.scss']
})
export class PageCmdColFrsComponent {

  isExpanded2 = true;

  // Function to toggle the collapse state
  toggleCollapse() {
    this.isExpanded2 = !this.isExpanded2;
  }

  // Function to determine whether the collapse is expanded or not
  isCollapseExpanded() {
    return this.isExpanded2;
  }

}

