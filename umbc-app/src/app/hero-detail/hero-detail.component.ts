import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero }         from '../hero';
import { HeroService }  from '../hero.service';
declare var CanvasJS: any;

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  template: '<div id="chartContainer" style="height: 370px; width: 100%;"></div>',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
    this.chart();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
  chart() {
    var chart;
    const id = +this.route.snapshot.paramMap.get('id');
    if (id==1) {
      chart = new CanvasJS.Chart("chartContainer", {
      	animationEnabled: true
        ,

      	title:{
      		text:"Raw Squat World Record",
          horizontalAlign: "center"
      	},
      	axisX:{
      		interval: 1
      	},
      	axisY2:{
      		interlacedColor: "rgba(1,77,101,.2)",
      		gridColor: "rgba(1,77,101,.1)",
      		title: "Wilks Score (weight lifted @ weight class)"
      	},
      	data: [{
      		type: "bar",
      		name: "lifters",
      		axisYType: "secondary",
      		color: "#014D65",
      		dataPoints: [
      			{ y: 264.83, label: "Andrzej Stanaszek (639@123)" },
      			{ y: 213.56, label: "Mike Booker (551@132)" },
      			{ y: 195.30, label: "Mike Kuhns (556@148)" },
      			{ y: 201.33, label: "Justin Caputo (622@165)" },
      			{ y: 228.27, label: "Aleksey Nikulin (749@181)" },
      			{ y: 233.07, label: "Amit Sapir (804@198)" },
      			{ y: 226.83, label: "Amit Sapir (821@220)" },
            { y: 222.24, label: "Kevin Oak (832@242)" },
            { y: 226.27, label: "Dennis Cornelius (865@275)" },
            { y: 233.27, label: "Eric Lilliebridge (920@308)"},
            { y: 260.68, label: "Ray Williams (1052@SHW)"}
      		]
      	}]
      });
    } else if (id == 2) {
      chart = new CanvasJS.Chart("chartContainer", {
      	animationEnabled: true,

      	title:{
      		text:"Raw Bench World Record",
          horizontalAlign: "center"
      	},
      	axisX:{
      		interval: 1
      	},
      	axisY2:{
      		interlacedColor: "rgba(1,77,101,.2)",
      		gridColor: "rgba(1,77,101,.1)",
      		title: "Wilks Score (weight lifted @ weight class)"
      	},
      	data: [{
      		type: "bar",
      		name: "lifters",
      		axisYType: "secondary",
      		color: "#014D65",
      		dataPoints: [
      			{ y: 162.05, label: "Andrzej Stanaszek (391@123)" },
      			{ y: 164.34, label: "Eric Head (424@132)" },
      			{ y: 154.56, label: "Kristoffer Hulecki (440@148)" },
      			{ y: 157.31, label: "Phillip Brewer (486@165)" },
      			{ y: 169.45, label: "Rick Weil (556@181)" },
      			{ y: 163.79, label: "Larry Danaher (565@198)" },
      			{ y: 160.80, label: "Mike MacDonald (582@220)" },
            { y: 161.07, label: "Mike MacDonald (603@242)" },
            { y: 168.09, label: "Ted Arcidi (650@275)" },
            { y: 168.87, label: "Ted Arcidi (666@308)"},
            { y: 173.81, label: "James Henderson (710@SHW)"}
      		]
      	}]
      });
    }
    else {
      chart = new CanvasJS.Chart("chartContainer", {
      	animationEnabled: true,

      	title:{
      		text:"Raw Deadlift World Record",
          horizontalAlign: "center"
      	},
      	axisX:{
      		interval: 1
      	},
      	axisY2:{
      		interlacedColor: "rgba(1,77,101,.2)",
      		gridColor: "rgba(1,77,101,.1)",
      		title: "Wilks Score (weight lifted @ weight class)"
      	},
      	data: [{
      		type: "bar",
      		name: "lifters",
      		axisYType: "secondary",
      		color: "#014D65",
      		dataPoints: [
      			{ y: 262.76, label: "Lamar Gant (634@123)" },
      			{ y: 244.19, label: "Stuart Jamieson (630@132)" },
      			{ y: 245.18, label: "Alexey Sivokon (698@148)" },
      			{ y: 246.00, label: "Dmitriy Nasonov (760@165)" },
      			{ y: 268.50, label: "Dmitriy Nasonov (881@181)" },
      			{ y: 255.39, label: "Cailer Woolam (881@198)" },
      			{ y: 256.11, label: "Cailer Woolam (927@220)" },
            { y: 259.11, label: "Yury Belkin (970@242)" },
            { y: 236.61, label: "Aria Attia (915@275)" },
            { y: 238.09, label: "Konstantin Konstantinovs (939@308)"},
            { y: 249.81, label: "Benedikt Magnusson (1015@SHW)"}
      		]
      	}]
      });
    }
    chart.render();
  }
}
