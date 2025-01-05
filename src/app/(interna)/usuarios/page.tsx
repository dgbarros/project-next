'use client'
import { IconPlus, IconUser } from '@tabler/icons-react'
import Pagina from '@/app/components/template/pagina'
import ListaUsuario from '@/app/components/usuario/ListaUsuario'
import Titulo from '@/app/components/template/Titulo'
import FormularioUsuario from '@/app/components/usuario/FormularioUsuario'
import { useEffect, useState } from 'react'
import { Usuario } from '@/core/model/usuario'
import Backend from '@/app/backend'
import { Prisma } from '@prisma/client'

export default function Page() {
    const [usuarios, setUsuarios] = useState<Usuario[]>([])
    const [usuario, setUsuario] = useState<Partial<Usuario> | null>(null)
        
    useEffect(() => {
        Backend.usuarios.obter().then(setUsuarios);
    }, [])

    function salvar() {
        if (!usuario) return
        Backend.usuarios.salvar(usuario)
    }

    return (
        <Pagina className='flex flex-col gap-10'>
            <Titulo icone={IconUser} principal='Usuários' secundario='Cadastro de usuários'/>
            
            {usuario ? (
                <FormularioUsuario 
                    usuario={usuario} 
                    onChange={setUsuario}
                    salvar={salvar}
                    cancelar={() => setUsuario(null)}
                />
            ) : (
                <>
                    <div className='flex justify-end'>
                        <button 
                            className='flex items-center gap-2 bg-zinc-400 px-4 py-2 rounded-md' 
                            onClick={() => setUsuario({})}
                        >
                            <IconPlus />
                            <span>Novo Usuário</span>
                        </button>
                    </div>
                    <ListaUsuario usuarios={usuarios} onClick={setUsuario} />
                </>
            )}
        </Pagina>
    )
}
