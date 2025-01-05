import {Usuario} from '@/core/model/usuario'
import InputTexto from '../shared/InputTexto'

export interface FormularioUsuarioProps{
    usuario: Partial<Usuario>
    onChange: (usuario: Partial <Usuario>) => void
    salvar: () => void
    cancelar: () => void
}

export default function FormularioUsuario(props: FormularioUsuarioProps) {
    return (
        <div className='flex flex-col gap-5 mx-10  '>
            <InputTexto label="Nome" type="text" value={props.usuario.nome} onChange={e => props.onChange?.({...props.usuario, nome: e.target.value})}/>
            <InputTexto label="E-mail" type="email" value={props.usuario.email} onChange={e => props.onChange?.({...props.usuario, email: e.target.value}) }/>
            <InputTexto label="Senha" type="password" value={props.usuario.senha} onChange={e => props.onChange?.({...props.usuario, senha: e.target.value})}/>
            <div className='flex gap-5'>
                <button className="bg-black px-4 py-2 rounded-md" onClick={props.salvar}>
                    Salvar
                </button>
                <button className="bg-black px-4 py-2 rounded-md" onClick={props.cancelar}>
                    Cancelar
                </button>
            </div>
           
        </div>
    )
}