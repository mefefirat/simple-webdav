const webdavClient = require("../config/webdav");

const Model = {};

//Reading Files/Folders
Model.getDirectoryContents = (path) => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await webdavClient.getDirectoryContents(path);
            return resolve(result)
        } catch (error){
            return reject(error)
        }
    });
}

//Creating new Folder
Model.CreateDirectory = (path) => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await webdavClient.createDirectory(path);
            return resolve(result)
        } catch (error){
            return reject(error)
        }
    });
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
/*    await client.copyFile(
        "/images/test.jpg",
        "/public/img/test.jpg"
    );*/
};

//List Files in a Folder (PROPFIND)
Model.PropFind = () => {

}

//PropPatch
Model.PropPatch = () => {

}

module.exports = Model;


