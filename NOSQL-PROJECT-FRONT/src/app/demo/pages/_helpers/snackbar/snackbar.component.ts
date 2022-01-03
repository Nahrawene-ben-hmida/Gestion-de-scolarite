import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {
  @Input() public show = true;
  @Input() public  message: string = 'THis is snackbar';
  @Input() public type: string = 'success';
  constructor() { }

  ngOnInit() {
    console.log(this.type);
  }

}
