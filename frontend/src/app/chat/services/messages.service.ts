import { Injectable, Signal, effect, signal } from '@angular/core';
import { Message } from '../model/message.model';


@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  messages = signal<Message[]>([]);

   
  

  postMessage(message: Message): void {
    const messagesDejaAffichees = (this.getMessages())();
    const listeMessagesMisAjour = [...messagesDejaAffichees,message];
    this.messages.set(listeMessagesMisAjour);


    // À faire
  }

  getMessages(): Signal<Message[]> {
    return this.messages;
  }
}
