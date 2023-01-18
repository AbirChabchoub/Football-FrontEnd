import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class PlayerService {
	playerUrl = environment.apiBaseUrl;
	constructor(private httpClient: HttpClient) {}

	getAllPlayers():Observable<any> {
		return this.httpClient.get<{ players: any }>(this.playerUrl);
	}
	addPlayer(player: any) {
		return this.httpClient.post(this.playerUrl, player);
	}
	deletePlayer(id: any) {
		return this.httpClient.delete<{ message: string }>(`${this.playerUrl}/${id}`);
	}
	getPlayerById(id: any) {
		return this.httpClient.get<{ player: any }>(`${this.playerUrl}/${id}`);
	}
	updatePlayer(player: any) {
		return this.httpClient.put<{ message: string }>(`${this.playerUrl}/${player._id}`, player);
	}
}
