import { Component , OnInit} from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import { fromLonLat } from 'ol/proj';
import OSM from 'ol/source/OSM';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  
  map: Map |undefined;
  place :  | undefined; 
   
  ngOnInit(): void {
    
  
  
    this.map = new Map({
      view: new View({
        center: fromLonLat([ 72.828188, 19.003718]),
        zoom: 19,
      }),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      target: 'ol-map'
    });
    
  }


}
