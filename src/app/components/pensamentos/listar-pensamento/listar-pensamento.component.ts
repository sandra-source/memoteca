import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: 'Comunicação entre componentes',
      autoria: 'Componente pai',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Minha propriedade é decorada com o componente @Input()',
      autoria: 'Componente filho',
      modelo: 'modelo2'
    },
    {
      conteudo: '4EEVJlhaHAuXehkZAKZ2h2Cdghr63Wvm2AzkjTrgnZhfhtp4g8L24DauHsj49ypLwXMcdsadsa dsadasdas dsadsadsadas dasdaWWvV5uqSAfb6xFbcQz0T3mdlaTlSdzEKhVP8Rm9EALQLFMfmJwmkNaGI3VyHHafps8dxNygReFlN7JvwQAOXFu6HQzlfS1gZJyyVbNiZ8oX3EoQjiEG86jPTZZsKqquBYErikgpeUNV190jBV4hRBXJper89zNYtwCe27Z7QMIMASH4gp3dTd9',
      autoria: 'Componente filho',
      modelo: 'modelo1'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
