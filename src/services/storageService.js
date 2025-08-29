// 🔧 Servicio para manejar usuarios en localStorage

// Obtener usuarios
export function obtenerUsuarios() {
  try {
    const usuariosJSON = localStorage.getItem("usuarios");
    const usuarios = JSON.parse(usuariosJSON);
    return usuarios ? usuarios : [];
  } catch (error) {
    console.error("Error obteniendo usuarios:", error);
    return [];
  }
}

// Guardar usuarios
export function guardarUsuarios(usuarios) {
  try {
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  } catch (error) {
    console.error("Error guardando usuarios:", error);
  }
}

// Agregar un usuario nuevo
export function agregarUsuario(nuevoUsuario) {
  const usuarios = obtenerUsuarios();
  guardarUsuarios([...usuarios, nuevoUsuario]);
}

// Buscar usuario por email
export function buscarUsuarioPorEmail(email) {
  const usuarios = obtenerUsuarios();
  return usuarios.find((usuario) => usuario.email === email);
}
