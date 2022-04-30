
const jokeUrl = 'https://api.chucknorris.io/jokes/random ';
const urlUser = 'https://reqres.in/api/users?page=2';

//Cloudinary

const cloudPreset = 'nnqdank2';
const cloudUrl = 'https://api.cloudinary.com/v1_1/dojosncoe/upload';



const obtenerChiste = async () =>{

    try {
        
        const resp = await fetch ( jokeUrl );

        if ( !resp.ok ) throw ' No se pudo realizar la peticion';

        const { icon_url, id , value } = await resp.json();

        return { icon_url, id , value }

    } catch (err) {
        
        throw err;
    }

}


const obtenerUsuarios = async() => {
    
    const resp = await fetch ( urlUser );
    const {data:usuarios} = await resp.json();

    return usuarios
}

// archivo :: files
const subirImagen = async ( archivoSubir ) => {

    const formData = new FormData();
    formData.append('upload_preset', cloudPreset);
    formData.append('file', archivoSubir);

    try {

        const resp = await fetch ( cloudUrl, {
            method: 'POST',
            body: formData
        });

        if ( resp.ok ){
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        }else{
            throw await resp.json();
        }
        
    } catch (err) {
        throw err;
    }

}




export{
    obtenerChiste,
    obtenerUsuarios,
    subirImagen
}
