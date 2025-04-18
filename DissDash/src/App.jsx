import { useState } from "react";
import Card from "./components/Cards";

function App() {
  const [selectedOutlet, setSelectedOutlet] = useState(null);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // Add cart functions here 
  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // menu data for different outlets
  const menuData = {
    SOUTHERN_STORIES: [
      { id: 1, name: "Masala Dosa", price: 90 },
      { id: 2, name: "Chole Bhature", price: 150 },
    ],
    KATHI: [
      { id: 3, name: "Kathi Roll", price: 100 },
      { id: 4, name: "Paneer Roll", price: 120 },
    ],
    QUENCH: [
      { id: 5, name: "Aloo Tikki Burger", price: 70 },
      { id: 6, name: "Cold Coffee", price: 65 },
    ],
  };

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  return (
    <div className="">
      {/* Navbar */}
      <div className="bg-gray-900 w-full flex items-center justify-between p-4">
        <div className="text-yellow-600 font-bold text-3xl mx-4">DishDash.</div>

        <ul className="flex space-x-10 text-yellow-600">
          <li className="hover:cursor-pointer hover:bg-cyan-50 hover:text-black rounded-2xl p-2">
            Home
          </li>
          <li className="hover:cursor-pointer hover:bg-cyan-50 hover:text-black rounded-2xl p-2">
            My Orders
          </li>
          <li
            onClick={() => setShowCart(!showCart)}
            className="hover:cursor-pointer hover:bg-cyan-50 hover:text-black rounded-2xl p-2"
          >
            Cart ({cart.reduce((total, item) => total + item.quantity, 0)})
          </li>
        </ul>

        <div className="flex space-x-10 mx-4 text-yellow-600">
          <button className="border p-2 rounded-xl hover:text-black hover:bg-cyan-50">
            Contact us
          </button>
          <button className="border p-2 rounded-xl hover:text-black hover:bg-cyan-50">
            Login/Signup
          </button>
        </div>
      </div>

      

      {/* Outlet Cards */}
      <div className="flex flex-wrap justify-center mt-20 gap-8">
        <Card
          OutletName="SOUTHERN_STORIES"
          onClick={() => setSelectedOutlet("SOUTHERN_STORIES")}
        />
        <Card OutletName="KATHI" onClick={() => setSelectedOutlet("KATHI")} />
        <Card OutletName="QUENCH" onClick={() => setSelectedOutlet("QUENCH")} />
      </div>

      {/* Menu Display */}
      {selectedOutlet && (
        <div className="mt-8 mx-auto max-w-4xl p-6">
          <h2 className="text-3xl font-bold mb-6">{selectedOutlet} MENU</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            {menuData[selectedOutlet].map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-lg shadow-md shadow-yellow-600">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-gray-600 mt-2">Rs.{item.price.toFixed(2)}</p>
                <button
                  onClick={() => addToCart(item)}
                  className="mt-4 bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700 hover:cursor-pointer"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Cart Modal */}
      {showCart && (
        <div className="fixed inset-0 bg-amber-50 bg-opacity-50 flex justify-end">
          <div className="bg-white w-full  p-36 h-screen overflow-y-auto flex flex-col">
            <div className="flex justify-between items-center mb-6 pb-4 border-b">
              <h1 className="text-3xl font-bold text-gray-800">Your Selected Items</h1>
              <button
                onClick={() => setShowCart(false)}
                className="text-gray-500 hover:text-gray-700 text-4xl hover:cursor-pointer "
              >
                &times;
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-24 w-24 text-gray-300 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <p className="text-gray-500 text-lg">Your cart is empty</p>
              </div>
            ) : (
              <>
                <div className="flex-1 space-y-4">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="py-4 border-b last:border-b-0"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-gray-800 text-lg">
                            {item.name}
                          </h3>
                          <p className="text-gray-500 text-sm mt-1">
                            Rs.{item.price.toFixed(2)} each
                          </p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700 transition-colors"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </div>

                      <div className="flex justify-between items-center mt-3">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
                          >
                            -
                          </button>
                          <span className="w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
                          >
                            +
                          </button>
                        </div>
                        <p className="font-medium text-gray-700">
                          Rs.{(item.quantity * item.price).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4 mt-4">
                  <div className="flex justify-between items-center text-lg font-bold text-gray-800 mb-4">
                    <span>Total:</span>
                    <span>
                      Rs.
                      {cart
                        .reduce(
                          (sum, item) => sum + item.price * item.quantity,
                          0
                        )
                        .toFixed(2)}
                    </span>
                  </div>
                  <button className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-700 hover:cursor-pointer transition-colors font-medium">
                    Proceed to Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
