const imageDA = require('../dataAccess/imageDA');

module.exports = {
    getImageById :  async (imageId) => {
        const resultDA = await imageDA.getImage(imageId);
        if(!resultDA){
            return undefined;
        }
        else{
            return resultDA;
        }
    },
}