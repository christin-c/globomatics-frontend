import {Component, OnInit} from '@angular/core';
import {BikeService} from "../../services/bike.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public bikes: any;

  constructor(private bikeService: BikeService) {
  }

  ngOnInit(): void {
    this.getBikes();
  }

  getBikes() {
    this.bikeService.getBikes().subscribe(bikes => {
        this.bikes = bikes;
      },
      err => {
        console.log(err)
      },
      () => console.log('bikes loaded')
    )
  }

}
