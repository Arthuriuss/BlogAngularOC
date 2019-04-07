import { Component, OnInit } from '@angular/core';
import { Post } from '../postlistitem/postlistitem.component';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss']
})
export class PostlistComponent implements OnInit {

    posts: Array<Post> = [];

  constructor() {
      this.posts.push(new Post('Mon premier post', 'Texte descriptif du 1er post.'));
      this.posts.push(new Post('Mon deuxième post', 'Texte descriptif du 2ème post.'));
      this.posts.push(new Post('Mon troisième post', 'Texte descriptif du 3ème post.'));
  }

  ngOnInit() {
  }

}
