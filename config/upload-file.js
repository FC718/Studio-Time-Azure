const { BlobServiceClient } = require("@azure/storage-blob");
const { v1: uuidv1 } = require("uuid");

module.exports = async function (file) {
    const containerName = 'studiotime';
    const blobName = `${uuidv1()}${file.originalname}`.replaceAll(' ', '');
    const blobServiceClient = BlobServiceClient.fromConnectionString(process.env.BLOB_CONNECTION);
    const containerClient = blobServiceClient.getContainerClient(containerName);
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);
    const uploadBlobResponse = await blockBlobClient.upload(file.buffer, file.buffer.length);
     return blockBlobClient.url;
};


