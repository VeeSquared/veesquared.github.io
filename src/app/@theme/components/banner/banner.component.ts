import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  @Input() img: string;
  @Input() colorOverlay: string;


  constructor() {     
  }

  ngOnInit(): void {
  }


}