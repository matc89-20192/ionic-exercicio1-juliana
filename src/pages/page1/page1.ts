import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  nome = "";

  constructor(public navCtrl: NavController) {

  }

  insereNome(novoNome: string) {
    this.nome = novoNome;
}

}
