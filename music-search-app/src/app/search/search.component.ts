import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../spotify.service';
import {Router,ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
