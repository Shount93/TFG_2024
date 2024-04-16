import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Clothe_item } from '../interfaces/Clothe_item.interface';
import { environments } from 'src/environments/environments';

@Injectable({providedIn: 'root'})
export class ClothesService {

    private baseUrl: string = environments.baseUrl;

    constructor(private http: HttpClient) { }

    getClothes() : Observable<Clothe_item[]>{
        //Modificar esto para hacerlo group by usuario
        return this.http.get<Clothe_item[]>(`${this.baseUrl}/Prendas`);

    }

    getClothesById(id:string) : Observable<Clothe_item | undefined>{

        return this.http.get<Clothe_item>(`${this.baseUrl}/Prendas/${id}`)
            .pipe(
                catchError( error => of(undefined))
            );

    }
    
}