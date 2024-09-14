import { Component, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-composant-publication-msg',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './composant-publication-msg.component.html',
  styleUrl: './composant-publication-msg.component.css'
})
export class ComposantPublicationMsgComponent  {




  messageForm = this.fb.group({
    msg: '',
  });

  transmissionMsg = output<string>();

  constructor(
    private fb: FormBuilder,
  ) {}

  onPublishMessage() {
    if (
      this.messageForm.valid &&
      this.messageForm.value.msg
    ) {
    this.transmissionMsg.emit(this.messageForm.value.msg);
    }
    this.messageForm.reset();
  }

  
}
