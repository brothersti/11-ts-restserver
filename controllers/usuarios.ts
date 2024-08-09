import { Request, Response } from "express";
import Usuario from '../models/usuario';
import { ObtenerUsuario, ObtenerUsuarioPorId } from "../services/usuarios";


export const getUsuarios = async (req: Request, res: Response) => {

    const usuarios = await ObtenerUsuario()

    res.json({ usuarios })
}

export const getUsuario = async (req: Request, res: Response) => {
    const { id } = req.params

    const usuario = await ObtenerUsuarioPorId(id)
    if (!usuario) {
        res.status(404).json({
            msg: 'No existe el usuario con el id',
            error: 1
        })
    } else {
        res.json({
            msg: 'Ok',
            error: 0,
            usuario
        })
    }
}


export const postUsuario = async (req: Request, res: Response) => {
    const { body } = req

    try {

        const existEmail = await Usuario.findOne({
            where: {
                email: body.email
            }
        })

        if (existEmail) {
            return res.status(400).json({
                msg: `Ya existe un usuario con el correo: ${body.email}`,
                error: 1
            })
        }

        const usuario = await Usuario.create(body)
        usuario.save()

        res.json({
            msg: 'Usuario creado correctamente.',
            error: 0
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Hable con el administrador',
            error: 1
        })
    }
}

export const putUsuario = async (req: Request, res: Response) => {
    const { id } = req.params
    const { body } = req

    try {

        const usuario = await Usuario.findByPk(id)

        if (!usuario) {
            return res.status(400).json({
                msg: `El usuario no existe`,
                error: 1
            })
        }

        await usuario!.update(body)

        res.json({
            msg: 'Usuario actualizado correctamente.',
            error: 0
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Hable con el administrador',
            error: 1
        })
    }
}

export const deleteUsuario = async (req: Request, res: Response) => {
    const { id } = req.params

    try {

        const usuario = await Usuario.findByPk(id)

        if (!usuario) {
            return res.status(400).json({
                msg: `El usuario no existe`,
                error: 1
            })
        }

        // await usuario!.destroy() /*eliminación fisica */
        await usuario.update({ estado: false })

        res.json({
            msg: 'Usuario actualizado correctamente.',
            error: 0
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Hable con el administrador',
            error: 1
        })
    }
}