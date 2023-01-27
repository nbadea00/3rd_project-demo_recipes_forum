import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nz-demo-carousel-basic',
  template: `
    <div nz-row [nzJustify]="'center'">
      <nz-carousel
        [nzAutoPlay]="true"
        nz-col
        nzXs="24"
        nzSm="22"
        nzMd="20"
        nzLg="18"
        nzXl="18"
      >
        <div
          style="display:inline-block;width:100%;"
          nz-carousel-content
          *ngFor="let item of arrayOfImgUrls"
        >
          <img [src]="item" />
        </div>
      </nz-carousel>
      <div id="dsc-container">
      <p id="main"> <img src="../../../assets/img/logo-no-background.png" alt=""> <br> Benvenuti su Epicooking! Su questo sito potrete condividere ricette culinarie in aggiutna a leggere e votare quelle di altri utenti.<br> Tuffatevi in un'esperienza unica, scoprendo ricette e sapori da tutto il mondo! </p>
      <p id="sign"> <i>Sito sponsorizzato da Bruno Barbieri <img src="../../../assets/img/barbo.jpg" alt=""></i></p>
      </div>
    </div>


  `,
  styles: [
    `

      nz-carousel {
        box-shadow: 3px 3px 15px black;
        border-radius: 20px;
        aspect-ratio: 16/9;
      }
      img {
        object-fit: fill;
        margin: 0 auto;
        width:100%;
        aspect-ratio: 16/9;
      }

      @media screen and (min-width: 425px) {
        img {
          width:100%;
        }
      }

      #dsc-container{
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      #main{
        text-align: center;
        margin-top: 40px;
        font-size: 1.3em;
        @media only screen and (max-width:1024px){
          margin-top:70px;
        }
        img{
          width: 130px;
          height: 50px;
        }
      }

      #sign{
        margin-top: 50px;
        img{
          width: 45px;
          height: 45px;
          border-radius: 50%;
          &:hover{
            transform: scale(3.0);
          }
        }
      }
    `,
  ],
})
export class NzDemoCarouselBasicComponent {
  arrayOfImgUrls = [
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dieta-piatto-unico-healthy-bowl-1556015938.jpg?resize=980:*',
    '../../../assets/img/wallpaperflare.com_wallpaper.jpg',
    'https://cdn.discordapp.com/attachments/1035251831330316409/1067405878711562330/tortellini-storia-leggende-1200x675.jpg',
    '../../../assets/img/wallpaperflare.com_wallpaper (1).jpg',
  ];
  effect = 'scrollx';
}
