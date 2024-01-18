import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
 //Using ngIf to toggle text display
showText: boolean = false;
toggleText() {
    this.showText = !this.showText;
  }


//Image interpolation/binding
imageUrl:string="assets/logo.png";
imageW: number = 110;
imageH: number = 100;

//Using *ngIf
isLogIn:boolean=true;
isLogOut:boolean=false;

// *ngfor example

staff = [
{ firstName: 'Ivan', lastName: 'Lovino', email: 'IL@porkhub.com', role: 'CEO' },
{ firstName: 'Bea', lastName: 'Poblete', email: 'BP@porkhub.com', role: 'COO' },
{ firstName: 'Klein', lastName: 'Magpayo', email: 'KM@porkhub.com', role: 'Head Chef' },
{ firstName: 'Kamille', lastName: 'Diwa', email: 'KD@porkhub.com', role: 'Assitant Chef' },
{ firstName: 'Carlo', lastName: 'Magpayo', email: 'CM@porkhub.com', role: 'Grab Rider' }
];

// Another *ngfor example
products = [
  { imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg', name: 'SISIG', price: '₱100.00' },
  { imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg', name: 'CHICHARONG BULAKLAK', price: '₱80.00' },
  { imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg', name: 'LECHON KAWALI', price: '₱90.00' },
  // Add more product items as needed
];


}
