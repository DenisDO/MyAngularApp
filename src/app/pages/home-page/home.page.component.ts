import { Component, OnInit } from '@angular/core';
import { IUsers } from 'src/app/shared/interfaces/users.interface';
import { HomePageService } from './home.page.service';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';

@Component({
    selector: 'app-home-page',
    templateUrl: './home.page.component.html',
    styleUrls: ['home.page.component.scss']
})
export class HomeComponent implements OnInit {
    usersList: IUsers[];
    columnsToDisplay = ['userID', 'userAvatar', 'userName', 'userSurname'];

    constructor(private homePageService: HomePageService, private router: Router) { }

    ngOnInit(): void {
        forkJoin(this.homePageService.getUsersList())
            .subscribe(data => {
                this.usersList = this.homePageService.formatUserData(data);
            });
    }

    logOut(): void {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
    }
}
