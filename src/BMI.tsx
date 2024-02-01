import React from 'react'
import "./app.css"
import {useState} from 'react'
import healthy from './healthy.jpg'
import pic1 from './assets/1.jpg'
import ImageOverlapExample from './components/ImageMixer'

const BMI = () => {
    const [genderFormVisible, setGenderFormVisible] = useState(true)
    const [hight, setHight] = useState('')
    const [weight, setWeight] = useState('')
    const [bmi, setBmi] = useState('0')
    const [detail, setDetail] = useState('Bmi details')

    const handleClick = ()=>{
       setGenderFormVisible(!genderFormVisible)
    }
    const calculateBmi =()=>{
        const height = Number(hight) * Number(hight)
        const Bmi = (Number(weight) / height) *10000
        const bmi = Bmi.toFixed(2)
        
        setBmi(bmi)
        
        
        if(Bmi<18.5){
             const message = `Your BMI is ${bmi} , you're in the underweight range`
            setDetail(message)
            
        }else if(Bmi>18.5 && Bmi<24.9){
            const messgae = `Your Bmi is ${bmi}, you're in healthy weight range`
            setDetail(messgae)
        }else if(Bmi>25 && Bmi<29.9){
            const message = `Your Bmi is ${bmi}, you're in over weight range`
            setDetail(message)
        }else if(Bmi>30){
            const message = `Your Bmi is ${bmi}, you're in obese range`
            setDetail(message)

        }

    }
    
  return (
    <div className='container bg-gradient-to-b from-blue-300 to-gray-100 shadow-lg'>


      <h1 className='font-bold text-black-700 text-3xl mt-5 ' >Body Mass </h1>
      <h1 className='font-bold text-black-700 text-3xl mb-2' > Index Calculator </h1>
      <p className=' text-gray-600  flex mx-5'>Better understand your weight in comparision to your height with our BMI  calculator app.While BMi is not the sole determinant of a healthy weight, but it offers a valuable starting point to evaluate your overall health</p>



      { genderFormVisible &&
      
      
      <div className=' mx-10 mt-5 bg-white rounded-md shadow-md' style={{width:'500px'}}>


        <div className='flex justify-around mt-6 '>
            <div className='gender bg-gray-800  hover:bg-blue-900 rounded-md' onClick={handleClick}>
              <p className='font-bold text-white text-3xl hover:text-orange-100   '> Male</p>
               
            
            </div>
            <div className='gender bg-gray-800 hover:bg-orange-800 rounded-md' onClick={handleClick}>
            <p className='font-bold text-white text-3xl hover:text-orange-100   '> Female</p>

           
               
            </div>
        </div>
        <div className='flex flex-row justify-center gap-7 mb-10'>
            <div className='bmiVlaues bg-blue-300 mt-10 rounded-md hover:scale-150 hover:shadow-md hover:bg-yellow-300 transition-transform duration-300'><p className='text-xs tracking-tighter text-center font-medium'>Less than 18 Low body weight </p></div>
            <div className='bmiVlaues bg-blue-300 mt-10 rounded-md hover:scale-150 hover:shadow-lg hover:bg-green-300 transition-transform duration-300'><p className='text-xs tracking-tighter text-center font-medium'>18-24 Healthy body weight </p></div>
            <div className='bmiVlaues bg-blue-300 mt-10 rounded-md hover:scale-150  hover:bg-blue-500 transition-transform duration-300'><p className='text-xs tracking-tighter text-center font-medium'>25-29 High body weight </p></div>
            <div className='bmiVlaues bg-blue-300 mt-10 rounded-md hover:scale-150  hover:bg-red-600 transition-transform duration-300'><p className='text-xs tracking-tighter text-center font-medium'>More than 29 Obese body  </p></div>



        </div>
      </div>}

      {!genderFormVisible &&
      
      <div className='bg-white mt-5 w-11/12 flex flex-col justify-center rounded-md shadow-lg '>
            <p className='flex mx-5 mt-5 font-sans font-semibold'>Enter your details below</p>
            <div className='flex flex-row justify-center gap-5 mt-5 mb-5'>
                <div className='hight-weight '>
                <label className='font-sans font-semibold text-xs text-gray-600 ' htmlFor='hight' title="Enter your height in centimeters">Height</label> 
                    <input className='bg-gray-300 mt-2 rounded-md h-10 hover:cursor-pointer w-56 hover:bg-blue-300' type='text' id='hight' value={hight} onChange={({target})=>{setHight(target.value)}} />


                </div>
                <div className='hight-weight '>
                <label className='font-sans font-semibold text-xs text-gray-600' htmlFor='height' title="Enter your height in centimeters">Weight</label> 
                <input className='bg-gray-300 mt-2 rounded-md h-10 hover:cursor-pointer w-56 hover:bg-blue-300' type='text' id='hight' value={weight} onChange={({target})=>{setWeight(target.value)}} />



                </div>
                
            </div>

            

            <button className='bg-blue-600 align-middle  w-36 mx-48 rounded-md h-8 mb-5  text-white' onClick={calculateBmi}>
                Calculate BMI
             </button>
            <div className='flex flex-row justify-between items-center bg-blue-600 h-20 rounded-tr-full rounded-br-full mr-4 mb-6 ml-3 ' >
                <div className='bmiViewer text-white ml-5  w-72'>Your Bmi is <span className='text-3xl'> {bmi} </span> </div>
                <div className='bmiDetails w-56 mr-4 text-white font-sans'> 
                   {detail}
                </div>
            </div>

        </div>}
        
      
      
      

      

      <div className='flex items-center w-full bf  justify-center'>
        <ImageOverlapExample />
         

         <div className='w-48 ml-10 flex flex-col justify-center align-middle' >

           <p className=' text-sans text-bold mt-2 text-2xl mb-4 w-48 tracking-tight '> What does your BMI result means</p>
           <div className='leading-4 text-xs'>
           A normal BMI score is one that falls between 18.5 and 24.9. This indicates that a person is within the normal weight range for his or her height. A BMI chart is used to categorize a person as underweight, normal, overweight, or obese.
           </div>
         </div>
         
      </div>
     

    </div>
  )
}

export default BMI
