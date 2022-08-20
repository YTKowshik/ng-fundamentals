import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';

@NgModule({
    exports: [
        MatMenuModule,
        MatToolbarModule,
        MatButtonModule,MatIconModule
      ]
})

export class MaterialModule{

}