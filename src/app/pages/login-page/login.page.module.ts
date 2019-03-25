import { NgModule } from '@angular/core';
import { LoginComponent } from './login.page.component';
import { CommonModule } from '@angular/common';
import { LoginPageService } from './login.page.service';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule
    ],
    providers: [
        LoginPageService
    ]
})
export class LoginModule {}
