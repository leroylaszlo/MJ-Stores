import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/router";

export default function MJStore() {
  const [cart, setCart] = useState(0);
  const router = useRouter();

  const addToCart = () => {
    setCart(cart + 1);
  };

  const handleBuyNow = () => {
    router.push("/checkout");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-purple-300 p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-purple-800">MJ Stores</h1>
        <p className="text-lg text-gray-700">Discipline that transforms your life</p>
        <p className="mt-2 text-sm">Cart: {cart} item(s)</p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-white shadow-xl rounded-2xl overflow-hidden">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Discipline Guide"
            className="w-full h-48 object-cover"
          />
          <CardContent className="p-4">
            <h2 className="text-2xl font-semibold text-purple-700">Discipline Guide</h2>
            <p className="text-gray-600 mt-2">
              This guide automatically rewires your brain for focus, grit, and success.
            </p>
            <p className="text-xl font-bold mt-4">$10.00</p>
            <div className="flex flex-col gap-2 mt-4">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white" onClick={addToCart}>
                Add to Cart
              </Button>
              <Button className="bg-green-600 hover:bg-green-700 text-white" onClick={handleBuyNow}>
                Buy Now
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      <footer className="mt-16 text-center text-gray-800">
        <h3 className="text-xl font-semibold">Contact Us</h3>
        <p className="mt-2">Phone: 6379030841</p>
        <p>Email: leroylaszlo85@gmail.com</p>
        <p className="mt-4 text-sm">&copy; 2025 MJ Stores. All rights reserved.</p>
      </footer>
    </div>
  );
}
