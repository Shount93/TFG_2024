import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from 'src/environments/environments';
import { User } from '../interfaces/user.inteface';
import { Observable, tap } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService {

    private baseUrl = environments.baseUrl;
    private user?: User;
    private availabeUsers: User[]= [];

    constructor(private http: HttpClient) { }

    get currentUser(): User|undefined {
        if(!this.user) return undefined;
        return structuredClone(this.user);
    }
    
    login(user: string, password:string) {
        // Usamos 'some' para verificar si existe al menos un elemento que coincida
        const found = this.availabeUsers.some(element => {
            if (element.user == user && element.password == password) {
                this.user = element;
                return true;
            }
            return false;
        });
        return found;
    }

    userList():Observable<User[]>{
        return this.http.get<User[]>(`${this.baseUrl}/users`)
            .pipe(
                tap( users => this.availabeUsers = users)
            );
    }
    
}