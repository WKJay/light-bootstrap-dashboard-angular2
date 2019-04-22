import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-webst',
  templateUrl: './webst.component.html',
  styleUrls: ['./webst.component.scss']
})
export class WebstComponent implements OnInit {
  con_dis:boolean=false;
  discon_dis:boolean=true;
  
  ws_connect(){
    this.con_dis = true;
    this.discon_dis= false;
  }

  ws_disconnect(){
    this.con_dis = false;
    this.discon_dis= true;
  }

  constructor() { }

  ngOnInit() {
  }

}
