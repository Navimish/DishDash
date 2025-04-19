import React from "react";
import QRCode from "react-qr-code";

const QRPayment = ({ amount, onClose }) => {
  const upiString = `upi://pay?pa=8467059586@pthdfc&pn=Navneet&am=${amount}&cu=INR`;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Scan to Pay</h2>

        <div className="bg-white p-4">
          <QRCode value={upiString} size={256} />
        </div>

        <p className="mt-4 text-gray-600">Amount: Rs.{amount}</p>

        <button
          onClick={onClose}
          className="mt-6 bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default QRPayment;
