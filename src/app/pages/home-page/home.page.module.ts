import { NgModule } from '@angular/core';
import { HomeComponent } from './home.page.component';
import { CommonModule } from '@angular/common';
import { HomePageService } from './home.page.service';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [
        HomePageService
    ]
})
export class HomeModule {}