import flater from "@/assets/images/flatter.svg";
import php from "@/assets/images/php.svg";
import javascript from "@/assets/images/Javascript.svg";
import clang from "@/assets/images/C++.svg";
import Python from "@/assets/images/Python.svg";
import Image from "next/image";
import rectangle from "@/assets/images/Rectangle.png";
import logo from "@/assets/images/companylogo.png";

function CaseStudyDetails() {
  return (
    <>
      <div>
        <section className="container">
          <div className="csDetails_section1">
            <div className="topSection">
              <div className="row justify-content-between align-items-center">
                <div className="Left_side col-lg-6">
                  <Image src={logo} />
                  <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Faucibus mauris
                    feugiat mi lorem lacus.
                  </p>
                  <span className="csTag">
                    Construction
                  </span>
                </div>
                <div className="right_side col-lg-5"></div>
              </div>
            </div>
            <div className="situation row justify-content-center">
              <h1>Situation</h1>
              <p className="col-lg-8">
                Lorem ipsum dolor sit amet consectetur. Eget eu vitae aliquam
                nisl elementum. Vel diam etiam gravida hendrerit integer. Libero
                penatibus scelerisque fermentum senectus et pretium. Et congue
                ut sagittis
              </p>
            </div>
          </div>
        </section>
        <section style={{ backgroundColor: "rgba(249, 249, 249, 1)" }}>
          <div className="container csDetails_section2">
            <div className="row justify-content-between align-items-center">
              <div className="Left_side col-lg-6">
                <h1>Challange</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Eget eu vitae aliquam
                  nisl elementum. Vel diam etiam gravida hendrerit integer.
                  Libero penatibus scelerisque fermentum senectus et pretium. Et
                  congue ut sagittis
                </p>
              </div>
              <div className="right_side col-lg-5"></div>
            </div>
          </div>
        </section>
        <section>
          <div className="container csDetails_section3">
            <div className="row  align-items-center">
              <div className="right_side col-lg-4"></div>
              <div className="Left_side col-lg-6">
                <h1>Outcome</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Eget eu vitae aliquam
                  nisl elementum. Vel diam etiam gravida hendrerit integer.
                  Libero penatibus scelerisque fermentum senectus et pretium. Et
                  congue ut sagittis
                </p>
              </div>
            </div>
            <div className="technology">
              <h1>Technology</h1>
              <div className="icons">
                <Image src={flater} />
                <Image src={clang} />
                <Image src={php} />
                <Image src={Python} />
                <Image src={javascript} />
              </div>
            </div>

            <div className="relatedCase">
              <h1>Related Case Studies</h1>
              <div>
                <div className="card_section">
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
                </div>
              </div>
            </div>
          </div>
        </section>
        <section style={{ backgroundColor: "rgba(0, 102, 73, 1)" }}>
          <div className="container csDetails_section4">
            <div className="row justify-content-between">
              <div className="Left_side col-lg-5">
                <h1>Lorem ipsum dolor sit amet consectetur Vel</h1>
              </div>
              <div className="right_side col-lg-5">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Eget eu vitae aliquam
                  nisl elementum.
                </p>
                <button type="button" className="btn btn-lg startBtn">
                  Let’s Start
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default CaseStudyDetails;
