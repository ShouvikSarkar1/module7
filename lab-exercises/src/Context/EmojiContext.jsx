import React, { createContext, useContext, useState } from 'react';


const EmojiContext = createContext();


export const EmojiProvider = ({ children }) => {
  const [emoji, setEmoji] = useState(true);

  const toggleEmoji = () => {
    setEmoji((prev) => !prev);
  };

  return (
    <EmojiContext.Provider value={{ emoji, toggleEmoji }}>
      {children}
    </EmojiContext.Provider>
  );
};

// Custom hook for using the EmojiContext
export const useEmoji = () => {
  return useContext(EmojiContext);
};

const EmojiChanger = () => {
  const { emoji, toggleEmoji } = useEmoji();

  return (
    <div className='EmojiChanger componentBox'>
      <img 
        src={emoji 
          ? "https://i.pinimg.com/736x/fe/d2/a3/fed2a302fe9f8ce3ee2b77849fb3bb39.jpg" 
          : "https://i.pinimg.com/736x/a6/95/e6/a695e63577caa067f6995bd645799602.jpg"} 
        height="150"
        alt="Emoji"
      />
      <button onClick={toggleEmoji}>Change Mood</button>
    </div>
  );
};

export default EmojiContext;