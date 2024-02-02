import styles from "./footer.module.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="container-fluid" style={{backgroundColor:"rgba(225, 225, 225, 1)"}}>
        <footer className="container footer">
          <div className=" col-12">
            <div
              className="row align-items-center"
              style={{ marginBottom: "2%" }}
            >
              <div className="col-lg-5 col-md-5 mb-4 mb-md-0 section1">
                <h1 className="title">DBQP</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur.
                  <br /> Ultrices suscipit mi ut
                </p>
                <div className="icons">
                  <span>
                    <FaFacebookF size={20} />
                  </span>
                  <span>
                    <FaTwitter size={20} />
                  </span>
                  <span>
                    <FaInstagram size={20} />
                  </span>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 mb-4 mb-md-0 section2">
                <h1 className="title">About</h1>

                <ul className="list-unstyled mb-0">
                  <li>How it works</li>
                  <li>Featured</li>
                  <li>Partnership</li>
                  <li>Bussiness Relation</li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-3 mb-4 mb-md-0 section2">
                <h1 className="title">Community</h1>

                <ul className="list-unstyled mb-0">
                  <li>Events</li>
                  <li>Blogs</li>
                  <li>Podcast</li>
                  <li>Invite a friend</li>
                </ul>
              </div>
              <div className="col-lg-1 col-md-1 mb-4 mb-md-0 section2">
                <h5 className="title">Socials</h5>

                <ul className="list-unstyled mb-0">
                  <li>Discord</li>
                  <li>Instagram</li>
                  <li>Twitter</li>
                  <li>Facebook</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="copyRight">
            <div className="py-3">©2023 DBQP. All rights reserved</div>
            <div className="terms">
              <div>Privacy & Policy</div>
              <div>Terms & Condition</div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
