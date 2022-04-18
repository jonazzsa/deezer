import { DataShareService } from './../../services/data-share/data-share.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'deezer-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor(private dataShareService: DataShareService) { }

  ngOnInit(): void {
  }

  menuToggler(): void{
    this.dataShareService.menuToggle();
  }

}
