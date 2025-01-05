import { Usuario } from "@/core/model/usuario"
import LinhaUsuario from "./LinhaUsuario"

export interface ListaUsuarioProps {
    usuarios: Usuario[]
   onClick?: (usuario: Partial<Usuario>) => void
}

export default function ListaUsuario(props: ListaUsuarioProps){
    return (
        <div className="flex flex-col gap-4 mx-3">
            {props.usuarios.map((usuario: Usuario) => {
                return <LinhaUsuario key={usuario.id} usuario={usuario} onClick={props.onClick}/>
            })}
        </div>
    )
}