import { ChangeDetectionStrategy, Component, input, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { Message } from '../../model/message.model';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-composant-affichage',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './composant-affichage.component.html',
  styleUrl: './composant-affichage.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComposantAffichageComponent  implements AfterViewChecked{

  @ViewChild('messagesContainer') private messagesContainer!: ElementRef;

  
  messages = input.required<Message[]>();

  
  
  /** Afficher la date seulement si la date du message précédent est différente du message courant. */
  showDateHeader(messages: Message[] | null, i: number) {
    if (messages != null) {
      if (i === 0) {
        return true;
      } else {
        const prev = new Date(messages[i - 1].timestamp).setHours(0, 0, 0, 0);
        const curr = new Date(messages[i].timestamp).setHours(0, 0, 0, 0);
        return prev != curr;
      }
    }
    return false;
  }
  
  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    try {
      this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
    } catch (err) {
      console.error('Scrolling failed:', err);
    }
  }
  
  
}
