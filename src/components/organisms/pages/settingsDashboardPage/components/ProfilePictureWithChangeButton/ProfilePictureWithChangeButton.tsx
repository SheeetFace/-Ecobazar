import { useState,useRef } from 'react';

import Button from '../../../../../atoms/Button/Button';

import styles from '../ProfilePictureWithChangeButton/ProfilePictureWithChangeButton.module.scss';

import type { UseFormSetValue} from 'react-hook-form';

interface ProfilePictureWithChangeButtonProps{
    /* eslint-disable @typescript-eslint/no-explicit-any */
    register:any
    setValue: UseFormSetValue<any>
}

const ProfilePictureWithChangeButton: React.FC<ProfilePictureWithChangeButtonProps>=({register,setValue})=>{

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
            src={file ||"https://cdn.discordapp.com/attachments/872343092500504628/1227957231207845938/image.png?ex=662a4b4a&is=6617d64a&hm=7192a45990350c4b175becc97d5efd6174b56583f05fd7075688aafcfec4b44d&"}
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

