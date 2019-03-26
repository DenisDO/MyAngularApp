import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-home-page-user-profile',
    templateUrl: 'home-page-user-profile.component.html',
    styleUrls: ['home-page-user-profile.component.scss']
})
export class HomeUserProfileComponent implements DoCheck {
    user: {};
    constructor(private route: ActivatedRoute) { }

    ngDoCheck(): void {
        this.user = this.route.snapshot.params;
    }
}
