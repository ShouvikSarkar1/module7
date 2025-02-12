import React, {useState} from 'react'

const EmojiChanger = () => {
  const [emoji, changeEmoji] = useState(true);
 

  const handleEmoji = () => {
    changeEmoji ((prev) => !prev)
  } 
  return (
    <div className='EmojiChanger componentBox'>
      <img src={emoji ? "https://i.pinimg.com/736x/fe/d2/a3/fed2a302fe9f8ce3ee2b77849fb3bb39.jpg" 
      : "https://i.pinimg.com/736x/a6/95/e6/a695e63577caa067f6995bd645799602.jpg"} height = "150"
      />
      <button onClick={handleEmoji}>Change Mood</button>
    </div>
  )
}

export default EmojiChanger
