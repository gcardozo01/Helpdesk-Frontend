import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";

// Models
import { Cliente } from "src/app/models/cliente";

// Services
import { ClienteService } from "src/app/services/cliente.service";

@Component({
  selector: "app-cliente-list",
  templateUrl: "./cliente-list.component.html",
  styleUrls: ["./cliente-list.component.css"],
})
export class ClienteListComponent implements OnInit {
  ELEMENT_DATA: Cliente[] = [];

  displayedColumns: string[] = [
    "position",
    "name",
    "weight",
    "symbol",
    "acoes",
  ];
  dataSource = new MatTableDataSource<Cliente>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.clienteService.findAll().subscribe((res) => {
      this.ELEMENT_DATA = res;
      this.dataSource = new MatTableDataSource<Cliente>(res);
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
