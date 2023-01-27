import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galleria',
  templateUrl: './galleria.component.html',
  styleUrls: ['./galleria.component.scss']
})
export class GalleriaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  list =[
    {
      title:'Carbonara',
      img:'https://cdn.discordapp.com/attachments/1035251831330316409/1067731561748910100/image.png'
    },
    {
      title:'Seadas',
      img:'https://assets.tmecosys.com/image/upload/t_web600x528/img/recipe/vimdb/244489.jpg'
    },  {
      title:'Focaccia barese',
      img:'https://media.discordapp.net/attachments/1041633932787060798/1067734527709032539/image.png'
    },  {
      title:'Lasagna',
      img:'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/69EE02DA-213D-44A2-8B08-A590225B221B/Derivates/F40AD961-73B3-4E31-BC0F-A173E296F841.jpg'
    },{
      title:'Bolognese',
      img:'https://images-ext-1.discordapp.net/external/bVbpFvqrXuxAb9TWZM_RC-7bDKoNrUik96KuXe_eYHI/https/www.seriouseats.com/thmb/z6YmYr1q4XaEbshLeAAXkYl3CLg%3D/1500x0/filters%3Ano_upscale%28%29%3Amax_bytes%28150000%29%3Astrip_icc%28%29%3Aformat%28webp%29/the-best-slow-cooked-bolognese-sauce-recipe-hero-03_1-3bf4f3401fa84c828f68071df496ddd3.JPG?width=895&height=671'
    },{
      title:'Gnocchetti sardi ',
      img:'https://cdn.discordapp.com/attachments/1041633932787060798/1067745327442055228/image.png'
    },{
      title:'Pizza',
      img:'https://media-cdn.tripadvisor.com/media/photo-p/1c/63/ff/0d/capricciosa-pomodoro.jpg'
    },{
      title:'Tortellini',
      img:'https://www.cucchiaio.it/content/dam/cucchiaio/it/ricette/2016/12/tortellini/tortellini-apertura.jpg'
    }
  ]
}
