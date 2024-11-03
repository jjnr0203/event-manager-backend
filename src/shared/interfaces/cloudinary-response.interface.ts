// interfaz de respuesta después de carga de imagen en cloudinary
interface CloudinaryResponse {
    url: string;
    publicId: string;
    resourceType: string;
    format: string;
    createdAt: string;
  }