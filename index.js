 const calculateBill = (price, vat, tip)=>{
  
  const amountToBePaid = price+vat+tip
  const total = "£" + amountToBePaid.toString();
    
    if (typeof price !== "number"){
        return "error"
    }  
    if (typeof vat !== "number"){
        return "error"
      }
    if (typeof tip !== "number"){
        return "error"
      }  
    else
        return total;
  }   

module.exports = calculateBill;
  