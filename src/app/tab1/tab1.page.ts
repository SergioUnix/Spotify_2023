import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  elemet:screens[]=[
    {
      name:"Alertas",
      url:"/alertas",
      icon:"alarm-outline"
    },
      {
        name:"ActionSheet",
        url:"/action-sheet",
        icon:"cafe-outline"
      },{
        name:"Tarjetas",
        url:'/tarjetas',
        icon:"image-outline"
      },
      {
        name:'Deber',
        url:'/deber',
        icon:'planet-outline'
      },
      {
        name:'Nasa',
        url:'/nasa',
        icon:'planet-outline'
      }
  
    ]

    constructor() {}
    ngOnInit(){}
  
}




interface screens{
  name:string;
  url:string;
  icon:string;

}
