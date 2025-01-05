import {Usuario} from "@/core/model/usuario"
import Image from 'next/image';
export interface LinhaUsuarioProps {
    usuario: Usuario
    onClick?: (usuario: Partial<Usuario>) => void
}


export default function LinhaUsuario(props: LinhaUsuarioProps){
    return (
        <div className="flex bg-zinc-900 p-4 rounded-md cursos-pointer" onClick={() => props.onClick?.(props.usuario)}>
            <div className="flex flex-col">
          <span className="text-xl">{props.usuario.nome}</span>    
          <span className="text-sm text-zinc-400">{props.usuario.email}</span>        
            </div>
        </div>
    )
}