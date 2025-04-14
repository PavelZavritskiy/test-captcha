import React, { useEffect } from "react";
import { ComponentWithCaptcha } from "./captcha.tsx";

const Form: React.FC = () => {


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь вы можете добавить логику проверки капчи перед отправкой формы
    console.log("Форма отправлена");
  };

  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="inputField">Field name:</label>
        <input type="text" id="inputField" />

<ComponentWithCaptcha/>
        <button type="submit">Отправить</button>
        
        {/* Контейнер для капчи */}

      </form>
    </div>
  );
};

export default Form;