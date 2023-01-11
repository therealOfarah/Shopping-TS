// import { Link } from "react-router-dom";
import GNCphoto from '../../public/assets/images/GNCphoto.jpg'
import data from '../data/home.json'
import { Card, Col } from 'react-bootstrap';
import { StoreItem } from "../components/StoreItem"
import "../styles/home.css"
export function Home() {
  return (
    <>
    <div className="banner" >
      <img className='image' src={GNCphoto} alt="" />
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
