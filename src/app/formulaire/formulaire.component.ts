import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  prenom : string = "";
  lastname : string = "";
  firstname : string = "";
  address : string = "";
  postalCode : string = "";
  city : string = "";
  phoneNumber : string = "";
  email : string = "";
  civility : string = "";
  password : string = "";
  confirmPassword : string = "";
  login : string = "";
  country : string = "";

  constructor() {}

  isFormValid : boolean = false;
  message:string = "";

  ngOnInit(): void {
  }

  validate() {
    if (this.lastname != "" && this.firstname != "" && this.address != "" && this.postalCode != "" && this.city != "" && this.phoneNumber != "" && this.email != "" && this.civility != "" && this.password != "" && this.confirmPassword != "" && this.login != "" && this.country != "") {
      if (this.password == this.confirmPassword) {
        this.message = "";
        this.isFormValid = true;
      }
      else {
        this.message = "Les mots de passe ne sont pas identiques";
        this.isFormValid = false;
      }
    }
    else {
      this.message = "Tous les champs n'ont pas été remplis";
      this.isFormValid = false;
    }
  }
}