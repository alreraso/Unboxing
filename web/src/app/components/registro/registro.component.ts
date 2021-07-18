import { Component, OnInit } from '@angular/core';
import { Conjunto } from 'src/app/models/conjunto';
import { Recolector } from 'src/app/models/recolector';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  conjunto:Conjunto={
    id:0,
    name:'',
    direccion:'',
    telefono:'',
    publicId:0,
  };

  recolector:Recolector={
    id:0,
    name:'',
    telefono:'',
    activo:true,
    publicId:0,
  }

  user:User={
    id:0,
    publicId:0,
    email:'',
    password:'',
    userType:0,
  }
  constructor() { }

  ngOnInit(): void {
  }

  registrarRecolector(){
    delete this.user.id;
    delete this.user.publicId;
    delete this.recolector.id;
    delete this.recolector.publicId;
    this.user.userType = 1;
    console.log(this.user);
    console.log(this.recolector);
    console.log(this.user.userType);
  }

  registrarConjunto(){
    delete this.user.id;
    delete this.user.publicId;
    delete this.conjunto.id;
    delete this.conjunto.publicId;
    this.user.userType = 2;
    console.log(this.user);
    console.log(this.conjunto);
    console.log(this.user.userType);
  }

}
