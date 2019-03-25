import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found.page.component';
import { CommonModule } from '@angular/common';
import { PageNotFoundService } from './page-not-found.page.service';

@NgModule({
    declarations: [
        PageNotFoundComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [
        PageNotFoundService
    ]
})
export class PageNotFoundModule {}
