import { NgModule } from '@angular/core';
import { HomeComponent } from './home.page.component';
import { CommonModule } from '@angular/common';
import { HomePageService } from './home.page.service';
import { MatTableModule } from '@angular/material';
import { HomeUsersListComponent } from './home-page-users-list/home-page-users-list.component';
import { HomeUserProfileComponent } from './home-page-user-profile/home-page-user-profile.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
    declarations: [
        HomeComponent,
        HomeUsersListComponent,
        HomeUserProfileComponent
    ],
    imports: [
        CommonModule,
        MatTableModule,
        AppRoutingModule
    ],
    providers: [
        HomePageService
    ]
})
export class HomeModule {}
