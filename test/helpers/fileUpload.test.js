import { fileUpload } from "../../src/helpers/fileUpload"
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: 'dz4otwt2m',
    api_key: '599319855291146',
    api_secret: 'zKBoLBLLWpM0eyp8fgqTKRdyzZg',
    secure: true

})

describe('Pruebas en fileUpload', async() => {
    
    // test('debe de subir el archivo correctamente al cloudinary', async() => {
      
    //     const imageUrl = 'https://i.pinimg.com/originals/d4/e4/b8/d4e4b8e93c93ab617a683903a6c4a4be.jpg';
    //     const resp = await fetch(imageUrl);
    //     const blob =  await resp.blob();
    //     const file = new File([blob], 'prueba.jpg');

    //     const url = await fileUpload(file);
    //     expect(typeof url).toBe('string');
    //     const segments = url.split('/');
    //     const imageId = segments[segments.length -1].replace('.jpg', '');
    //     await cloudinary.api.delete_resources(['journal/' + imageId]);
    // });

    test('debe de retornar null', async()=> {
        const file = new File([], 'prueba.jpg');
        const url = await fileUpload(file);
        expect(url).toBe(null);
    })
    
})
