import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from 'src/environments/environments';
import { User } from '../interfaces/user.inteface';
import { Observable, catchError, map, of, tap } from 'rxjs';

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

    addUser( user: User):Observable<User>{
        return this.http.post<User>(`${this.baseUrl}/users`,user);
    }

    login(user: string, password:string) {
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

    checkAuthentication():Observable<boolean>{

        if(!localStorage.getItem('Token')) return of(false);
        
        const token = localStorage.getItem('Token');
        
        return this.http.get<User>(`${this.baseUrl}/users/1`)
            .pipe(
                tap( user => this.user = user),
                map( user => !!user),
                catchError(error => of(false))
            );

    }

    otherLogin(user:string, password:string):Observable<User>{

        return this.http.get<User>(`${this.baseUrl}/users/1`)
            .pipe(
                tap( user => this.user = user),
                tap( user => localStorage.setItem('Token',user.Email))
            );

    }

    otherLogout(){
        this.user=undefined;
        localStorage.clear();
    }
    
}