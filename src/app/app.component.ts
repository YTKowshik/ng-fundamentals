import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
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
    const dialogOptions= new MatDialogConfig();
    dialogOptions.data={};  
    const dialogRef = this.dialog.open(CreateRoomComponent,dialogOptions);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
