import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateRoomComponent } from 'src/room/create/create-room.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-learn';
  constructor(private dialog: MatDialog){

  }
  createRoomDialog():void{
    const dialogRef = this.dialog.open(CreateRoomComponent, {
      
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
