import React, { useState } from 'react';
import { SmartCaptcha } from '@yandex/smart-captcha';

export const ComponentWithCaptcha = () => {
    const [token, setToken] = useState('');

  // Ваш клиентский ключ из кабинета Яндекс Cloud
  const sitekey = 'ysc1_wysJR4peOn320lEB8jiX4l1OHyhqSNxbjHnbU0if995cf131'; // Замените на реальный ключ

  const handleSuccess = (token: string) => {
    console.log('Captcha успешно пройдена. Токен:', token);
    setToken(token);
  };



  return (
    <div>

      
      <SmartCaptcha 
        sitekey={sitekey}
        onSuccess={handleSuccess}
      />
      
      {token && (
        <div style={{ marginTop: '20px' }}>
          <p>Капча пройдена! Токен:</p>
          <code>{token}</code>
        </div>
      )}
    </div>
  );
};