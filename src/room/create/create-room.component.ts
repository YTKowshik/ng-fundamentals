import { Component,OnInit } from '@angular/core';
import * as gv from 'src/globals';

@Component({
  selector: 'create-room',
  templateUrl: './create-room.component.html'
})
export class CreateRoomComponent {
  title = 'ng-learn';
  selectedValue='';
  globalVars:string[]=[];
constructor(){
  this.globalVars=gv.themesArr;
  this.selectedValue=gv.themesArr[0];
}
updateSelection(){
  console.log(this.selectedValue);
}
}