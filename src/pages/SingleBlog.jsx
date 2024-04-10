import React from "react";
import ReactHelmet from "../components/ReactHelmet";
import HeadingBar from "../components/HeadingBar";
import { WiDirectionLeft } from "react-icons/wi";
import { Link } from "react-router-dom";
import leftBanner1 from "../images/catbanner-01.jpg";
export default function SingleBlog() {
  return (
    <div>
      <ReactHelmet pageTitle="dynamic" page="/blog/id" />
      <HeadingBar title="dynamic" />
      <section className="main-wrapper">
        <div className="container-xl">
          <div>
            <div className="row">
              <div className="col-12">
                <div className="blog-post-wrapper p-5">
                  <Link to="../" className="text-secondary">
                    <h5 className="fw-light">
                      <WiDirectionLeft size={30} /> Go back to Blogs
                    </h5>
                  </Link>
                  <h3>A Beautiful Sunday Mornong Renaissance</h3>
                  <div className="py-3 w-50 h-50">
                  <img src={leftBanner1} alt="blog banner" className="w-full img-fluid " />
                    </div>
                  <div className="main-section">
                    <p className="" style={{fontSize: "13px"}}>
                      What is Lorem Ipsum? Lorem Ipsum is simply dummy text of
                      the printing and typesetting industry. Lorem Ipsum has
                      been the industry's standard dummy text ever since the
                      1500s, when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has survived
                      not only five centuries, but also the leap into electronic
                      typesetting, remaining essentially unchanged. It was
                      popularised in the 1960s with the release of Letraset
                      sheets containing Lorem Ipsum passages, and more recently
                      with desktop publishing software like Aldus PageMaker
                      including versions of Lorem Ipsum. Why do we use it? It is
                      a long established fact that a reader will be distracted
                      by the readable content of a page when looking at its
                      layout. The point of using Lorem Ipsum is that it has a
                      more-or-less normal distribution of letters, as opposed to
                      using 'Content here, content here', making it look like
                      readable English. Many desktop publishing packages and web
                      page editors now use Lorem Ipsum as their default model
                      text, and a search for 'lorem ipsum' will uncover many web
                      sites still in their infancy. Various versions have
                      evolved over the years, sometimes by accident, sometimes
                      on purpose (injected humour and the like). Where does it
                      come from? Contrary to popular belief, Lorem Ipsum is not
                      simply random text. It has roots in a piece of classical
                      Latin literature from 45 BC, making it over 2000 years
                      old. Richard McClintock, a Latin professor at
                      Hampden-Sydney College in Virginia, looked up one of the
                      more obscure Latin words, consectetur, from a Lorem Ipsum
                      passage, and going through the cites of the word in
                      classical literature, discovered the undoubtable source.
                      Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
                      Finibus Bonorum et Malorum" (The Extremes of Good and
                      Evil) by Cicero, written in 45 BC. This book is a treatise
                      on the theory of ethics, very popular
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
