import { HttpErrorResponse } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { Player } from './player';
import { PlayerService } from './service/player.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public players :Player[];
  title = 'sport';

  constructor(private playerService: PlayerService){}
 ngOnInit(): void {
   this.getPlayers(); 
 }
  public getPlayers():void{
    this.playerService.getAllPlayers().subscribe(
      (response:Player[])=>{
this.players=response;
      },
      (error:HttpErrorResponse) =>{
        alert(error.message)
      }
    );
  }
}
