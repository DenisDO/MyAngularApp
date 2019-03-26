import { Injectable } from '@angular/core';
import { IUsers } from 'src/app/shared/interfaces/users.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { USERS_BASE_API_URL } from '../../shared/config';

@Injectable()
export class HomePageService {
    constructor(private http: HttpClient) {}

    getUsersList(): Observable<IUsers>[] {
        const pages: number[] = [1, 2, 3, 4];

        return pages.map<Observable<IUsers>>(page => this.http.get<IUsers>(`${USERS_BASE_API_URL}/users?page=${page}`));
    }

    formatUserData(data): [] {
        return data.map(user => user.data).flat();
    }
}
