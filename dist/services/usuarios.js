"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgregarValidarUsuario = exports.ObtenerUsuarioPorId = exports.ObtenerUsuario = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
const ObtenerUsuario = () => __awaiter(void 0, void 0, void 0, function* () {
    const usuarios = yield usuario_1.default.findAll({ where: { estado: true } });
    return usuarios;
});
exports.ObtenerUsuario = ObtenerUsuario;
const ObtenerUsuarioPorId = (...args_1) => __awaiter(void 0, [...args_1], void 0, function* (id = '') {
    const usuarios = yield usuario_1.default.findAll({ where: { estado: true, id: id } });
    return usuarios;
});
exports.ObtenerUsuarioPorId = ObtenerUsuarioPorId;
const AgregarValidarUsuario = (body) => __awaiter(void 0, void 0, void 0, function* () { });
exports.AgregarValidarUsuario = AgregarValidarUsuario;
//# sourceMappingURL=usuarios.js.map