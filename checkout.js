import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";

export default function Checkout() {
  const router = useRouter();

  const handlePayment = () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => {
      const options = {
        key: "rzp_test_1234567890abcdef",
        amount: 1000 * 100,
        currency: "INR",
        name: "MJ Stores",
        description: "Discipline Guide Purchase",
        handler: function (response) {
          router.push("/thankyou");
        },
        prefill: {
          name: "Customer",
          email: "email@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#7e22ce",
        },
      };
      const rzp = new window.Razorpay(options);
      rzp.open();
    };
    document.body.appendChild(script);
  };

  return (
    <div className="min-h-screen bg-white p-6 flex flex-col justify-center items-center text-center">
      <h1 className="text-3xl font-bold text-purple-800 mb-4">Checkout</h1>
      <p className="mb-2">You're purchasing:</p>
      <h2 className="text-xl font-semibold">Discipline Guide</h2>
      <p className="mb-4">Total: <strong>$10.00</strong> (₹1000 INR)</p>
      <Button className="bg-green-600 hover:bg-green-700 text-white" onClick={handlePayment}>
        Pay Now
      </Button>
    </div>
  );
}
