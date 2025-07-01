export async function uploadImageToCloudinary(uri: string): Promise<string> {
    const data = new FormData();
  
    data.append("file", {
      uri,
      name: "upload.jpg",
      type: "image/jpeg",
    } as any); // 👈 necessário para tipos do React Native
  
    data.append("upload_preset", "ml_default");
  
    const res = await fetch("https://api.cloudinary.com/v1_1/***********************/image/upload", {
      method: "POST",
      body: data,
    });
  
    if (!res.ok) {
      throw new Error("Erro ao fazer upload para Cloudinary");
    }
  
    const json = await res.json();
  
    if (!json.secure_url) {
      throw new Error("Resposta do Cloudinary não contém URL");
    }
  
    return json.secure_url;
  }