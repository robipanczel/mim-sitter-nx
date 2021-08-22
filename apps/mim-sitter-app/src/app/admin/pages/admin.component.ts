import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mim-sitter-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass'],
})
export class AdminComponent implements OnInit {
  ngOnInit(): void {
    console.log('AdminComponent initialized');
  }
}
