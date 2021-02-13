import { Component, OnInit } from '@angular/core';
import  {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.page.html',
  styleUrls: ['./users-list.page.scss'],
})
export class UsersListPage implements OnInit {

  constructor(private htttp: HttpClient) { }
  characters =[];
  ngOnInit() {
    this.htttp.get<any>('https://rickandmortyapi.com/api/character').subscribe( res => {
      console.log(res);
      this.characters = res.results;
    })
  }

}
