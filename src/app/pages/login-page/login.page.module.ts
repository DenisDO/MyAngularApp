import { NgModule } from '@angular/core';
import { LoginComponent } from './login.page.component';
import { CommonModule } from '@angular/common';
import { LoginPageService } from './login.page.service';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [
        LoginPageService
    ]
})
export class LoginModule {}
