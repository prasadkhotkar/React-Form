import './App.css';
import { useState } from 'react';
import "./index.css"

function App() {
  const[formData,setformData]=useState({
    firstName:"",lastName:"",email:"",
    country:"India",streetAddress:"",city:"",state:"",postalCode:"",comments:false,candidates:false,offers:false,pushNotifications:""
  })

  function changeHandeler(event)
  {
    const{name,value,checked,type}=event.target;
    setformData((prev)=>({...prev,[name]:type==="checkbox" ? checked : value}) );
  }

  function submitHandeler(event)
  {
    event.preventDefault();
     console.log("printing the form data");
     console.log(formData);
  }
  return (
    <div className='flex flex-col items-center mt-2 border-4 w-[60vw] m-auto rounded-md bg-orange-100'>
      <h1 className='text-center font-bold text-[2rem]'>Registration Form</h1>
      <form onSubmit={submitHandeler} className='my-4'>
         
        <label htmlFor="firstName" className='font-bold text-lg' >First Name</label>
        <br/>
        <input type="text" 
        name="firstName"
        id="firstName"
        placeholder="Prasad"
        value={FormData.firstName}
        onChange={changeHandeler} 
        className=" w-[40vw] px-2 rounded-md h-[4vh] border-2 border-b-cyan-200 "
        />

     <br />
       <label htmlFor="lastName" className='font-bold text-lg'>Last Name</label>
        <br/>
        <input type="text" 
        name="lastName"
        id="lastName"
        placeholder="Khotkar"
        value={FormData.lastName}
        onChange={changeHandeler} 
        className=" w-[40vw] px-2 rounded-md h-[4vh] border-2 border-t-cyan-200 "
        />
        
        <br />
       <label htmlFor="email" className='font-bold text-lg'>Email Address</label>
        <br/>
        <input type="email" 
        name="email"
        id="email"
        placeholder="prasadkhotkar11@gmail.com"
        value={FormData.email}
        onChange={changeHandeler} 
        className=" w-[40vw] px-2 rounded-md h-[4vh] border-2 border-b-cyan-200 "
        />
         
         <br />
        <label htmlFor="country" className='font-bold text-lg'>country</label>
        <br />
        <select 
        name="country"
        id="country"
        value={FormData.country}
        className=" w-[40vw] px-2 rounded-md h-[4vh] border-2 border-t-cyan-200 "
        >
           
           <option >India</option>
           <option >United States</option>
           <option >Canada</option>
           <option >Mexico</option>
        </select>

        <br/>
        <label htmlFor="streetAddress"className='font-bold text-lg'>Street Address</label>
        <br/>
        <input type="text" 
        name="streetAddress"
        id="streetAddress"
        placeholder="B-58"
        value={FormData.streetAddress}
        onChange={changeHandeler} 
        className=" w-[40vw] px-2 rounded-md h-[4vh] border-2 border-b-cyan-200  "
        />

         <br/>
        <label htmlFor="city" className='font-bold text-lg'>City</label>
        <br/>
        <input type="text" 
        name="city"
        id="city"
        placeholder="pune"
        value={FormData.city}
        onChange={changeHandeler} 
        className=" w-[40vw] px-2 rounded-md h-[4vh] border-2 border-t-cyan-200 "
        />
        
        <br/>
        <label htmlFor="state"className='font-bold text-lg'>State /province</label>
        <br/>
        <input type="text" 
        name="state"
        id="state"
        placeholder="Maharashtra"
        value={FormData.state}
        onChange={changeHandeler} 
        className=" w-[40vw] px-2 rounded-md h-[4vh] border-2 border-b-cyan-200 "
        />

        <br/>
        <label htmlFor="postalCode" className='font-bold text-lg'>PostalCode</label>
        <br/>
        <input type="text" 
        name="postalCode"
        id="postalCode"
        placeholder="113245"
        value={FormData.postalCode}
        onChange={changeHandeler} 
        className=" w-[40vw] px-2 rounded-md h-[4vh] border-2 border-t-cyan-200 "
        />
       
       <br />
       <br />
       <fieldset>

        <legend className='my-2 text-lg font-bold'>By Email</legend>
        <div className="flex gap-2">
        <input 
        type="checkbox" 
        id="comments"
        name="comments"
        checked={FormData.comments}
        onChange={changeHandeler} 
        />
       <label htmlFor="comments" className='font-bold'>Comments</label>
        </div>
        <p className='px-5'>Get notified when someones posts a comments on a posting.</p>
        
        

        <div className="flex gap-2">
        <input 
        type="checkbox" 
        id="candidates"
        name="candidates"
        checked={FormData.candidates}
        onChange={changeHandeler} 
        />
          <label htmlFor="candidates" className='font-bold'>Candidates</label>
          </div>
          <p className='px-5'>Get notified when a candidate applies for a job.</p>
      
        

        <div className="flex gap-2">
        <input 
        type="checkbox" 
        id="offers"
        name="offers"
        checked={FormData.offers}
        onChange={changeHandeler} 
        />
        <label htmlFor="offers" className='font-bold'>Offers</label>
          </div>
          <p className='px-5'>Get notified when a candidate accepts or rejects an offer.</p>
        
      

       </fieldset>

        <br />
        <br />
        <fieldset>
         <legend className='font-bold'>Push Notifications</legend>
         <p>These are delivered via SMS to your mobile phone.</p>
         

         <input 
         type="radio"
         id='pushEverything'
         name="pushNotifications"
         value="Everything" 
         onChange={changeHandeler}
         />
         <label htmlFor="pushEverything" className='font-bold px-2.5'>Everything</label>
      
      <br />
         <input 
         type="radio"
         id='pushEmail'
         name="pushNotifications"
         value="Same as email" 
         onChange={changeHandeler}
         />
         <label htmlFor="pushEmail" className='font-bold px-2.5'>Same as email</label>
        
        <br />
         <input 
         type="radio"
         id='pushNothing'
         name="pushNotifications"
         value="No Push Notifications" 
         onChange={changeHandeler}
         />
         <label htmlFor="pushNothing" className='font-bold px-2.5'>No push Notifications</label>
        </fieldset>

        <button className=" text-white font-bold rounded py-2 px-4  w-[40vw] my-3 bg-blue-400">Save</button>
      </form>

    </div>
    
  );
}

export default App;
