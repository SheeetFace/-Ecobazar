

export const uploadImageToCloudinaryService = async(base64:string):Promise<string|null>=>{

    const CLOUD_NAME = import.meta.env.VITE_APP_CLOUDINARY_CLOUD_NAME;
    const UPLOAD_PRESET =  import.meta.env.VITE_APP_CLOUDINARY_PRESET
    const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`;

    const formData = new FormData();
    formData.append('file', `data:image/jpeg;base64,${base64}`);
    formData.append('upload_preset', UPLOAD_PRESET);

    try{
      const response = await fetch(url,{
        method: 'POST',
        body: formData
      })

      const data = await response.json();

      return data.secure_url||null;

    }catch(error){
      console.error('Error uploading image:', error);
      return null;
    }
}