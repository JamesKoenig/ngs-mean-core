import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-tournaments',
  templateUrl: './team-tournaments.component.html',
  styleUrls: ['./team-tournaments.component.css']
})
export class TeamTournamentsComponent implements OnInit {

  constructor(private auth:AuthService, private teamServ: TeamService) { }

  selectedTournament = {
    'season':undefined,
    'division':undefined,
    'name':undefined,
    'challonge_url':undefined,
    'teamMatches':[]
  };
  involvedTournaments = [];
  matches = [];
  _team;

  @Input() team;
  @Input() season;

  ngOnInit() {
    if(this.season){
      //old news
    }else{
          console.log(this.team);
          this.teamServ.getActiveTournaments(this.team._id).subscribe(
            (res) => {
              console.log("getActiveTournaments", res);
              this.involvedTournaments = res;
            },
            (err) => {
              console.log("y ", err);
            }
          );
    }


  }

}
