import { Carousel } from 'antd';
import React from 'react'



const contentStyle = {
  height: '400px',
  color: '#fff',
  lineHeight: '400px',
  textAlign: 'center',
  background: '#364d79',
};
export default function Banner() {
  return (
    <div>
      <h1>Đặt Vé Xem Phim</h1>
      <Carousel autoplay top>
        <div>
          <div style={contentStyle}>1
          </div>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </div>
  )
}
