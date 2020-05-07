import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor() { }

  hosts = [
    {
      id: 1, user: 1, location: 'Montreal', title: 'Amazing View of Downtown Montreal', room: 'Entire apartment', beds: 2, bath: 1, guests: "2", points: 4.5,
      Desc: "Incredible listing, at an amazing location , tastefully decorated in the heart of downtown, walking distance to Place des Arts and St-Laurent Boulevard with all kind of restaurants, bars, coffee shops and night clubs. 5 mins walking distance to Saint Laurent metro station right after Berri Uqam, green line (closest location from the apartment",
      summary: [
        { title: 'Entire home', desc: 'You’ll have the apartment to yourself.' },
        { title: 'Sparkling clean', desc: '16 recent guests said this place was sparkling clean.' },
        { title: 'Great location', desc: '95% of recent guests gave the location a 5-star rating.' },
        { title: 'Great check-in experience', desc: '90% of recent guests gave the check-in process a 5-star rating.' }]
    },
    {
      id: 2, user: 1, location: 'Montreal', title: '1006 Dowtwon Montréal', room: 'Entire apartment', beds: 1, bath: 1, guests: "2", points: 3.5,
      Desc: "Welcome to the city’s most exciting neighborhood, with boutiques, concert halls, museums and more right at your doorstep. Only a 5minute walk from Old-Port!",
      summary: [
        { title: 'Entire home', desc: 'You’ll have the loft to yourself.' },
        { title: 'Sparkling clean', desc: '8 recent guests said this place was sparkling clean.' },
        { title: 'Elevator', desc: 'This is one of a few places in the area that has this feature.' },
        { title: 'Free cancellation for 48 hours', desc: 'After that, cancel up to 24 hours before check-in and get a full refund, minus the service fee.' }]
    },
    {
      id: 3, user: 2, location: 'Montreal', title: 'Modern Downtown Condo on Berri Street', room: 'Entire loft', beds: 3, bath: 2, guests: "4", points: 4.0,
      Desc: "TO SEE THE PROTECTIVE MEASURES WE ARE TAKING TO ENSURE GUEST SAFETY REGARDING COVID-19 PLEASE SEE FULL LISTING DESCRIPTION.",
      summary: [
        { title: 'Entire home', desc: 'You’ll have the apartment to yourself.' },
        { title: 'Sparkling clean', desc: '9 recent guests said this place was sparkling clean.' },
        { title: 'Great location', desc: '100% of recent guests gave the location a 5-star rating' },
        { title: 'Free cancellation for 48 hours', desc: 'After that, cancel up to 7 days before check-in and get a 50% refund, minus the service fee.' }]
    },
    {
      id: 4, user: 1, location: 'Montreal', title: 'Color of Montreal +1 free parking', room: 'Entire apartment', beds: 2, bath: 1, guests: "3", points: 4.8,
      Desc: "Incredible listing, at an amazing location , tastefully decorated in the heart of downtown, walking distance to Place des Arts and St-Laurent Boulevard with all kind of restaurants, bars, coffee shops and night clubs. 5 mins walking distance to Saint Laurent metro station right after Berri Uqam, green line (closest location from the apartment",
      summary: [
        { title: 'Entire home', desc: 'You’ll have the apartment to yourself.' },
        { title: 'Sparkling clean', desc: '16 recent guests said this place was sparkling clean.' },
        { title: 'Great location', desc: '95% of recent guests gave the location a 5-star rating.' },
        { title: 'Great check-in experience', desc: '90% of recent guests gave the check-in process a 5-star rating.' }]
    },
    {
      id: 5, user: 2, location: 'Montreal', title: 'Stroll to the Old Port from this Enchanting Oasis!', room: 'Entire room', beds: 4, bath: 2, guests: "5", points: 3.5,
      Desc: "Incredible listing, at an amazing location , tastefully decorated in the heart of downtown, walking distance to Place des Arts and St-Laurent Boulevard with all kind of restaurants, bars, coffee shops and night clubs. 5 mins walking distance to Saint Laurent metro station right after Berri Uqam, green line (closest location from the apartment",
      summary: [
        { title: 'Entire home', desc: 'You’ll have the apartment to yourself.' },
        { title: 'Sparkling clean', desc: '16 recent guests said this place was sparkling clean.' },
        { title: 'Great location', desc: '95% of recent guests gave the location a 5-star rating.' },
        { title: 'Great check-in experience', desc: '90% of recent guests gave the check-in process a 5-star rating.' }]
    },
    {
      id: 6, user: 1, location: 'Montreal', title: 'The light of Montreal (1 Free parking)', room: 'Entire apartment', beds: 1, bath: 1, guests: "2", points: 5.0,
      Desc: "Incredible listing, at an amazing location , tastefully decorated in the heart of downtown, walking distance to Place des Arts and St-Laurent Boulevard with all kind of restaurants, bars, coffee shops and night clubs. 5 mins walking distance to Saint Laurent metro station right after Berri Uqam, green line (closest location from the apartment",
      summary: [
        { title: 'Entire home', desc: 'You’ll have the apartment to yourself.' },
        { title: 'Sparkling clean', desc: '16 recent guests said this place was sparkling clean.' },
        { title: 'Great location', desc: '95% of recent guests gave the location a 5-star rating.' },
        { title: 'Great check-in experience', desc: '90% of recent guests gave the check-in process a 5-star rating.' }]
    },
    {
      id: 7, user: 2, location: 'Montreal', title: 'Skylit Loft in Old Montreal', room: 'Entire apartment', beds: 1, bath: 1, guests: "2", points: 2.5,
      Desc: "Incredible listing, at an amazing location , tastefully decorated in the heart of downtown, walking distance to Place des Arts and St-Laurent Boulevard with all kind of restaurants, bars, coffee shops and night clubs. 5 mins walking distance to Saint Laurent metro station right after Berri Uqam, green line (closest location from the apartment",
      summary: [
        { title: 'Entire home', desc: 'You’ll have the apartment to yourself.' },
        { title: 'Sparkling clean', desc: '16 recent guests said this place was sparkling clean.' },
        { title: 'Great location', desc: '95% of recent guests gave the location a 5-star rating.' },
        { title: 'Great check-in experience', desc: '90% of recent guests gave the check-in process a 5-star rating.' }]
    },
    {
      id: 8, user: 2, location: 'Montreal', title: 'Skylit Loft in Old Montreal2', room: 'Entire apartment2', beds: 2, bath: 2, guests: "2", points: 2.5,
      Desc: "Incredible listing, at an amazing location , tastefully decorated in the heart of downtown, walking distance to Place des Arts and St-Laurent Boulevard with all kind of restaurants, bars, coffee shops and night clubs. 5 mins walking distance to Saint Laurent metro station right after Berri Uqam, green line (closest location from the apartment",
      summary: [
        { title: 'Entire home2', desc: 'You’ll have the apartment to yourself.' },
        { title: 'Sparkling clean2', desc: '22 recent guests said this place was sparkling clean.' },
        { title: 'Great location2', desc: '22% of recent guests gave the location a 5-star rating.' },
        { title: 'Great check-in experience2', desc: '22% of recent guests gave the check-in process a 5-star rating.' }]
    }
  ];

  stays = [
    { id: 1, user: 1, host: 5, checkin: '2020-01-01', checkout: '2020-01-06', guests: "2" },
    { id: 2, user: 1, host: 3, checkin: '2020-03-15', checkout: '2020-05-20', guests: "1" },
    { id: 3, user: 1, host: 2, checkin: '2020-05-01', checkout: '2020-05-10', guests: "3" },
    { id: 3, user: 2, host: 5, checkin: '2020-05-02', checkout: '2020-05-20', guests: "2" }];



  addStay(user, host, checkin, checkout, guests) {
    let newId: number = this.stays[this.stays.length - 1].id + 1;
    this.stays.push({ id: newId, user: Number(user), host: Number(host), checkin: checkin, checkout: checkout, guests: guests });
  }

  findHost(id) {
    for (let i = 0; i < this.hosts.length; i++) {
      if (this.hosts[i].id == id) {
        return this.hosts[i];
      }
    }
    return null;
  }

  findStay(id) {
    for (let i = 0; i < this.stays.length; i++) {
      if (this.stays[i].id == id) {
        return this.stays[i];
      }
    }
    return null;
  }

  getStaysByUserId(user) {
    console.log(user);
    let finds = [];
    let index = 0;
    for (let i = 0; i < this.stays.length; i++) {
      if (this.stays[i].user == user.id) {
        finds[index] = this.stays[i];
        ++index;
      }
    }
    console.log(finds);
    return finds;
  }

  addHost(user, location, room, guests) {

  }
}
