// Angular
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

// Models
import { Chamado } from "src/app/models/chamado";

// Services
import { ChamadoService } from "src/app/services/chamado.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-chamado-read",
  templateUrl: "./chamado-read.component.html",
  styleUrls: ["./chamado-read.component.css"],
})
export class ChamadoReadComponent implements OnInit {
  chamado: Chamado = {
    prioridade: "",
    status: "",
    titulo: "",
    observacoes: "",
    tecnico: "",
    cliente: "",
    nomeCliente: "",
    nomeTecnico: "",
  };

  constructor(
    private chamadoService: ChamadoService,
    private toast: ToastrService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.chamado.id = this.route.snapshot.paramMap.get("id");
    this.findById();
  }

  findById(): void {
    this.chamadoService.findById(this.chamado.id).subscribe(
      (res) => {
        this.chamado = res;
      },
      (err) => {
        this.toast.error(err.error.error);
      }
    );
  }

  retornaStatus(status: any): string {
    if (status == "0") {
      return "ABERTO";
    } else if (status == "1") {
      return "EM ANDAMENTO";
    } else {
      return "ENCERRADO";
    }
  }

  retornaPrioridade(prioridade: any): string {
    if (prioridade == "0") {
      return "BAIXA";
    } else if (prioridade == "1") {
      return "MÉDIA";
    } else {
      return "ALTA";
    }
  }
}
