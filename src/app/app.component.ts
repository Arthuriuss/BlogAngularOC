import { Component } from '@angular/core';
import { Post } from './postlistitem/postlistitem.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Blog OpenClassroom';
    posts: Array<Post> = [];

    constructor() {
        this.posts.push(new Post('Mon premier post', 'Texte descriptif du 1er post.'));
        this.posts.push(new Post('Mon deuxième post', 'Texte descriptif du 2ème post.'));
        this.posts.push(new Post('Mon troisième post', 'Texte descriptif du 3ème post.'));
    }
}
