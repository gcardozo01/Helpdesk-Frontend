import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { Tecnico } from "src/app/models/tecnicos";

@Component({
  selector: "app-tecnico-list",
  templateUrl: "./tecnico-list.component.html",
  styleUrls: ["./tecnico-list.component.css"],
})
export class TecnicoListComponent implements OnInit {
  ELEMENT_DATA: Tecnico[] = [
    {
      id: 1,
      nome: "Valdir Cezar",
      cpf: "123.456.789-10",
      email: "valdircezer@email.com",
      senha: "1234",
      perfis: ["0"],
      dataCriacao: "25/01/2020",
    },
  ];

  displayedColumns: string[] = [
    "position",
    "name",
    "weight",
    "symbol",
    "acoes",
  ];
  dataSource = new MatTableDataSource<Tecnico>(this.ELEMENT_DATA);
  constructor() {}

  ngOnInit(): void {}

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
