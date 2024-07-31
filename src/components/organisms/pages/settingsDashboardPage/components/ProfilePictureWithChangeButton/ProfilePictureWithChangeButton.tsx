import { useState,useRef } from 'react';

import Button from '../../../../../atoms/Button/Button';
import AlertMessage from '../../../../../molecules/AlertMessage/AlertMessage';

import { uploadImageToCloudinaryService } from '../../../../../../services/cloudinary/uploadImageToCloudinaryService';

import styles from '../ProfilePictureWithChangeButton/ProfilePictureWithChangeButton.module.scss';

import type { UseFormSetValue} from 'react-hook-form';

interface ProfilePictureWithChangeButtonProps{
    /* eslint-disable @typescript-eslint/no-explicit-any */
    register:any
    setValue: UseFormSetValue<any>
    photoURL:string
    disabled?:boolean
}

const ProfilePictureWithChangeButton: React.FC<ProfilePictureWithChangeButtonProps>=({register,setValue,photoURL,disabled=false})=>{

  const [file, setFile] = useState<string|null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isErrors, setIsError] = useState<boolean>(false);

  const fileInputRef = useRef<HTMLInputElement|null>(null);

  const { ref: registerRef} = register;

  const handleFileSelect=()=>{
    setIsError(false)

    if(fileInputRef.current){
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>)=>{
    const selectedFile = e.target.files?.[0];

    if(selectedFile){
      const reader = new FileReader();
      reader.onloadend = async()=>{
        if(reader.result){
          setIsLoading(true)

          const base64 = reader.result.toString().split(',')[1];
          const url = await uploadImageToCloudinaryService(base64);

          if(url){
            setFile(url);
            setValue('photoURL', url);
            setIsLoading(false)
          }else{
            setIsLoading(false)
            setIsError(true)
          }

        }
      };
      reader.readAsDataURL(selectedFile);
    }
    setIsLoading(false)
  };

  return (
    <div className={styles.ProfilePictureWithChangeButton}>
      <div className={styles._profileIMG}>
        <img className={`${ isLoading? styles._loadingIMG :''}`}
          alt="profile photo"
          src={file || photoURL}
        />
      </div>

      <div className={styles._file}>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          ref={(ref) => {
            fileInputRef.current = ref;
            registerRef(ref);
          }}
        />

        <Button
          onClick={handleFileSelect}
          className="ButtonFilledOval fillWhite buttonBorderGreenPrimary colorTextGreenPrimary buttonMaxHeight"
          type="button"
          text={isLoading ? "Uploading file.." : "Choose Image"}
          disabled={disabled || isLoading}
          ariaLabel='Save Image button'
        />
        
        {isErrors ? <AlertMessage type='error' message='Something went wrong' title='Ops' isCanClose={false}/>:null}

      </div>
    </div>
  );
};
  
export default ProfilePictureWithChangeButton;
