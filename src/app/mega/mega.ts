import { Component } from '@angular/core';

@Component({
  selector: 'app-mega',
  standalone: false,
  templateUrl: './mega.html',
  styleUrl: './mega.css'
})
export class Mega {
  numerosSorteados: number[] = [];
  aposta: number [] = Array(6).fill(null);
  acertos: number | null = null;
  
  sorteio() {
    const numeros: number[] = [];
    while (numeros.length <6) {
      const n = Math.floor(Math.random()*60) +1;
      if(!numeros.includes(n)) {
        numeros.push(n);
      }

  }
this.numerosSorteados = numeros;
this.acertos=null;
}

corrigir(){
  const apostaFiltrada = this.aposta.filter ((n, i, self) =>
  n >=1 && n <= 60 && self.indexOf(n) === i
);

if (apostaFiltrada.length < 6 || apostaFiltrada.length > 10){
  alert('(〃￣︶￣) A sua aposta deve ter entre 6 e 10 números, sem repetir!');
  return;
}
this.acertos = apostaFiltrada.filter(n => this.numerosSorteados.includes(n)).length;

}


}