import { Component, OnInit } from '@angular/core';
import { IHero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[HeroService]
})
export class HomeComponent implements OnInit {

  pageTitle = 'Bienvenue à la base des Héros !';
  pageSubTitle = '~ Nos héros disponibles ~';
  heroheight = 175;
  heroWidth = 150;
  heroes: IHero[] = [];
  errorMessage;
  constructor(private _heroService : HeroService) { }

  ngOnInit() {
    this._heroService.getHeroes()
    .subscribe(
      heroes => this.heroes = heroes,
      err => this.errorMessage = <any>err
      );        
  }

}
