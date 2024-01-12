'use client';
import { useRef } from 'react';
import styles from './image-picker.module.css';

export default function ImagePicker({ label, name }) {
  const imageInput = useRef();
  // forward click to input using useRef

  function handlePickClick() {
    imageInput.current.click();
  }

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <input
          className={styles.input}
          type="file"
          id={name}
          accept="image/png, image/png"
          name={name}
          ref={imageInput}
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
