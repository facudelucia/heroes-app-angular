import { HeroesService } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {


  termino: string = ""
  heroes: Heroe[] = []
  heroeSeleccionado!: Heroe
  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
  }
  buscando() {
    this.heroesService.getSugerencias(this.termino)
      .subscribe(heroes => this.heroes = heroes)
  }
  opcionSeleccionada(event: any) {
    if (event.option.value === "") return
    const heroe: Heroe = event.option.value
    this.termino = heroe.superhero
    this.heroesService.getHeroe(heroe.id!)
      .subscribe(heroe => this.heroeSeleccionado = heroe)
  }
}
