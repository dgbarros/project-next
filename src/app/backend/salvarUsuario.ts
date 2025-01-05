'use server'

import { Usuario } from "@/core/model/usuario";
import Id from "@/core/model/utils/id";
import RepositorioUsuario from "./RepositorioUsuario";

export default async function obterTodos(usuario: Partial<Usuario>) {
    const novoUsuario = {
        ...usuario,
        id: usuario.id ?? Id.novo,
    }

    return RepositorioUsuario.salvar(novoUsuario as Usuario)
}