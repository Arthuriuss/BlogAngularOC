import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../postlistitem/postlistitem.component';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss']
})
export class PostlistComponent implements OnInit {

  @Input() posts: Array<Post>;

  constructor() {

  }

  ngOnInit() {
  }

}
