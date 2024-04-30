import React from "react";
import Link from "next/link";
import blogs from "@/data/blogs2.json";

const Blogs2 = () => {
  return (
    <>
      <div className="line bottom right blog-line"></div>

      <section id="blog" className="blog-list section-padding sub-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="head md-mb50">
                <h6 className="back-color">Pulse Check</h6>
                <h3>
                  Stay Updated <br /> Stay Ahead!
                </h3>
                <p>Explore the latest trends and innovations with us.</p>
                <Link href="/blog/blog-dark">
                  <span>More Blog Posts</span>
                </Link>
              </div>
            </div>
            <div className="col-lg-7 offset-lg-1">
            {blogs.map((blogItem, idx) => (
              
                <div key={`idx-${idx}`} className="item wow fadeInUp" data-wow-delay=".3s">
                  <div className="img valign">
                    <img src={blogItem.image} alt="" />
                  </div>
                  <div className="cont valign">
                    <div>
                      <div className="info">
                        <Link href="/blog/blog-dark" className="date">
                          <span>
                            <i>{blogItem.date.day}</i> {blogItem.date.month}
                          </span>
                        </Link>
                      </div>
                      <h5>
                        <Link href={`/blog-details/?id=${blogItem.id}`}>
                        {blogItem.title}
                        </Link>
                      </h5>
                    </div>
                  </div>
                </div>
              
            ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs2;
