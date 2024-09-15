import { Component, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-composant-publication-msg',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIconModule],
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
