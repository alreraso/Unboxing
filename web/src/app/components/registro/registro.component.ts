import { Component, OnInit } from '@angular/core';
import { Conjunto } from 'src/app/models/conjunto';
import { Recolector } from 'src/app/models/recolector';
import { User } from 'src/app/models/user';
import { ConjuntoService } from 'src/app/services/conjunto.service';
import {RecolectorService} from '../../services/recolector.service'

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
    type:0,
  }
  constructor(

    private recolectorService:RecolectorService,
    private conjuntoService:ConjuntoService

  ) { }

  ngOnInit(): void {
  }

  registrarRecolector(){
    delete this.user.id;
    delete this.user.publicId;
    delete this.recolector.id;
    delete this.recolector.publicId;
    this.user.type = 1;
    console.log(this.user)
    /* this.recolectorService.createUserColector(this.user).subscribe(  
      res=>{
        console.log(res)
      },
      err => console.error(err)
      
      ) */
  }

  registrarConjunto(){
    delete this.user.id;
    delete this.user.publicId;
    delete this.conjunto.id;
    delete this.conjunto.publicId;
    this.user.type = 2;
    console.log(this.user)
    /* this.conjuntoService.createUserConjunto(this.user).subscribe(
      res=>{
        console.log(res)
      },
      err =>console.log(err)
    ) */
  }

}
