import { Component, OnInit, Input } from '@angular/core';

export class Post {

    titre: string;
    texte: string;
    date: Date;
    loves: number;

    constructor(titre: string, texte: string) {
        this.date = new Date();
        this.loves = 0;
        this.titre = titre;
        this.texte = texte;
    }

    loveIt() {
        this.loves++;
    }

    dontLoveIt() {
        this.loves--;
    }

    getLoves() {
        return this.loves;
    }

    getColor() {
        if (this.loves >= 0) {
            return 'green';
        } else {
            return 'red';
        }
    }
}

@Component({
  selector: 'app-postlistitem',
  templateUrl: './postlistitem.component.html',
  styleUrls: ['./postlistitem.component.scss']
})
export class PostlistitemComponent implements OnInit {

    @Input() post: Post;

    constructor() { }

    ngOnInit() {
    }

}
