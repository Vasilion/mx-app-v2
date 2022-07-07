import { Component, OnInit } from '@angular/core';
import { RaceHeroService } from '../services/race-hero.service'; 

@Component({
  selector: 'app-race-result-lookup',
  templateUrl: './race-result-lookup.component.html',
  styleUrls: ['./race-result-lookup.component.css']
})
export class RaceResultLookupComponent implements OnInit {  
racerName:string = '';
racerFirstName:string = '';
racerLastName:string = '';
racerId: string = '';
racer:any[] = [];
racerProfile:any[] = [];
results: any[]=[];
currentTime = new Date()
seasonYear:number = this.currentTime.getFullYear();
riderSeasonlevel: string = "";
years:number[] = [2021,2022]

constructor(private raceHeroService: RaceHeroService){} 

ngOnInit(): void {
}

// returns a list of racers
searchForRacer(name:string){
  this.racer = []
  this.racerProfile = [];
  this.results = [];
  this.riderSeasonlevel= "";
  this.raceHeroService.getRacerList(name).subscribe(res =>{
    this.racer = res.data;
    // console.log(this.racer);
  })
  
}
// returns profile, runs(race results), and years raced
getRacerProfile(slug:string, year:number){
  this.racerProfile = [];
    this.raceHeroService.getRacerProfile(slug).subscribe(res =>{
      this.racerProfile = res.profile;
      this.racerFirstName = res.profile.first_name;
      this.racerLastName = res.profile.last_name;
      console.log(this.racerProfile);
    })
    this.getResults(slug,year)
}     

getResults(slug:string, year:number){
  this.results = [];
  this.riderSeasonlevel= "";
  this.raceHeroService.getResults(slug,year).subscribe(res =>{
    this.results = res.results;
    this.determineRiderSeasonRank(this.results.length)
    // console.log(this.results)
  })
  
}

determineRiderSeasonRank(raceCount:number){
  if(raceCount <= 1){
    this.riderSeasonlevel = 'Bronze'
  }
  else if(raceCount > 1 && raceCount <= 2 ){
    this.riderSeasonlevel = 'Silver'
  }
  else if(raceCount > 2 && raceCount <= 4 ){
    this.riderSeasonlevel = 'Gold'
  }
  else if(raceCount > 4 && raceCount <= 7 ){
    this.riderSeasonlevel = 'Platinum'
  }
  else if(raceCount > 7 && raceCount <= 13 ){
    this.riderSeasonlevel = 'Diamond'
  }
  else{
    this.riderSeasonlevel = 'Champion';
  }

}

}
