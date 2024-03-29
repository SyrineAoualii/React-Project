import React from 'react'
function Brands() {
  return (
<div>
<div class="brands-area">
        <div class="zigzag-bottom"></div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="brand-wrapper">
                        <div class="brand-list">
                            <img src={`${process.env.PUBLIC_URL}/img/brand1.png`} alt=""/>
                            <img src={`${process.env.PUBLIC_URL}/img/brand2.png`} alt=""/>
                            <img src={`${process.env.PUBLIC_URL}/img/brand3.png`} alt=""/>
                            <img src={`${process.env.PUBLIC_URL}/img/brand4.png`} alt=""/>
                            <img src={`${process.env.PUBLIC_URL}/img/brand5.png`} alt=""/>
                            <img src={`${process.env.PUBLIC_URL}/img/brand6.png`} alt=""/>
                            <img src={`${process.env.PUBLIC_URL}/img/brand1.png`} alt=""/>
                            <img src={`${process.env.PUBLIC_URL}/img/brand3.png`} alt=""/>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    </div>
  );
}

export default Brands;
