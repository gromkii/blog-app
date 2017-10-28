import { Component, OnInit, OnDestroy } from '@angular/core';
import { Response } from '@angular/http';
import { Subscription } from 'rxjs/Subscription';

import { DataStorageService } from './data-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  posts:any[] = [];
  subscription:Subscription;

  constructor(
    private dataStorageService:DataStorageService
  ){}

  ngOnInit() {
    
  }

  ngOnDestroy() {

  }

}
