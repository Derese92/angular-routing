import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  template: `
    <h3>Post Details</h3>
    <p>{{post.id}}</p>
    <p>{{post.title}}</p>
    <p>{{post.body}}</p>
  `,
  styles: [
  ]
})
export class DetailsComponent implements OnInit {
post;
  constructor(private r : Router) { 
    this.post = this.r.getCurrentNavigation().extras.state.post;
  }

  ngOnInit(): void {
  }

}
