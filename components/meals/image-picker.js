'use client';
import { useRef, useState } from 'react';
import styles from './image-picker.module.css';
import Image from 'next/image';

export default function ImagePicker({ label, name }) {
  const imageInput = useRef();
  const [pickedImage, setPickedImage] = useState();

  // forward click to input using useRef
  function handlePickClick() {
    imageInput.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }
    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!pickedImage && <p>No preview available</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="The image selected by the user"
              fill
            />
          )}
        </div>
        <input
          className={styles.input}
          type="file"
          id={name}
          accept="image/png, image/png"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
          required
        />
        <button
          onClick={handlePickClick}
          className={styles.button}
          type="button"
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
