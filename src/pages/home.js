import React from "react";
import Nav from "./nav";

class Home extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Nav />
          <main>
            <div className="left">
              <h3>Start down your best path to success!</h3>
              <h2>End to end solution to get </h2>
              <h2>selected for software job </h2>
              <h2>for IGNOU students</h2>
              <a href="#" className="btnone">
                GET STARTED
              </a>
            </div>
            <div className="m">
              <img src="main.webp" />
            </div>
          </main>

          <span className="mains">
            <div>
              <img src="mains.webp" />
            </div>
            <div>
              <h1>Gain career fulfillment</h1>
              <h2>It's not just coaching for your career. We take</h2>
              <h3>coaching to a personal level. If you find fulfillment in</h3>
              <h2>your own life, you will find it in your career.</h2>
            </div>
          </span>

          <div className="about">
            <h1>About Us</h1>
          </div>

          <div className="success">
            <div className="succtwo">
              <div className="one">
                <h2>Comprehensive Career Coaching</h2>
                <h3>
                  Whether you’re seeking a new career direction, more work/life
                  balance, or a resume refresh, we can help. We coach and
                  counsel student and professional clients.
                </h3>
              </div>
              <div className="two">
                <h2>Our Map to Success</h2>
                <h3>
                  We’ll review your work history, education, strengths,
                  accomplishments, problem areas, skills, values, motivations
                  and goals. We can also offer career assessments.
                </h3>
              </div>
              <div className="three">
                <h2>About Us</h2>
                <h3>
                  We have coach students and professionals in new careers,
                  reorganizations, and downsizing. If you want to change your
                  career, or just take it to the next level, call us today.
                </h3>
              </div>
            </div>
          </div>

          <div className="subscribe">
            <h2>Subscribe</h2>
            <input type="email" placeholder="Email" name="email" />
            <a href="#" className="btntwo">
              SIGN UP
            </a>
          </div>
          <div className="reviews">
            <h2>Reviews</h2>
            <h4>Reviews coming soon!</h4>
          </div>
          <div className="social">
            <h2>Social</h2>
            <img src="linkedin.png" />
          </div>
          <div className="client">
            <h1>Client Information Forms</h1>
            <h4>
              Fill out our client forms prior to your appointment so we can
              fully access your needs.{" "}
            </h4>
            <h5>Files coming soon.</h5>
          </div>
          <div className="question">
            <h2>Frequently Asked Questions</h2>
            <h4>
              Please contact us if you cannot find an answer to your question.
            </h4>
          </div>
          <div className="select">
            <select>
              <option disabled selected>
                How you are going to help?
              </option>
              <option className="help">
                We provide end to end 5 step streamlined process to fast track
                your career.
              </option>
            </select>
          </div>
        </header>
      </div>
    );
  }
}

export default Home;
