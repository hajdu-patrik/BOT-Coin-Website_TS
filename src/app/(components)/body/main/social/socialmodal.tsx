import React, { useState } from "react";
import Image from "next/image";

export default function Socialmodal() {

  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  return (
    <>
    <div className="relative select-none">
    <button onClick={toggleModal}>
        <Image
            src="/images/discord.png"
            width={200}
            height={200}
            draggable={false}
            alt="Discord"
        />
    </button>
    </div>     
      {modal && (
        <div className="socialmodal select-none">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="socialmodal-content">
            <Image
                src="/images/discordexe.png"
                fill
                draggable={false}
                alt="Discord Error Exe"
                className='rounded-2xl'
            />
          </div>
        </div>
      )}
    </>
  );
}