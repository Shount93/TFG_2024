import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Clothe_item } from '../interfaces/Clothe_item.interface';
import { environments } from 'src/environments/environments';
import { Clothe_type } from '../interfaces/Clothe_type.iterface';
import { Clothe_brand } from '../interfaces/Clothe_brand.interface';

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

    addClothes(Clothe_item: Clothe_item): Observable<Clothe_item>{
        Clothe_item.id = Math.floor(1000 + Math.random() * 9000).toString();
        return this.http.post<Clothe_item>(`${this.baseUrl}/Prendas`, Clothe_item)
    }

    updateClothes(Clothe_item: Clothe_item): Observable<Clothe_item>{
        if (!Clothe_item.id) throw Error('Clothe id is requiered')

        return this.http.patch<Clothe_item>(`${this.baseUrl}/Prendas/${Clothe_item.id}`, Clothe_item)
    }

    deleteClothes(id: string): Observable<boolean>{
        return this.http.delete<Clothe_item>(`${this.baseUrl}/Prendas/${id}`)
            .pipe(
                catchError( err => of(false)),
                map( resp => true)
            );
    }

    getClothesTypes() : Observable<Clothe_type[]>{
        return this.http.get<Clothe_type[]>(`${this.baseUrl}/Tipos`);
    }

    getClothesBrands() : Observable<Clothe_brand[]>{
        return this.http.get<Clothe_brand[]>(`${this.baseUrl}/Marcas`);
    }
    


}