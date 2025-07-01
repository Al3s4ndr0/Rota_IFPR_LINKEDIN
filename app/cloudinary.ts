// Configuração do Cloudinary
const CLOUDINARY_CONFIG = {
  cloud_name: '*****************',
  api_key: '*****************',
  api_secret: '******************',
};

export const uploadImageToCloudinary = async (imageUri: string): Promise<string> => {
  try {
    console.log('Iniciando upload para Cloudinary...');
    
    // Converter a URI da imagem para base64
    const response = await fetch(imageUri);
    const blob = await response.blob();
    
    // Converter blob para base64
    const base64 = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
    
    console.log('Imagem convertida para base64');
    
    // Criar FormData para upload
    const formData = new FormData();
    formData.append('file', base64);
    formData.append('cloud_name', CLOUDINARY_CONFIG.cloud_name);
    formData.append('upload_preset', 'ml_default'); // Upload preset público
    formData.append('folder', 'rota-ifpr-mural');
    
    // Upload usando a API REST do Cloudinary
    const uploadResponse = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CONFIG.cloud_name}/image/upload`,
      {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    
    if (!uploadResponse.ok) {
      const errorText = await uploadResponse.text();
      console.error('Resposta de erro do Cloudinary:', errorText);
      throw new Error(`Upload failed: ${uploadResponse.status} - ${errorText}`);
    }
    
    const result = await uploadResponse.json();
    console.log('Upload concluído:', result.secure_url);
    return result.secure_url;
    
  } catch (error) {
    console.error('Erro no upload para Cloudinary:', error);
    throw new Error(`Erro ao fazer upload para Cloudinary: ${error}`);
  }
}; 