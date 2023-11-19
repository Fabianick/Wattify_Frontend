import { Injectable } from '@angular/core';
import { Configuration, OpenAIApi } from 'openai';
import { filter, from, map } from 'rxjs';
import { envikey } from 'src/environments/envikey';

const APIKEY = envikey.apiKey;

declare var $:any;

@Injectable({
  providedIn: 'root'
})
export class ChatgptService {

  constructor() { }

  readonly configuration = new Configuration({
    apiKey:APIKEY
  });

  readonly openai = new OpenAIApi(this.configuration);

  getDataFromOpenAI(text: string){

    from(this.openai.createCompletion({

      model:'text-davinci-003',
      prompt:text,
      max_tokens:256,
      temperature:0.7

    })).pipe(

     filter(resp=>!!resp && !!resp.data),
     map(resp=>resp.data),
     filter((data:any)=>(

      data.choices && data.choices.length > 0 && data.choices[0].text

     )),
     map(data=>data.choices[0].text)

    ).subscribe(data=>{
      $('.prompt').append(`

      <ul class="list-group mb-2">
      <li class="list-group-item bg-info text-light">${text}</li><br>
      </ul>
      `)

      setTimeout(function() {
        $('.respuesta').append(`
          <ul class="list-group mb-2">
            <li class="list-group-item bg-primary text-light">${data}</li><br>
          </ul>
        `);
      }, 2000);

    })


  }
  clearElements() {
    $('.prompt').empty();
    $('.respuesta').empty();
  }


}
