import { Component } from '@angular/core';
import { ChatgptService } from 'src/app/services/chatgpt.service';

@Component({
  selector: 'app-chatgpt',
  templateUrl: './chatgpt.component.html',
  styleUrls: ['./chatgpt.component.css']
})
export class ChatgptComponent {
  message!:string;

  constructor(private chatgptSvc:ChatgptService){}


  sendMessage(){

    this.chatgptSvc.getDataFromOpenAI(this.message);
    this.message = '';

  }

  limpiar(){

    location.reload();

  }
}
