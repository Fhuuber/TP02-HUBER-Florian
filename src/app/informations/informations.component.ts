import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.css']
})
export class InformationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() lastname:string = "";
  @Input() firstname:string = "";
  @Input() address:string = "";
  @Input() postalCode:string = "";
  @Input() city:string = "";
  @Input() phoneNumber:string = "";
  @Input() email:string = "";
  @Input() civility:string = "";
  @Input() password:string = "";
  @Input() confirmPassword:string = "";
  @Input() login:string = "";
  @Input() country:string = "";
}
