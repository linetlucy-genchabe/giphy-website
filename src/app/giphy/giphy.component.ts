import { Component, OnInit } from '@angular/core';
import { GifsService } from '../gifs.service';

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})
export class GiphyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
