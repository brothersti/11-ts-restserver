import Usuario from '../models/usuario';


export const ObtenerUsuario = async () => {
    const usuarios = await Usuario.findAll({ where: { estado: true } })
    return usuarios
}

export const ObtenerUsuarioPorId = async (id = '') => {
    const usuarios = await Usuario.findAll({ where: { estado: true, id: id } })
    return usuarios
}

export const AgregarValidarUsuario = async (body: any) => { }