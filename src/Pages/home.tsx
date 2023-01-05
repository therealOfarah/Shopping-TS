// import { Link } from "react-router-dom";
import GNCphoto from '../images/GNCphoto.jpg'
import data from '../data/home.json'
import { Card, Col } from 'react-bootstrap';
import { StoreItem } from "../components/StoreItem"
import "../styles/home.css"
export function Home() {
  return (
    <>
    <div className='banner' >
      <img src={GNCphoto} alt="" style={{width:"1400px", height:"450px", marginLeft:"-50px",marginTop:"2vh"}}/>
    </div>
    <h3 style={{textAlign:"center",marginTop:"20px",marginBottom:"20px"}}>Todays Hit's</h3>
    <div className="trending" style={{display:"flex",justifyContent:"center"}}>
    {data.map( item=>
      <Col key={item.id}><StoreItem {...item}/></Col>
      )}
    </div>
    </>
  );
}
