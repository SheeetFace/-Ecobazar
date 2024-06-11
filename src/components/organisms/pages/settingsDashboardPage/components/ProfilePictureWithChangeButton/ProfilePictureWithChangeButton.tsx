import { useState,useRef } from 'react';

import Button from '../../../../../atoms/Button/Button';

import styles from '../ProfilePictureWithChangeButton/ProfilePictureWithChangeButton.module.scss';

import type { UseFormSetValue} from 'react-hook-form';

interface ProfilePictureWithChangeButtonProps{
    /* eslint-disable @typescript-eslint/no-explicit-any */
    register:any
    setValue: UseFormSetValue<any>
    photoURL:string
}

const ProfilePictureWithChangeButton: React.FC<ProfilePictureWithChangeButtonProps>=({register,setValue,photoURL})=>{

    const [file, setFile] = useState<string|null>(null);
    const fileInputRef = useRef<HTMLInputElement|null>(null);

    const { ref: registerRef} = register;
  
    const handleFileSelect=()=>{
      if(fileInputRef.current){
        fileInputRef.current.click();
      }
    };

    const handleFileChange =(e: React.ChangeEvent<HTMLInputElement>)=>{
        const file = e.target.files?.[0];
        if (file) {
          const fileUrl = URL.createObjectURL(file);
          setFile(fileUrl);
          setValue('picture', fileUrl);
        }
      };
  
    return (
      <div className={styles.ProfilePictureWithChangeButton}>
        <div className={styles._profileIMG}>
          <img
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
            text="Chose Image"
          />
        </div>
      </div>
    );
  };
  
  export default ProfilePictureWithChangeButton;

