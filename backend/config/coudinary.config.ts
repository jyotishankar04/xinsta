import { v2 as cloudinary } from "cloudinary";
import { _config } from "./envConfig";
import fs from "fs";

cloudinary.config({
  cloud_name: _config.CLOUDINARY_CLOUD_NAME,
  api_key: _config.CLOUDINARY_API_KEY,
  api_secret: _config.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath: string, folder?: string) => {
  try {
    if (!localFilePath) return null;
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
      folder: folder || "xinsta/temp",
    });
    fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath);
    return null;
  }
};

const uploadMultipleOnCloudinary = async (
  localFilePaths: string[],
  folder?: string
) => {
  try {
    if (!localFilePaths) return null;
    const response = await Promise.all(
      localFilePaths.map((localFilePath) =>
        cloudinary.uploader.upload(localFilePath, {
          resource_type: "auto",
          folder: folder || "xinsta/temp",
        })
      )
    );
    localFilePaths.forEach((localFilePath) => {
      fs.unlinkSync(localFilePath);
    });
    return response.map((res) => {
      return {
        public_id: res.public_id,
        secure_url: res.secure_url,
      };
    });
  } catch (error) {
    localFilePaths.forEach((localFilePath) => {
      fs.unlinkSync(localFilePath);
    });
    return null;
  }
};

const deleteOnCloudinary = async (publicId: string) => {
  try {
    return await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    return null;
  }
};

const deleteMultipleOnCloudinary = async (publicIds: string[]) => {
  try {
    return await cloudinary.api.delete_resources(publicIds);
  } catch (error) {
    return null;
  }
};

export {
  uploadOnCloudinary,
  deleteOnCloudinary,
  deleteMultipleOnCloudinary,
  uploadMultipleOnCloudinary,
};
export default cloudinary;
