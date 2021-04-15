import { Component, OnInit } from '@angular/core';
import { AuthorsServiceService } from '../authors-service.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  Title="3 Authors";
  authors: any;
  constructor(service:AuthorsServiceService) {
      this.authors = service.getAuthors();
   }

  ngOnInit(): void {
  }

}
