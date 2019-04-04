import { Component } from '@angular/core';
import { LoginPageService } from './login.page.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-log-in',
    templateUrl: './login.page.component.html',
    styleUrls: ['./login.page.component.scss']
})
export class LoginComponent {
    email: '';
    password: '';

    constructor(private loginPageService: LoginPageService,
                private router: Router) { }

    private randomize() {
        return Math.random() >= 0.5;
    }

    signIn(email: string, password: string) {
        if (this.randomize()) {
            this.loginPageService.logIn(email, password).subscribe(data => {
                localStorage.setItem('token', JSON.stringify(data));
                this.router.navigate(['/home']);
            });
        } else {
            localStorage.removeItem('token');
        }
    }
}
