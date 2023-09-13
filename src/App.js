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
    <div className='flex flex-col items-center mt-2 border-2 w-[60vw] m-auto'>
      <form onSubmit={submitHandeler}>
         
        <label htmlFor="firstName">firstName</label>
        <br/>
        <input type="text" 
        name="firstName"
        id="firstName"
        placeholder="prasad"
        value={FormData.firstName}
        onChange={changeHandeler} 
        className="outline w-[40vw] px-2 rounded-md h-[4vh] shadow-md shadow-cyan-500/50"
        />

     <br />
       <label htmlFor="lastName">Last Name</label>
        <br/>
        <input type="text" 
        name="lastName"
        id="lastName"
        placeholder="khotkar"
        value={FormData.lastName}
        onChange={changeHandeler} 
        className="outline"/>
        
        <br />
       <label htmlFor="email">Email Address</label>
        <br/>
        <input type="email" 
        name="email"
        id="email"
        placeholder="prasadkhotkar916@gmail.com"
        value={FormData.email}
        onChange={changeHandeler} 
        className="outline"/>
         
         <br />
        <label htmlFor="country">country</label>
        <br />
        <select 
        name="country"
        id="country"
        value={FormData.country}>
           
           <option >India</option>
           <option >United States</option>
           <option >Canada</option>
           <option >Mexico</option>
        </select>

        <br/>
        <label htmlFor="streetAddress">Street Address</label>
        <br/>
        <input type="text" 
        name="streetAddress"
        id="streetAddress"
        placeholder="B-58"
        value={FormData.streetAddress}
        onChange={changeHandeler} 
        className="outline"/>

         <br/>
        <label htmlFor="city">City</label>
        <br/>
        <input type="text" 
        name="city"
        id="city"
        placeholder="pune"
        value={FormData.city}
        onChange={changeHandeler} 
        className="outline"/>
        
        <br/>
        <label htmlFor="state">State /province</label>
        <br/>
        <input type="text" 
        name="state"
        id="state"
        placeholder="Maharashtra"
        value={FormData.state}
        onChange={changeHandeler} 
        className="outline"/>

        <br/>
        <label htmlFor="postalCode">PostalCode</label>
        <br/>
        <input type="text" 
        name="postalCode"
        id="postalCode"
        placeholder="113245"
        value={FormData.postalCode}
        onChange={changeHandeler} 
        className="outline"/>
       
       <br />
       <br />
       <fieldset>

        <legend>By Email</legend>
        <div className="flex">
        <input 
        type="checkbox" 
        id="comments"
        name="comments"
        checked={FormData.comments}
        onChange={changeHandeler} 
        />
        <div>
          <label htmlFor="comments">Comments</label>
          <p>Get notified when someones posts a comments on a posting.</p>
        </div>
        </div>

        <div className="flex">
        <input 
        type="checkbox" 
        id="candidates"
        name="candidates"
        checked={FormData.candidates}
        onChange={changeHandeler} 
        />
        <div>
          <label htmlFor="candidates">Candidates</label>
          <p>Get notified when a candidate applies for a job.</p>
        </div>
        </div>

        <div className="flex">
        <input 
        type="checkbox" 
        id="offers"
        name="offers"
        checked={FormData.offers}
        onChange={changeHandeler} 
        />
        <div>
          <label htmlFor="offers">Offers</label>
          <p>Get notified when a candidate accepts or rejects an offer.</p>
        </div>
        </div>

       </fieldset>

        <br />
        <br />
        <fieldset>
         <legend>Push Notifications</legend>
         <p>These are delivered via SMS to your mobile phone.</p>
         

         <input 
         type="radio"
         id='pushEverything'
         name="pushNotifications"
         value="Everything" 
         onChange={changeHandeler}
         />
         <label htmlFor="pushEverything">Everything</label>
      
      <br />
         <input 
         type="radio"
         id='pushEmail'
         name="pushNotifications"
         value="Same as email" 
         onChange={changeHandeler}
         />
         <label htmlFor="pushEmail">Same as email</label>
        
        <br />
         <input 
         type="radio"
         id='pushNothing'
         name="pushNotifications"
         value="No Push Notifications" 
         onChange={changeHandeler}
         />
         <label htmlFor="pushNothing">No push Notifications</label>
        </fieldset>

        <button className="bg-blue-500 text-white font-bold rounded py-2 px-4">Save</button>
      </form>

    </div>
    
  );
}

export default App;
