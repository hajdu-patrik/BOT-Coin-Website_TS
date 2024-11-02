import React from "react";
import Image from "next/image";

export default function Botenomicsmodal() {

  const [modal, setModal] = React.useState<boolean>(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
    <div className="relative select-none">
    <button onClick={toggleModal}>
      <Image
      src="/images/click.png"
      width={500}
      height={500}
      draggable={false}
      alt="CLICK HERE"
      className="vibration | absolute top-[-12em] sm:top-[-13em] sm:left-[-1em] animate-pulse object-contain w-[400px] h-[400px] sm:-w-[500px] sm:-h-[500px]"
       />
      <Image
      src="/images/percentage.png"
      width={500}
      height={500}
      draggable={false}
      alt="Botenomics Percentage Graph"
      className="object-contain w-[400px] h-[400px] sm:-w-[500px] sm:-h-[500px]"
      />  
      </button>
    </div>     
      {modal && (
        <div className="botenomicsmodal select-none">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="botenomicsmodal-content | absolute top-[45%] left-[50%] bg-[#273238] rounded-[1rem] w-screen md:w-fit md:h-fit text-left p-[1em]"> 
            <code className="flex flex-col overflow-x-scroll overflow-y-hidden md:overflow-hidden">
              <div className=" text-yellow-600 font-hs">&#91;</div>
                <pre className=" text-purple-600 font-hs"><span className="text-blue-600 ">"</span>721<span className="text-blue-600 ">": </span><span className="text-purple-600 font-hs">&#123;</span></pre> 
                  <pre className=" text-yellow-600 font-hs">    <span className="text-blue-600 ">"</span>Policy_id_placeholder<span className="text-blue-600 ">": </span><span className="text-blue-600 font-hs">&#123;</span></pre>
                    <pre className=" text-orange-600 font-hs">        <span className="text-blue-600 ">"</span>Botcoin<span className="text-blue-600 ">": </span><span className="text-yellow-600 font-hs">&#123;</span></pre> 
                      <pre className=" text-red-600 font-hs">                   <span className="text-red-600 "><span className="text-blue-600 ">"</span>Project<span className="text-blue-600 ">": "</span><span className="text-green-600">Bot Coin<span className="text-blue-600 ">",</span></span></span></pre>
                      <pre className=" text-red-600 font-hs">                   <span className="text-red-600 "><span className="text-blue-600 ">"</span>Designer<span className="text-blue-600 ">": "</span><span className="text-green-600">Bot himself<span className="text-blue-600 ">",</span></span></span></pre>
                      <pre className=" text-red-600 font-hs">                   <span className="text-red-600 "><span className="text-blue-600 ">"</span>Tokenomics<span className="text-blue-600 ">": "</span><span className="text-green-600">Botenomics<span className="text-blue-600 ">",</span></span></span></pre>
                      <pre className=" text-red-600 font-hs">                   <span className="text-blue-600 "><span className="text-blue-600 ">"</span></span>Files<span className="text-blue-600 ">": </span><span className="text-purple-600 font-hs">&#123;</span></pre>
                          <pre className=" font-hs">                       <span className="text-orange-600 "><span className="text-blue-600 ">"</span>PreSALE<span className="text-blue-600 ">": "</span><span className="text-green-600">49% - Total tokens that's gonna be sent out on pre-sale<span className="text-blue-600 ">",</span></span></span></pre>
                          <pre className=" font-hs">                       <span className="text-orange-600 "><span className="text-blue-600 ">"</span>Liquidity<span className="text-blue-600 ">": "</span><span className="text-green-600">42% - Total tokens that's gonna be added together with liquidity<span className="text-blue-600 ">",</span></span></span></pre>
                          <pre className=" font-hs">                       <span className="text-orange-600 "><span className="text-blue-600 ">"</span>Community<span className="text-blue-600 ">": "</span><span className="text-green-600">5% - Airdrops, Holder Rewards, Giveaways<span className="text-blue-600 ">",</span></span></span></pre>
                          <pre className=" font-hs">                       <span className="text-orange-600 "><span className="text-blue-600 ">"</span>Reserve<span className="text-blue-600 ">": "</span><span className="text-green-600">3% - Total amount of Tokens in the reserve for none planned opportunities<span className="text-blue-600 ">",</span></span></span></pre>
                          <pre className=" font-hs">                       <span className="text-orange-600 "><span className="text-blue-600 ">"</span>Team"<span className="text-blue-600 ">": "</span><span className="text-green-600">1% - Total Tokens owned by the team and the intern helpers<span className="text-blue-600 ">",</span></span></span></pre>
                          <pre className=" font-hs">                       <span className="text-orange-600 "><span className="text-blue-600 ">"</span>Name<span className="text-blue-600 ">": "</span><span className="text-green-600">idk bot made it<span className="text-blue-600 ">",</span></span></span></pre>
                          <pre className=" font-hs">                       <span className="text-orange-600 "><span className="text-blue-600 ">"</span>Src<span className="text-blue-600 ">": "</span><span className="text-green-600">ipfs://bot's secret folder<span className="text-blue-600 ">"</span></span></span></pre>
                        <pre>        <span className="text-purple-600 font-hs">&#125;<span className="text-blue-600 ">,</span></span></pre> 
                        <pre className=" text-red-600 font-hs">                   <span className="text-red-600 "><span className="text-blue-600 ">"</span>Image<span className="text-blue-600 ">": "</span><span className="text-green-600">ipfs://bot's secret folder<span className="text-blue-600 ">",</span></span></span></pre>
                        <pre className=" text-red-600 font-hs">                   <span className="text-red-600 "><span className="text-blue-600 ">"</span>MediaType<span className="text-blue-600 ">": "</span><span className="text-green-600">bot/ada<span className="text-blue-600 ">",</span></span></span></pre>
                        <pre className=" text-red-600 font-hs">                   <span className="text-red-600 "><span className="text-blue-600 ">"</span>Name<span className="text-blue-600 ">": "</span><span className="text-green-600">$BOT &#91;Tokenomics&#93;<span className="text-blue-600 ">"</span></span></span></pre>
                      <pre>      <span className="text-yellow-600 font-hs">&#125;</span></pre> 
                    <pre>    <span className="text-blue-600 font-hs">&#125;</span></pre> 
                  <pre>  <span className="text-purple-600 font-hs">&#125;</span></pre> 
                <span className=" text-yellow-600 font-hs">&#93;</span>
            </code>
            <div>
              <button className="absolute top-[1rem] right-[1rem]" onClick={toggleModal}>
                <Image
                    src="/images/x.png"
                    width={50}
                    height={50}
                    draggable={false}
                    alt="CLOSE HERE"
                />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}