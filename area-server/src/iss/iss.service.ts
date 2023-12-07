import { Injectable } from '@nestjs/common';

@Injectable()
export class IssService {
  Radiant(degrees) {
    const pi = Math.PI;
    return degrees * (pi / 180);
  }
  async checkISSPosition(lat, long, gap) {
    const url = 'http://api.open-notify.org/iss-now.json';
    const EarthRadius = 6374;
    return await fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((dataISS) => {
        const longitudeISS = dataISS.iss_position.longitude;
        const latitudeISS = dataISS.iss_position.latitude;

        console.log(longitudeISS, latitudeISS, long, lat);

        const distance =
          Math.acos(
            Math.sin(this.Radiant(longitudeISS)) *
              Math.sin(this.Radiant(long)) +
              Math.cos(this.Radiant(longitudeISS)) *
                Math.cos(this.Radiant(long)) *
                Math.cos(this.Radiant(latitudeISS - lat)),
          ) * EarthRadius;

        if (distance <= gap) {
          console.log('inf');
          return false;
        } else {
          console.log('sup', distance);
          return true;
        }
      })
      .catch((error) => {
        console.error('Error while getting ISS Data:', error);
        return false;
      });
  }
}
