import { Component, inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';


@Component({
  selector: 'app-men',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent
  ],
  templateUrl: './men.component.html',
  styleUrl: './men.component.scss'
})
export class MenComponent {
  housingLocationList: HousingLocation[] = [];
  filteredLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  @Input() message: string = '';

  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
      for (let index = 0; index < this.housingLocationList.length; index++) {
        if(this.housingLocationList[index].gendar == "Male"){
          this.filteredLocationList.push(this.housingLocationList[index])
        }
      }
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['message']) {
      const currentMessage = changes['message'].currentValue;
      const previousMessage = changes['message'].previousValue;
      console.log(`Message changed from "${previousMessage}" to "${currentMessage}"`);
      this.filterResults(currentMessage)
    }
  }
  
  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }

    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.type.toLowerCase().includes(text.toLowerCase())
    );
  }

}
