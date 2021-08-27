import React from "react"
import { GrFacebook, GrInstagram } from 'react-icons/gr';
import { FiPhone } from 'react-icons/fi'
import "./Components.css";

const Footer = () =>
    <footer className="page-footer font-small blue pt-4" >
    <div className="container-fluid text-center text-md-left" style={{backgroundColor:'teal'}}>
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3" >
                <img src="logo2.png" width="400px"></img>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3" style={{marginTop:'16px'}}>
            <h5 className="white text-uppercase">Contact</h5>
                <ul className="white list-unstyled">
                        <li><p><a href="https://www.facebook.com" className="fbinsta"><GrFacebook />  Effet Maquillage</a></p></li>
                        <li><p><a href="https://www.instagram.com" className="fbinsta"><GrInstagram />  Effet Maquillage</a></p></li>
                        <li><p><FiPhone />  +216 95 60 88 61</p></li>
                   
                </ul>
            </div>

                <div className="col-md-3 mb-md-0 mb-3" style={{ marginTop: '16px' }}>
                <h5 className="white text-uppercase">Address</h5>
                    <p className="white">5, Avenue de l'Euro,</p>
                        <p className="white">les Berges du Lac II.</p>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3" style={{backgroundColor:'#72C1C5', color:'white'}}>© 2021 Copyright: Effet Maquillage
            
            
    </div>

</footer>

export default Footer