
import React, { useState, useRef } from "react";
import type { InputImageProps} from './InputImage.types'
import styles from './InputImage.module.scss'
import Button from '../Button/Button'  
import { FaUpload } from "react-icons/fa6";
import { FaX } from "react-icons/fa6";

const InputImage: React.FC<InputImageProps> = ({ onImageSelect, className, previewWidth = 200, previewHeight = 200 }) => {


    const [preview, setPreview] = useState<string | null>(null);

    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleClick = () => {
        inputRef.current?.click();
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]; 
        if (file) {
            onImageSelect(file);   
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result as string);
            };
            reader.readAsDataURL(file);

        }   }

        const handleImageRemove = () => {
            setPreview(null);                
            onImageSelect(null);             
            if (inputRef.current) {
                inputRef.current.value = '';
            } 
        }

    return (
        <>
            <input type="file" 
            accept="image/*" 
            className={className}
            onChange={handleImageChange}
            ref={inputRef}  
            style={{ display: "none" }}
            />
            <div className={styles["input-buttons"]}>
                <Button variant='primary' icon={<FaUpload/>} iconPosition='right' onClick={handleClick} className={styles.button}>Select image</Button>
                <Button variant='danger' icon={<FaX/>} iconPosition='right' onClick={handleImageRemove} className={styles.button} outline={true}>Remove image</Button>
            </div>
            

            {preview && (
                <img
                src={preview}
                alt="Preview"
                style={{ width: previewWidth, height: previewHeight, objectFit: 'cover', marginTop: '10px' }}
                />
            )}
        </>
    )
}

export default InputImage