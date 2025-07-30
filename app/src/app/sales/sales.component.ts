import { Component, inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';


@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent
  ],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.scss'
})
export class SalesComponent {
  housingLocationList: HousingLocation[] = [];
  filteredLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  @Input() message: string = '';

  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
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
