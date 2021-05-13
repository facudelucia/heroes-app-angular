import { HeroesService } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
    img{
      width:100%;
      border-radius: 5px;    
    }
  `
  ]
})
export class HeroeComponent implements OnInit {
  heroe!: Heroe
  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(resp => {
      this.heroesService.getHeroe(resp.id)
        .subscribe((resp: any) => this.heroe = resp)
    })
  }
  regresar() {
    this.router.navigate(['/heroes/listado'])
  }
}
