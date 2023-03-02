import { useState } from 'react'
import Header from './Component/header'
import Card from './Component/card'
import './App.css'

function App() {
  

  return (
    <div className="App">
         <Header /> 
         <div className='container'>

         
          <Card 
              imageSrc="https://pyxis.nymag.com/v1/imgs/38c/2ac/b02a093f6b846ebd1aca78b0d59c7e427a-birria-1.rsocial.w1200.jpg"
              name='Birria-Landia'
              nationality='Mexican' 
            />

            <Card 
              imageSrc="https://res.cloudinary.com/the-infatuation/image/upload/c_fill,w_1200,ar_4:3,g_auto,f_auto/cms/reviews/mysttik-masala/banners/1561989798.42"
              name='Mysttik Masala'
              nationality='Indian' 
            /> 

            <Card 
              imageSrc="https://nypost.com/wp-content/uploads/sites/2/2014/08/081114featureshalaguysbz-1.jpg?quality=75&amp;strip=all&amp;w=1024"
              name='The Halal Guys'
              nationality='Middle Eastern' 
            />  



            <Card 
              imageSrc="https://nydosas.com/wp-content/uploads/2018/07/maxresdefault-2-1024x630.jpg"
              name='NY Dosas'
              nationality='Vegetarian' 
            />  

            <Card 
              imageSrc="https://infatuation.imgix.net/media/images/reviews/jerk-pan/banners/1561989308.8.jpg"
              name='Jerk Pan'
              nationality='Jamaican' 
            />  

            <Card 
              imageSrc="https://static01.nyt.com/images/2019/09/04/dining/29hungry-tong2/merlin_159654336_783be212-7726-485e-9250-4793a743af41-jumbo.jpg"
              name='Tong'
              nationality='Bangladeshi' 
            />  



            <Card 
              imageSrc="https://kingsouvlakinyc.com/wp-content/themes/king/images/location-f.jpg"
              name='King Souvlaki of Astoria'
              nationality='Greek' 
            /> 


            <Card 
              imageSrc="https://fastly.4sqi.net/img/general/600x600/61129566_7PLEKHNMZ-VNqzYx2jWRVZGrZ42PdPX0M-j9Ftpg8Ts.jpg"
              name="Ling's Sweet Mini Cakes"
              nationality='Chinese' 
            /> 


          <Card 
              imageSrc="https://d3hbe0kmbam4a5.cloudfront.net/photos/67e1cdb7-bc27-4f26-8343-851bfaa7fc22.jpg"
              name="Uncle Gussy's"
              nationality='Greek' 
            /> 


        <Card 
              imageSrc="https://live.staticflickr.com/8088/8400188739_53b16c7d13_z.jpg"
              name='Patacon Pisao'
              nationality='Venezuelan' 
            /> 

        </div>

    </div>

      
 
  )
}

export default App
