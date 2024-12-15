import React from "react";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-transparent mt-16">
      {/* Header Section */}
      <h1 className="text-4xl font-bold text-white mb-4 tracking-wide">
        About Our AI Surveillance Detection Project
      </h1>

      {/* Description Section */}
      <p className="text-lg text-white text-center max-w-4xl mb-8 leading-relaxed">
        Welcome to our cutting-edge{" "}
        <strong>AI Surveillance Detection System</strong>, a project
        meticulously designed and developed by our team to enhance safety and
        security through advanced video analysis. This project is spearheaded by{" "}
        <strong>Muhammad Taha Saleem</strong> (2022-CS-139), with invaluable
        contributions from <strong>Hussain Ali</strong> (2022-CS-129). Together,
        we have crafted a robust and efficient detection system tailored for
        modern surveillance needs.
      </p>

      {/* Features Section */}
      <div className="text-white text-left max-w-4xl space-y-6">
        <h2 className="text-2xl font-semibold border-b border-white pb-2 mb-4">
          Key Features
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>
            <strong>Admin Dashboard:</strong> A dedicated section exclusively
            accessible to admins. Here, admins can:
            <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
              <li>Upload videos for training the model.</li>
              <li>Provide training and testing datasets via CSV files.</li>
              <li>View detailed training history for better insights.</li>
            </ul>
          </li>

          <li>
            <strong>User-Friendly Home Tab:</strong> Users can interact with the
            system through three seamless options:
            <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
              <li>Select and upload a video from their device.</li>
              <li>Paste a video link for online processing.</li>
              <li>Open the live camera for real-time detection.</li>
            </ul>
          </li>

          <li>
            <strong>Detection System:</strong> A highly accurate detection
            mechanism that identifies specific events and alerts users. Upon
            detection, the system:
            <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
              <li>
                Sends email notifications to logged-in users detailing the
                detected event.
              </li>
              <li>
                Displays results in a separate, clearly defined output box.
              </li>
            </ul>
          </li>

          <li>
            <strong>Contact Tab:</strong> A dedicated section for users to get
            in touch with us for inquiries, feedback, or support.
          </li>

          <li>
            <strong>Transparent and Minimalistic Design:</strong> The entire
            system boasts a monochrome theme with transparent backgrounds, white
            borders, and subtle shining effects on hover, ensuring a sleek and
            modern user experience.
          </li>
        </ul>
      </div>

      {/* Footer Section */}
      <footer className="mt-12 text-center text-white">
        <p>
          This AI Surveillance Detection System represents our commitment to
          innovation and security. Stay tuned for further updates and
          enhancements!
        </p>
      </footer>
    </div>
  );
}
