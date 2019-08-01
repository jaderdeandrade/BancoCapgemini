import { Component } from '@angular/core';
import { NavController, IonicPage, MenuController } from 'ionic-angular';
import { BancoDTO } from '../../models/banco.dto';
import { AuthService } from '../../service/auth.service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  banc: BancoDTO = {
    id: "",
    saldo: "",
    operacao: ""
  }
  constructor(
    public navCtrl: NavController,
    public menu: MenuController,
    public auth: AuthService) {

  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }

  ionViewDidLeave() {
    this.menu.swipeEnable(true);
  }
  login() {
    this.auth.operacaoBancaria(this.banc);
    console.log(this.banc);
    console.log('Operação realizada com sucesso');

  }
}
