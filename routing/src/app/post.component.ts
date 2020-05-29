import { Component, OnInit, Input } from '@angular/core';
import { IPost } from './Ipost.interface';

@Component({
  selector: 'app-post',
  template: `
    <li  >
       <a [routerLink]="['details']" [state] = "{post : post}">{{post.title}}</a>
     </li>
  `,
  styles: [
  ]
})
export class PostComponent implements OnInit {
@Input() post : IPost;
  constructor() { }

  ngOnInit(): void {
  }

}
