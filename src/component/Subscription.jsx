import React, { useState } from "react";
import setO from "../assets/Fest.jpg"
import setT from "../assets/view-3d-cup-popcorn-with-cinema-seat.jpg"
import setA from "../assets/3d-cinema-popcorn-cup.jpg"
import setB from "../assets/mobile-payment-illustration.jpg"

const plans = [
  {
    id: 1,
    name: "Basic",
    price: "$7.99",
    quality: "Good",
    resolution: "720p",
    devices: 1,
    download: 1,
    img: setA,
    
  },
  {
    id: 2,
    name: "Standard",
    price: "$12.99",
    quality: "Great",
    resolution: "1080p",
    devices: 2,
    download: 2,
    img: setT, 
  },
  {
    id: 3,
    name: "Premium",
    price: "$15.99",
    quality: "Best",
    resolution: "4k + HDR",
    devices: 4,
    download: 4,
    img: setB, // image placeholder
  },
];

const Subscription = () => {
  const [step, setStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isPurchased, setIsPurchased] = useState(false);
    const [alert, setAlert] = useState("");
    const [alertType, setAlertType] = useState("");

  const handleNext = () => setStep(step + 1);
  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    setStep(3);
  };
  const handlePurchase = () => {
  const success = Math.random() > 0.5;

  if (success) {
    setIsPurchased(true);
    setAlert("Subscription Successful 🎉");
    setAlertType("success");
  } else {
    setAlert("Payment Failed ❌ Try Again!");
    setAlertType("error");
  }

  setTimeout(() => {
    setAlert("");
  }, 3000);
};

const handleDelete = () => {
  setIsPurchased(false);
  setAlert("Subscription Cancelled ❌");
  setAlertType("error");

  setTimeout(() => {
    setAlert("");
  }, 3000);
};

  return (
    <div className="min-h-screen bg-black flex flex-col items-center py-16 px-4 font-montser">

      {/* Step 1 */}
{step === 1 && (
  <div className="w-full flex justify-center mt-24">
    <div className="relative max-w-5xl w-full rounded-xl overflow-hidden  shadow-2xl">

      {/* Background Image */}
      <img
        src={setO}   // এখানে তোমার image path দিবে
        alt="Subscription"
        className="w-full h-[420px] object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-between p-10 text-white">
        
        {/* Left Empty Space (Image Visible) */}
        <div className="w-1/2"></div>

        {/* Right Content */}
        <div className="w-1/2 space-y-5">
          <h2 className="text-3xl font-bold">Step 1 of 3</h2>
          <h1 className="text-4xl font-bold">Choose your plan</h1>

          <div className="space-y-3 text-lg">
            <p>1. No commitments, cancel anytime.</p>
            <p>2. Everything on Netflix for one low price.</p>
            <p>3. No ads and no extra fees. Ever.</p>
          </div>

          <button
            onClick={() => setStep(2)}
            className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-3 rounded-lg transition"
          >
            Next
          </button>
        </div>
      </div>

    </div>
  </div>
)}

      {/* Step 2 */}
{step === 2 && (
  <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
    {plans.map((plan) => (
      <div
        key={plan.id}
        onClick={() => handlePlanSelect(plan)}
        className="relative cursor-pointer rounded-xl overflow-hidden h-[420px] group shadow-2xl"
      >
        {/* Background Image */}
        <img
          src={plan.img}
          alt={plan.name}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition duration-300"></div>

        {/* Text Content */}
        <div className="absolute bottom-0 p-6 text-white space-y-2">
          <h2 className="text-3xl font-bold">{plan.name}</h2>
          <p className="text-xl">{plan.price} / month</p>
          <p>Video & sound quality: {plan.quality}</p>
          <p>Resolution: {plan.resolution}</p>
          <p>Devices at same time: {plan.devices}</p>
          <p>Download devices: {plan.download}</p>
        </div>
      </div>
    ))}
  </div>
)}

      {/* Step 3 */}
      {step === 3 && selectedPlan && (
        <div className="max-w-xl text-center space-y-6 mt-20">
          <h1 className="text-3xl font-bold">Subscription Confirmed!</h1>
          <div className="alert alert-success flex items-center justify-center gap-3 bg-green-600 text-black p-4 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>
              You have subscribed to <b>{selectedPlan.name}</b> plan for <b>{selectedPlan.price}</b>
            </span>
          </div>
          <p>Video & sound quality: {selectedPlan.quality}</p>
          <p>Resolution: {selectedPlan.resolution}</p>
          <p>Devices your household can watch at the same time: {selectedPlan.devices}</p>
          <p>Download devices: {selectedPlan.download}</p>
          <button
  onClick={handlePurchase}
  className="mt-4 px-6 py-3 bg-green-600 text-white font-bold rounded hover:scale-105 transition-transform"
>
  Confirm Purchase
</button>
{isPurchased && (
  <button
    onClick={handleDelete}
    className="mt-4 ml-4 px-6 py-3 bg-red-600 text-white font-bold rounded hover:scale-105 transition-transform"
  >
    Cancel Subscription
  </button>
)}
        </div>
        
      )}
      {alert && (
    <div
        className={`fixed top-16 right-5 px-6 py-3 rounded-lg text-white shadow-lg
        ${alertType === "success" ? "bg-green-500" : "bg-red-500"}`}
    >
        {alert}
    </div>
)}

    </div>
  );
};

export default Subscription;