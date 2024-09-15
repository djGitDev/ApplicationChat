import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ComposantAffichageComponent } from '../../composantsChat/composant-affichage/composant-affichage.component';
import { ComposantPublicationMsgComponent} from '../../composantsChat/composant-publication-msg/composant-publication-msg.component'
import { AuthenticationService } from 'src/app/login/services/authentication.service';
import { MessagesService } from '../../services/messages.service';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, DatePipe, ComposantAffichageComponent, ComposantPublicationMsgComponent,MatIconModule],
})
export class ChatPageComponent   {


  username = this.authenticationService.getUsername();
  messages = this.messagesService.getMessages();
  
  constructor(
    private messagesService: MessagesService,
    private authenticationService: AuthenticationService
    
  ) {}

  onPublishMessage(entree: string) {
    if (this.username()) {
      this.messagesService.postMessage({
        text: entree,
        username: this.username()!,
        timestamp: Date.now(),
      });
    }
  }

  onLogout() {
    this.authenticationService.logout();
  }


  

}
