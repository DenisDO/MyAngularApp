import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-log-in',
    templateUrl: './login.page.component.html',
    styleUrls: ['./login.page.component.scss']
})
export class LoginComponent implements OnInit {
    users: any = [1, 2, 3];

    constructor() {}

    ngOnInit() {}
}
