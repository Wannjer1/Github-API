import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
})
export class SearchPageComponent implements OnInit {
  searchForm: FormGroup;
  username: string;

  constructor() {}

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
    });
  }

  sendUser() {
    this.username = this.searchForm.value.username;
  }
}
