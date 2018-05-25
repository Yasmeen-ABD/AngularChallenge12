import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IHero } from "./hero";

@Injectable()
export class HeroService{
    private _heroURL = './assets/heroes.json';

    constructor(private _http :HttpClient){}
    getHeroes(): Observable<any>{
        return this._http.get<IHero[]>(this._heroURL);
    }
}
