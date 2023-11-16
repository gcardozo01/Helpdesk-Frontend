// Angular
import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

// Models
import { Cliente } from "src/app/models/cliente";

// Services
import { ClienteService } from "src/app/services/cliente.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-cliente-create",
  templateUrl: "./cliente-create.component.html",
  styleUrls: ["./cliente-create.component.css"],
})
export class ClienteCreateComponent implements OnInit {
  cliente: Cliente = {
    id: "",
    nome: "",
    cpf: "",
    email: "",
    senha: "",
    perfis: [],
    dataCriacao: "",
  };

  nome: FormControl = new FormControl(null, Validators.minLength(3));
  cpf: FormControl = new FormControl(null, Validators.required);
  email: FormControl = new FormControl(null, Validators.email);
  senha: FormControl = new FormControl(null, Validators.minLength(3));

  constructor(
    private clienteService: ClienteService,
    private toast: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  create(): void {
    this.clienteService.create(this.cliente).subscribe(
      () => {
        this.toast.success("Cliente cadastrado com sucesso!", "Cadastro");
        this.router.navigate(["clientes"]);
      },
      (err) => {
        if (err.error.errors) {
          err.error.errors.forEach((e) => {
            this.toast.error(e.message);
          });
        } else {
          this.toast.error(err.error.message);
        }
      }
    );
  }

  addPerfil(perfil: any): void {
    if (this.cliente.perfis.includes(perfil)) {
      this.cliente.perfis.splice(this.cliente.perfis.indexOf(perfil), 1);
    } else {
      this.cliente.perfis.push(perfil);
    }
  }

  validaCampos(): boolean {
    return (
      this.nome.valid && this.cpf.valid && this.email.valid && this.senha.valid
    );
  }
}
