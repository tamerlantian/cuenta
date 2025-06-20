import { Usuario, UsuarioUpdate } from './usuario.interface';

export interface LoginResponse {
  token: string;
  'refresh-token': string;
  user: Usuario;
}

export interface RegistroResponse {
  usuario: Usuario;
}

export interface UpdateResponse {
  actualizacion: boolean;
  usuario: UsuarioUpdate;
}

export interface UpdateImageResponse {
  cargar: boolean;
  imagen: string;
}

export interface RemoveImageResponse {
  limpiar: boolean;
  imagen: string;
}
