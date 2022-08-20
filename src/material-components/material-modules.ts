import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatDialogModule} from '@angular/material/dialog';

@NgModule({
    exports: [
        MatMenuModule,
        MatToolbarModule,
        MatButtonModule,MatIconModule,MatDialogModule
      ]
})

export class MaterialModule{

}