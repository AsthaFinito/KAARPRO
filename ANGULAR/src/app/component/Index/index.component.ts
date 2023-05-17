import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';
import { Voiture, Marque } from 'src/app/model/voiture';
import { VoitureService } from 'src/app/service/voiture.service';
import { UserService } from 'src/app/service/user.service';


//import 'src/app/component/CSS/style.css';

@Component({
    selector: 'app-voiture',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {


    constructor(private VoitureService: VoitureService, private router: Router, private userService: UserService) { }
  
    ngOnInit(): void {
  
      
        console.log("Affichage Index")
    
  }
}