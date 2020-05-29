import { Component, OnInit } from '@angular/core';
import { DbService } from './db.service';
import { Observable } from 'rxjs';
import { IPost } from './Ipost.interface';

@Component({
  selector: 'app-posts',
  template: `
   <h3>Angular Routing Demo</h3>
   <input #i (input) = "null"/>
   <ul>
     <app-post *ngFor="let post of posts$ | async | search : i.value" [post] = "post"></app-post>
   </ul>
  `,
  styles: [],
})
export class PostsComponent implements OnInit {
  posts$: Observable<IPost[]>;
  constructor(private db: DbService) {}

  ngOnInit(): void {
    this.posts$ = this.db.getData();
  }
}
