import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  textToShow: string = "It is easy to sit up and take notice, what's difficult is getting up and taking action.";

people: string[] = [    "Tornou-se chocantemente óbvio que a nossa tecnologia excedeu a nossa humanidade.",
                        "Trocava toda a minha tecnologia por uma tarde com Sócrates.",
                        "Muitas palavras não indicam necessariamente muita sabedoria." ];

  buttonClick() {
    this.Frase();
  }

  Frase() {
    this.textToShow = this.people[Math.floor(Math.random() * this.people.length)];
  }
}

