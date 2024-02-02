import test from "@/assets/images/test.jpg";
import Image from "next/image";
import rectangle from "@/assets/images/Rectangle.png";

function CaseStudy() {
  return (
    <>
      <div className="container">
        <section className="case_section1">
          <div className="col-lg-7">
            <h1 className="title">Lorem ipsum dolor sit amet consectetur.</h1>
            <p className="description">
              dbqp Labs is an innovative IT company that helps entrepreneurs,
              small businesses, and start-ups reach their full potential with
              web applications and mobile apps
            </p>
          </div>
        </section>
        <section className="case_section2">
          <div>
            <div className="title">
              <h1>We have delivered verity of solutions to our clients</h1>
            </div>
            <div className="button_section">
              <button type="button" className="btn btn-lg caseBtn active">
                All
              </button>
              <button type="button" className="btn btn-lg caseBtn">
                Construction
              </button>
              <button type="button" className="btn btn-lg caseBtn">
                Health
              </button>
              <button type="button" className="btn btn-lg caseBtn">
                Travel
              </button>
              <button type="button" className="btn btn-lg caseBtn">
                Media
              </button>
              <button type="button" className="btn btn-lg caseBtn">
                Data & AI
              </button>
              <button type="button" className="btn btn-lg caseBtn">
                Government
              </button>
            </div>
            <div className="case_section3">
              <div>
                <div className="card_section">
                  {/* <div className="row"> */}
                  <div className="card card_size">
                    <div className="image_section">
                      <Image src={rectangle} alt="no image" />
                    </div>
                    <div className="card_description">
                      <h3>Lorem Ipsum</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur. Faucibus mauris
                        feugiat mi lorem lacus.
                      </p>
                      <a href="/casestudydetails">
                        View Case Study
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="black"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.3901 3.54917C10.1197 3.81575 10.0944 4.23698 10.316 4.53253L10.3826 4.60981L14.9583 9.24992L3.25 9.24992C2.83579 9.24992 2.5 9.5857 2.5 9.99992C2.5 10.3823 2.78611 10.6978 3.15592 10.7441L3.25 10.7499H14.9583L10.3826 15.39C10.116 15.6604 10.0966 16.082 10.3224 16.3743L10.3901 16.4507C10.6605 16.7172 11.082 16.7366 11.3744 16.5108L11.4507 16.4431L17.2841 10.5265C17.548 10.2588 17.57 9.84232 17.3501 9.54985L17.2841 9.47336L11.4507 3.5567C11.1599 3.26173 10.6851 3.25837 10.3901 3.54917Z"
                            fill="black"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="card card_size">
                    <div className="image_section">
                      <Image src={rectangle} alt="no image" />
                    </div>
                    <div className="card_description">
                      <h3>Lorem Ipsum</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur. Faucibus mauris
                        feugiat mi lorem lacus.
                      </p>
                      <a href="/casestudydetails">
                        View Case Study
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="black"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.3901 3.54917C10.1197 3.81575 10.0944 4.23698 10.316 4.53253L10.3826 4.60981L14.9583 9.24992L3.25 9.24992C2.83579 9.24992 2.5 9.5857 2.5 9.99992C2.5 10.3823 2.78611 10.6978 3.15592 10.7441L3.25 10.7499H14.9583L10.3826 15.39C10.116 15.6604 10.0966 16.082 10.3224 16.3743L10.3901 16.4507C10.6605 16.7172 11.082 16.7366 11.3744 16.5108L11.4507 16.4431L17.2841 10.5265C17.548 10.2588 17.57 9.84232 17.3501 9.54985L17.2841 9.47336L11.4507 3.5567C11.1599 3.26173 10.6851 3.25837 10.3901 3.54917Z"
                            fill="black"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="card card_size">
                    <div className="image_section">
                      <Image src={rectangle} alt="no image" />
                    </div>
                    <div className="card_description">
                      <h3>Lorem Ipsum</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur. Faucibus mauris
                        feugiat mi lorem lacus.
                      </p>
                      <a href="/casestudydetails">
                        View Case Study
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="black"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.3901 3.54917C10.1197 3.81575 10.0944 4.23698 10.316 4.53253L10.3826 4.60981L14.9583 9.24992L3.25 9.24992C2.83579 9.24992 2.5 9.5857 2.5 9.99992C2.5 10.3823 2.78611 10.6978 3.15592 10.7441L3.25 10.7499H14.9583L10.3826 15.39C10.116 15.6604 10.0966 16.082 10.3224 16.3743L10.3901 16.4507C10.6605 16.7172 11.082 16.7366 11.3744 16.5108L11.4507 16.4431L17.2841 10.5265C17.548 10.2588 17.57 9.84232 17.3501 9.54985L17.2841 9.47336L11.4507 3.5567C11.1599 3.26173 10.6851 3.25837 10.3901 3.54917Z"
                            fill="black"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="card card_size">
                    <div className="image_section">
                      <Image src={rectangle} alt="no image" />
                    </div>
                    <div className="card_description">
                      <h3>Lorem Ipsum</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur. Faucibus mauris
                        feugiat mi lorem lacus.
                      </p>
                      <a href="/casestudydetails">
                        View Case Study
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="black"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.3901 3.54917C10.1197 3.81575 10.0944 4.23698 10.316 4.53253L10.3826 4.60981L14.9583 9.24992L3.25 9.24992C2.83579 9.24992 2.5 9.5857 2.5 9.99992C2.5 10.3823 2.78611 10.6978 3.15592 10.7441L3.25 10.7499H14.9583L10.3826 15.39C10.116 15.6604 10.0966 16.082 10.3224 16.3743L10.3901 16.4507C10.6605 16.7172 11.082 16.7366 11.3744 16.5108L11.4507 16.4431L17.2841 10.5265C17.548 10.2588 17.57 9.84232 17.3501 9.54985L17.2841 9.47336L11.4507 3.5567C11.1599 3.26173 10.6851 3.25837 10.3901 3.54917Z"
                            fill="black"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="card card_size">
                    <div className="image_section">
                      <Image src={rectangle} alt="no image" />
                    </div>
                    <div className="card_description">
                      <h3>Lorem Ipsum</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur. Faucibus mauris
                        feugiat mi lorem lacus.
                      </p>
                      <a href="/casestudydetails">
                        View Case Study
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="black"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.3901 3.54917C10.1197 3.81575 10.0944 4.23698 10.316 4.53253L10.3826 4.60981L14.9583 9.24992L3.25 9.24992C2.83579 9.24992 2.5 9.5857 2.5 9.99992C2.5 10.3823 2.78611 10.6978 3.15592 10.7441L3.25 10.7499H14.9583L10.3826 15.39C10.116 15.6604 10.0966 16.082 10.3224 16.3743L10.3901 16.4507C10.6605 16.7172 11.082 16.7366 11.3744 16.5108L11.4507 16.4431L17.2841 10.5265C17.548 10.2588 17.57 9.84232 17.3501 9.54985L17.2841 9.47336L11.4507 3.5567C11.1599 3.26173 10.6851 3.25837 10.3901 3.54917Z"
                            fill="black"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="card card_size">
                    <div className="image_section">
                      <Image src={rectangle} alt="no image" />
                    </div>
                    <div className="card_description">
                      <h3>Lorem Ipsum</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur. Faucibus mauris
                        feugiat mi lorem lacus.
                      </p>
                      <a href="/casestudydetails">
                        View Case Study
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="black"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.3901 3.54917C10.1197 3.81575 10.0944 4.23698 10.316 4.53253L10.3826 4.60981L14.9583 9.24992L3.25 9.24992C2.83579 9.24992 2.5 9.5857 2.5 9.99992C2.5 10.3823 2.78611 10.6978 3.15592 10.7441L3.25 10.7499H14.9583L10.3826 15.39C10.116 15.6604 10.0966 16.082 10.3224 16.3743L10.3901 16.4507C10.6605 16.7172 11.082 16.7366 11.3744 16.5108L11.4507 16.4431L17.2841 10.5265C17.548 10.2588 17.57 9.84232 17.3501 9.54985L17.2841 9.47336L11.4507 3.5567C11.1599 3.26173 10.6851 3.25837 10.3901 3.54917Z"
                            fill="black"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="card card_size">
                    <div className="image_section">
                      <Image src={rectangle} alt="no image" />
                    </div>
                    <div className="card_description">
                      <h3>Lorem Ipsum</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur. Faucibus mauris
                        feugiat mi lorem lacus.
                      </p>
                      <a href="/casestudydetails">
                        View Case Study
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="black"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.3901 3.54917C10.1197 3.81575 10.0944 4.23698 10.316 4.53253L10.3826 4.60981L14.9583 9.24992L3.25 9.24992C2.83579 9.24992 2.5 9.5857 2.5 9.99992C2.5 10.3823 2.78611 10.6978 3.15592 10.7441L3.25 10.7499H14.9583L10.3826 15.39C10.116 15.6604 10.0966 16.082 10.3224 16.3743L10.3901 16.4507C10.6605 16.7172 11.082 16.7366 11.3744 16.5108L11.4507 16.4431L17.2841 10.5265C17.548 10.2588 17.57 9.84232 17.3501 9.54985L17.2841 9.47336L11.4507 3.5567C11.1599 3.26173 10.6851 3.25837 10.3901 3.54917Z"
                            fill="black"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="card card_size">
                    <div className="image_section">
                      <Image src={rectangle} alt="no image" />
                    </div>
                    <div className="card_description">
                      <h3>Lorem Ipsum</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur. Faucibus mauris
                        feugiat mi lorem lacus.
                      </p>
                      <a href="/casestudydetails">
                        View Case Study
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="black"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.3901 3.54917C10.1197 3.81575 10.0944 4.23698 10.316 4.53253L10.3826 4.60981L14.9583 9.24992L3.25 9.24992C2.83579 9.24992 2.5 9.5857 2.5 9.99992C2.5 10.3823 2.78611 10.6978 3.15592 10.7441L3.25 10.7499H14.9583L10.3826 15.39C10.116 15.6604 10.0966 16.082 10.3224 16.3743L10.3901 16.4507C10.6605 16.7172 11.082 16.7366 11.3744 16.5108L11.4507 16.4431L17.2841 10.5265C17.548 10.2588 17.57 9.84232 17.3501 9.54985L17.2841 9.47336L11.4507 3.5567C11.1599 3.26173 10.6851 3.25837 10.3901 3.54917Z"
                            fill="black"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="card card_size">
                    <div className="image_section">
                      <Image src={rectangle} alt="no image" />
                    </div>
                    <div className="card_description">
                      <h3>Lorem Ipsum</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur. Faucibus mauris
                        feugiat mi lorem lacus.
                      </p>
                      <a href="/casestudydetails">
                        View Case Study
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="black"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.3901 3.54917C10.1197 3.81575 10.0944 4.23698 10.316 4.53253L10.3826 4.60981L14.9583 9.24992L3.25 9.24992C2.83579 9.24992 2.5 9.5857 2.5 9.99992C2.5 10.3823 2.78611 10.6978 3.15592 10.7441L3.25 10.7499H14.9583L10.3826 15.39C10.116 15.6604 10.0966 16.082 10.3224 16.3743L10.3901 16.4507C10.6605 16.7172 11.082 16.7366 11.3744 16.5108L11.4507 16.4431L17.2841 10.5265C17.548 10.2588 17.57 9.84232 17.3501 9.54985L17.2841 9.47336L11.4507 3.5567C11.1599 3.26173 10.6851 3.25837 10.3901 3.54917Z"
                            fill="black"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="start_section ">
            <p>
              Lorem ipsum dolor sit amet consectetur Vel
              <br /> augue suspendisse
            </p>
            <button type="button" className="btn btn-lg startBtn">
              Let’s Start
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
export default CaseStudy;
