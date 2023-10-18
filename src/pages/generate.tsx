// generate.js
import React, { useState, useEffect} from "react";
import QRCode from "qrcode";
import styles from "../style/Home.module.css";
import Image from 'next/image'


function Generate() {
  const [qrCodeValue, setQrCodeValue] = useState("");
  const [qrCodeImage, setQrCodeImage] = useState("");

  useEffect(() => {
    // Generate QR code when qrCodeValue changes
    const generateQrCode = ()=>{
      const link = "https://gist.github.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4"

    QRCode.toDataURL(link)
      .then((url) => {
        setQrCodeValue(link)
        setQrCodeImage(url);
      })
      .catch((error) => {
        console.error("Error generating code",error);
      });
    };

    generateQrCode();
    const interval = setInterval(generateQrCode, 10000);

    return ()=> {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={styles.main}>
          <div className={styles.card}>Generate QR</div>

      {qrCodeImage && (<Image src={qrCodeImage} alt="QR Code" width={300} height={300} className={styles.containerColumn}/>
     ) }
    </div>
  );
}

export default Generate;




