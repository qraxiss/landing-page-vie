import React from 'react';
//= Page components
import Loading from '@/components/Common/Loader';
import Footer from "@/components/Common/HomeFooter";
import PageHeader from '@/components/Headers/PageHeader';
import BlogList from '@/components/Blogs/BlogList';
import Navbar from "@/components/Common/HomeNavbar";

export const metadata = {
  title: 'Vie - Blog List Dark'
}

export default function BlogListPage() {
  return (
    <>
      <Loading />
      <div className="circle-bg">
        <div className="circle-color fixed">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
      <Navbar />
      <PageHeader classText="sub-bg" title="Our Blogs."
        paragraph="All the most current news and events of our creative team." />
      <BlogList />
      <Footer />
    </>
  )
}
