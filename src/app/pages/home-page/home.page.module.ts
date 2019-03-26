import { NgModule } from '@angular/core';
import { HomeComponent } from './home.page.component';
import { CommonModule } from '@angular/common';
import { HomePageService } from './home.page.service';
import { MatTableModule } from '@angular/material';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        MatTableModule
    ],
    providers: [
        HomePageService
    ]
})
export class HomeModule {}
