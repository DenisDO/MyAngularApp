import { Component, OnInit } from '@angular/core';
import { IUsers } from 'src/app/shared/interfaces/users.interface';
import { HomePageService } from '../home.page.service';
import { forkJoin } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home-page-users-list',
    templateUrl: './home-page-users-list.component.html',
    styleUrls: ['home-page-users-list.component.scss']
})
export class HomeUsersListComponent implements OnInit {
    usersList: IUsers[];
    columnsToDisplay = ['userID', 'userAvatar', 'userName', 'userSurname'];

    constructor(private homePageService: HomePageService, private router: Router) { }

    ngOnInit(): void {
        forkJoin(this.homePageService.getUsersList())
            .subscribe(data => {
                this.usersList = this.homePageService.formatUserData(data);
            });
    }

    showUser({ id, avatar, first_name, last_name }): void {
        this.router.navigate([`home/${id}`, {
            id,
            avatar,
            first_name,
            last_name
        }]);
    }
}
