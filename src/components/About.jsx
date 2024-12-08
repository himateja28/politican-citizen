import React from "react";

function About() {
  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "50px 30px",
    backgroundColor: "#f7f7f7",
    borderRadius: "15px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)"
  };

  const headerStyle = {
    textAlign: "center",
    marginBottom: "40px"
  };

  const headerTitleStyle = {
    fontSize: "3em",
    fontWeight: "bold",
    color: "#0d47a1"
  };

  const headerSubtitleStyle = {
    fontSize: "1.5em",
    color: "#666",
    marginTop: "10px"
  };

  const sectionStyle = {
    marginBottom: "50px"
  };

  const sectionTitleStyle = {
    fontSize: "2em",
    color: "#1976d2",
    marginBottom: "20px"
  };

  const textStyle = {
    fontSize: "1.2em",
    lineHeight: "1.8",
    color: "#333",
    marginBottom: "20px"
  };

  const listStyle = {
    listStyleType: "disc",
    marginLeft: "20px"
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h1 style={headerTitleStyle}>About Our Platform</h1>
        <p style={headerSubtitleStyle}>Bridging the Gap Between Citizens and Politicians</p>
      </div>
      <div>
        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Empowering Civic Engagement</h2>
          <p style={textStyle}>
            Our platform is designed to facilitate seamless interaction between citizens and elected officials, fostering transparency, accountability, and collaborative problem-solving. Citizens can easily report local issues and track their progress, while politicians can manage, resolve, and update the community on actions taken.
          </p>
        </section>
        
        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Key Features</h2>
          <ul style={{ ...textStyle, ...listStyle }}>
            <li><strong>Report Issues:</strong> Citizens can file detailed reports about local problems, such as infrastructure, health, or public safety issues.</li>
            <li><strong>Track Progress:</strong> Users can monitor the status of their submissions and view updates from responsible politicians.</li>
            <li><strong>Political Action:</strong> Politicians have access to a streamlined dashboard to address and respond to concerns, ensuring timely resolutions.</li>
            <li><strong>Real-Time Updates:</strong> Politicians can post announcements, project updates, or new policies directly to the citizens.</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Our Mission</h2>
          <p style={textStyle}>
            We are committed to improving the quality of governance by enhancing communication between the government and its citizens. Our mission is to create a platform that encourages collaboration, promotes transparency, and enables swift resolutions to local concerns.
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;
