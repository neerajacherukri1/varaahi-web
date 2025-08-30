import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import "./pageHeader.css";

interface BreadcrumbItem {
  label: string;   
  link?: string;   
}

interface PageHeaderProps {
  title: string; 
  breadcrumbs: BreadcrumbItem[];
  backgroundImage?: string; 
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, breadcrumbs, backgroundImage }) => {
  const defaultBackground = "/assets/images/header-bg.jpg"; 

  return (
    <div
      className="page-header"
      style={{
        backgroundImage: `url(${backgroundImage || defaultBackground})`,
      }}
    >
      <div className="overlay">
        <h1 className="page-title">{title}</h1>
        <div className="breadcrumb">
          {/* Home always first */}
          <Link to="/" className="breadcrumb-home">
            <FaHome /> Home
          </Link>

          {breadcrumbs.map((item, index) => (
            <React.Fragment key={index}>
              <span className="breadcrumb-separator"> &gt; </span>
              {item.link ? (
                <Link to={item.link} className="breadcrumb-link">
                  {item.label}
                </Link>
              ) : (
                <span className="breadcrumb-current">{item.label}</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
