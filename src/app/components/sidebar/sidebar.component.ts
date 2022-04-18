import { DataShareService } from './../../services/data-share/data-share.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'deezer-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  isActive: boolean = false

  constructor(private dataShareService: DataShareService) {
   
   }

  ngOnInit(): void {
   this.dataShareService.sidebarToggle.subscribe(data => {
     this.isActive = data
   })
 
  }

 

}
