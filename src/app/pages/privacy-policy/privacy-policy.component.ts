import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ms-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

}