const webdavClient = require("../config/webdav");

const Model = {};

//Reading Files/Folders
Model.List = (path) => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await webdavClient.getDirectoryContents(path);
            console.log(result);
            return resolve(result)
        } catch (error){
            return reject(error)
        }



    });
}

//Creating new Folder
Model.CreateFolder = (path, folder_name) => {

}

//Deleting Files/Folders
Model.Delete = (path, item) => {

};

//Uploading File
Model.Upload = (path, file) => {

};

//Renaming File
Model.Rename = (old_name, new_name) => {

};

//Copy File/Folder
Model.Copy = (old_path, new_path) => {

};

//List Files in a Folder (PROPFIND)
Model.PropFind = () => {

}

//PropPatch
Model.PropPatch = () => {

}

module.exports = Model;


