import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { USERS_BASE_API_URL } from '../../shared/config';
import { ILogInResponse } from 'src/app/shared/interfaces/login-response.inteface';

@Injectable()
export class LoginPageService {
    constructor(private http: HttpClient) {}

    logIn(email: string, password: string): Observable<ILogInResponse> {
        const requestBody = {
            email,
            password
        };

        return this.http.post<ILogInResponse>(`${USERS_BASE_API_URL}/login`, requestBody);
    }
}
