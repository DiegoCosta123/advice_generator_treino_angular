import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  textToShow: string = "It is easy to sit up and take notice, what's difficult is getting up and taking action.";

  people: string[] = ["Tornou-se chocantemente óbvio que a nossa tecnologia excedeu a nossa humanidade.",
                      "Trocava toda a minha tecnologia por uma tarde com Sócrates.",
                      "Muitas palavras não indicam necessariamente muita sabedoria.",
                      "A necessidade é a mãe da inovação.",
                      "Uma pessoa que nunca cometeu um erro, nunca tentou nada de novo.",
                      "Eu não falhei. Apenas descobri 10 mil maneiras que não funcionam.",
                      "O início da sabedoria é a admissão da própria ignorância.",
                      "Quanto mais você sabe, mais você percebe que nada sabe!",
                      "O homem rico nem sempre é sábio, mas o homem sábio é sempre rico.",
                      "O segredo do sucesso é saber algo que ninguém mais sabe." ];

  buttonClick() {
    this.Frase();
    console.log(Math.floor(Math.random() * this.people.length));

  }

  Frase() {
    this.textToShow = this.people[Math.floor(Math.random() * this.people.length)];
    // console.log(Math.floor(Math.random() * this.people.length));
    
  }
}

