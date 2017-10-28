import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Subscription } from 'rxjs/Subscription';

import { Blog } from './blog.model';
import { DataStorageService } from '../data-storage.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  posts:Blog[] = [];
  subscription:Subscription;

  constructor(
    private dataStorageService:DataStorageService,
  ) { }

  ngOnInit() {
    this.subscription = this.dataStorageService.getPosts().subscribe(
      (response:Response) => {
        const posts = response.json();
        this.posts = posts;
      },
      (error:Response) => {
        console.log('Error getting posts.');
      }
    );
  }

}
