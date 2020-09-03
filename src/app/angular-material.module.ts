import { NgModule } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatInputModule} from '@angular/material/input';

@NgModule({
    exports: [
        MatExpansionModule,
        MatProgressSpinnerModule,
        MatInputModule
    ]
})
export class AngularMaterialModule {}