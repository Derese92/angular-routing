import { Pipe, PipeTransform } from '@angular/core';
import { IPost } from './Ipost.interface';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(posts: IPost[], ...args: unknown[]): IPost[] {
    return posts.filter(post => post.title.toLowerCase().includes((args[0] as string).toLowerCase()));
  }

}
