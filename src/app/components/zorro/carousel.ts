import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nz-demo-carousel-basic',
  template: `
    <div nz-row class="cont">
      <nz-carousel
        [nzAutoPlay]="true"
        [nzEffect]="effect"
        nz-col
        nzSpan="16"
        [nzAutoPlaySpeed]="3000"
      >
        <div nz-carousel-content *ngFor="let item of arrayOfImgUrls" >
        <img [src]="item" />
        </div>
      </nz-carousel>
    </div>
  `,
  styles: [
    `
    .cont{
      display: flex;
      height: 100%;
      justify-content: center;
      align-items: center;
    }
      [nz-carousel-content] {
        text-align: center;
      }
      nz-carousel {
        height: 100%;
        border-radius: 15px;
        box-shadow: 3px 3px 15px black;
      }
      img {
        height: 100%;
        object-fit: fill;
        margin: 0 auto;
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
