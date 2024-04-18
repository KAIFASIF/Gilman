import React, { useCallback } from "react";
import Button from "../../../components/Button";
import { payAmount } from "../../../services/bookapi";
import useRazorpay, { RazorpayOptions } from "react-razorpay";

const Payment = () => {

    const [Razorpay] = useRazorpay();

  const handlePayments =async (data:any) => {
    const { id, amount}= data
    try {
        const options: RazorpayOptions = {
            key: "rzp_test_gSK9TTIhMBYv7S",
          amount: "500",
          currency: "INR",
          name: "Gilman sprtts",
          description: "Test Transaction",
          image: "https://example.com/your_logo",
          order_id: id,
          handler: (res) => {
            console.log(res);
          },
          prefill: {
            name: "Kaif",
            email: "a@example.com",
            contact: "9700174021",
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#3399cc",
          },
        };
    
        const rzpay = new Razorpay(options);
        rzpay.open();
        
        
    } catch (error:any) {
        alert("paymant failedsss")
        
    }
  }

  const createOrder =async () => {
    try {
        const res = await payAmount();
        if(res?.status === 201){
            handlePayments(res?.data)
        }
        
    } catch (error:any) {
        // alert("paymant failed")
        
    }
  }

  const handlePayment = useCallback(async() => {
    const res = await payAmount();
    console.log(res?.data?.id);
    // const order = await createOrder(params);

    const options: RazorpayOptions = {
        key: "rzp_test_gSK9TTIhMBYv7S",
      amount: "500",
      currency: "INR",
      name: "Gilman sprtts",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: res?.data?.id,
      handler: (res) => {
        console.log(res);
      },
      prefill: {
        name: "Kaif",
        email: "a@example.com",
        contact: "9700174021",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzpay = new Razorpay(options);
    rzpay.open();
  }, [Razorpay]);



//   const handlePayment = async () => {
    // const res = await payAmount();
    // console.log(res?.data?.id);

//     const options = {
//       key: "rzp_test_gSK9TTIhMBYv7S";
//       amount: 1000, // Amount in paise (1000 paise = ₹10)
//       currency: "INR",
//       name: "Your Company",
//       description: "Test Payment",
//       order_id: res?.data?.id,
//       handler: function (response: any) {
//         console.log("Payment successful:", response);
//       },
//       prefill: {
//         name: "Test User",
//         email: "test@example.com",
//         contact: "9999999999",
//       },
//       notes: {
//         address: "Test Address",
//       },
//       theme: {
//         color: "#3399cc",
//       },
//     };

//     var rzp = new Razorpay(options);
//     // const rzp = window.Razorpay(options);
//     rzp.open();
//   };

  return (
    <div>
      <Button label="Pay" onClick={createOrder} />
    </div>
  );
};

export default React.memo(Payment);


// import { useCallback } from "react";
// import useRazorpay, { RazorpayOptions } from "react-razorpay";

// export default function App() {
//   const [Razorpay] = useRazorpay();

//   const handlePayment = useCallback(() => {
//     // const order = await createOrder(params);

//     const options: RazorpayOptions = {
//       key: "YOUR_KEY_ID",
//       amount: "3000",
//       currency: "INR",
//       name: "Acme Corp",
//       description: "Test Transaction",
//       image: "https://example.com/your_logo",
//       order_id: order.id,
//       handler: (res) => {
//         console.log(res);
//       },
//       prefill: {
//         name: "Piyush Garg",
//         email: "youremail@example.com",
//         contact: "9999999999",
//       },
//       notes: {
//         address: "Razorpay Corporate Office",
//       },
//       theme: {
//         color: "#3399cc",
//       },
//     };

//     const rzpay = new Razorpay(options);
//     rzpay.open();
//   }, [Razorpay]);

//   return (
//     <div className="App">
//       <button onClick={handlePayment}>Click</button>
//     </div>
//   );
// }
