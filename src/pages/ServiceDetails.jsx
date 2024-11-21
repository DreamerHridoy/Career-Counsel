import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch("/servicesData.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedService = data.find((item) => item.id === parseInt(id));
        setService(selectedService);
      });
  }, [id]);

  const handleCommentSubmit = () => {
    if (input.trim()) {
      setComments([...comments, input]);
      setInput("");
    }
  };

  if (!service) return <p>Loading...</p>;

  return (
    <>
      <Helmet>
        <title>Service-Details</title>
      </Helmet>
      <NavBar />
      <div className="p-8 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-4">
          {service.serviceName}
        </h2>
        <img
          src={service.image}
          alt={service.serviceName}
          className="w-full max-h-80 object-cover mb-4 rounded-md"
        />
        <p>
          <strong>Description:</strong> {service.description}
        </p>
        <p>
          <strong>Category:</strong> {service.category}
        </p>
        <p>
          <strong>Pricing:</strong> {service.pricing}
        </p>
        <p>
          <strong>Duration:</strong> {service.duration}
        </p>
        <p>
          <strong>Counselor:</strong> {service.counselor}
        </p>
        <p>
          <strong>Rating:</strong> {service.rating}
        </p>
        <a
          href={service.visit}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Visit Service
        </a>

        {/* Go Back to Home Button */}
        <div className="mt-6 text-center">
          <button
            onClick={() => navigate("/")}
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition"
          >
            Go Back to Home Page
          </button>
        </div>

        {/* Comments Section */}
        <div className="mt-6">
          <h3 className="text-2xl font-semibold mb-4">Comments/Feedback</h3>
          <div className="flex items-center gap-4 mb-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Write a comment..."
              className="flex-1 border rounded-md px-4 py-2"
            />
            <button
              onClick={handleCommentSubmit}
              className="bg-green-500 text-white px-4 py-2 rounded-md"
            >
              Submit
            </button>
          </div>
          <div>
            {comments.length > 0 ? (
              comments.map((comment, index) => (
                <p
                  key={index}
                  className="bg-white p-4 rounded-md shadow-sm mb-2"
                >
                  {comment}
                </p>
              ))
            ) : (
              <p className="text-gray-500">
                No comments yet. Be the first to comment!
              </p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServiceDetails;
