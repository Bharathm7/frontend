import React, { Component } from 'react';


class Landing extends Component {
  render() {
    return (
      <div className="home-page">
        <header className="header">
          <div className="container-1">
            <h1>Welcome to Our Website</h1>
            <p>Feel free to leave you concerns we will get back to you as soon as possible, thank you for the support! .</p>
          </div>
        </header>

        <section className="features">
          <div className="container-1">
            
            <div className="row">
              <div className="col-lg-4">
                <h3>Ticket Creation</h3>
                <p>
                  Users can create new tickets by providing details such as title, description, priority level, and category. This feature allows users to submit their support requests or issues to the support team.
                </p>
              </div>
              <div className="col-lg-4">
                <h3>Ticket Tracking</h3>
                <p>
                  Users can track the status and progress of their submitted tickets. They can view information such as ticket number, creation date, assigned agent, current status (open, in progress, closed), and any updates or comments made by the support team.
                </p>
              </div>
              <div className="col-lg-4">
                <h3>Ticket Management</h3>
                <p>
                  Support agents can efficiently manage and prioritize tickets using this feature. They can view a list of all tickets, filter and sort them based on various criteria, assign tickets to specific agents, update ticket status, add internal notes, and communicate with users regarding ticket resolution.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonial">
          <div className="container-1">
            <h2>Testimonials</h2>
            <div className="row">
              <div className="col-lg-6">
                <div className="testimonial-card">
                  <blockquote>
                    <p>
                      "I have been using the ticket support system for our company's IT department, and it has been a game-changer. The system makes it so easy to submit support requests, and I can track the progress of my tickets in real-time. The support team has been incredibly responsive and professional, providing timely updates and resolving my issues promptly. I highly recommend this ticket support system for efficient and reliable customer support."
                    </p>
                    <cite>- John Doe</cite>
                  </blockquote>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="testimonial-card">
                  <blockquote>
                    <p>
                      "Managing customer support requests was a daunting task until we implemented the ticket support system. It has transformed our customer service operations. The system allows us to organize and prioritize tickets effectively, ensuring that no customer request goes unanswered. Our agents can collaborate seamlessly, update ticket statuses, and provide timely resolutions to our customers. The ticket support system has improved our response times and customer satisfaction. We couldn't be happier with the results!"
                    </p>
                    <cite>- Jane Smith</cite>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container-1">
            <p>&copy; 2023 Your Company. All rights reserved.</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Landing;
