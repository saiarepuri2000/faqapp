import React,{useState,useRef} from "react";
import "./Accordian.css";
import Chevron from "./Chevron";
function Accordian(props)
{
  const [Active,setActive]=useState("");
  const [height,setHeight] = useState("0px");
  const [rotate,setRotate] = useState("accordian__icon")

  const content = useRef(null);

  function handleAccordian(){
    setActive(Active===""?"active":"");
    setHeight(Active==="active"?"0px":`${content.current.scrollHeight}px`);
    setRotate(Active==="active"?"accordian__icon":"accordian_icon rotate")
  }


   return (
       <div className="accordian__section">
          <button className={`accordian ${Active}`} onClick={handleAccordian}>
            <p className="accordian__title">{props.title}</p>
            <Chevron
              className={`${rotate}`}
              width={10}
              fill={"rgb(31, 29, 29)"}
            />
          </button>
          <div ref={content} className="accordian__content" style={{maxHeight:`${height}`}}>
            <div className="accordian__text" dangerouslySetInnerHTML={{__html:props.content}} />
          </div>
       </div>
   );
}

export default Accordian;