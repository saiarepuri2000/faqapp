import './index.css';
import React from "react";
import Accordian from "./components/Accordian";
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
       <Accordian 
         title="what is yout return policy?"
         content="For any products for which a refund is to be given, the refund will be processed once the returned product has been received by the seller. In certain cases where the seller is unable to process a replacement for any reason whatsoever, a refund will be given."
       />
       <Accordian 
         title="What can I return?"
         content="
         <ol>
          <li>You may request returns for most items you buy from sellers listed on Amazon.in that are within the return window, except those that are explicitly identified as not returnable on the product detail page
          </li>
          </br>
          <li>Items are returnable if you've received them in a condition that is physically damaged, has missing parts or accessories, defective or different from its description on the product detail page on Amazon.in.
          </li>
         </ol>
         "
       />
       <Accordian 
         title="What are the return guidelines?"
         content="
         <ol>
           <li>
           Your address and the item that you wish to return must be eligible for return.
           </li>
           </br>
           <li>
           If the return is not eligible for Pickup, a Self-Return option will be given.
           </li>
           </br>
           <li>
           Once the return is received, you will, in accordance with varmastore.in Refund Policy, be issued a refund to your original payment method.
           </li>
           </br>
         </ol>
         <p>
         For Pay on Delivery orders, refunds will be processed either to your bank account (via National Electronic Funds Transfer (NEFT)) or Amazon account (as Amazon Pay balance).
         </p>
         "
       />
       <Accordian
       title="Can I return a Global Store Product?"
       content="
       <p>The General Returns Policy is applicable for all Amazon Global Store Products. Eligible products can be returned through courier Pick-up or Self-return. We only offer Self-Return for products worth more than INR 25,000.</p>
       "
       />
       <Footer/>
    </div>
  );
}

export default App;
