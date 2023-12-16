import React from "react";
import "./Overview.css";
import Button from 'react-bootstrap/Button';
import LeftBar from "../../Components/LeftBar/Leftbar"; 

const Overview = () => {

  return (
    <div className="overview-of-course">
      <LeftBar /> 
      <img className="toggle-icon" alt="" src="/toggle.svg" />
      <div className="resources">Overview</div>
      <div className="resources2">{`Lập trình nhúng`}</div>
      <div className="course-details-software-container">
        <p className="course-details">{`Chi tiết khóa học: `}</p>
        <p className="course-details">&nbsp;</p>
        <p className="course-details-1">
        Lập trình nhúng là một loại lập trình để chỉ cho hệ thống có khả năng tự trị. Hệ thống này sẽ được nhúng vào môi trường, hệ thống khác, thường được gọi là hệ thống “mẹ”. Các hệ thống này được tích hợp cùng với phần mềm, phần cứng khác nhau.

Mục đích của lập trình nhúng là để phục vụ cho những bài toán, vấn đề chuyên dụng trong lĩnh vực tự động hóa điều khiển, công nghệ truyền tin. Do đó, lập trình nhúng thường được thực hiện để thiết kế một chức năng riêng biệt nào đó trong hệ thống này.

        </p>

        <p className="course-details">Mục tiêu:</p>
        <p className="course-details">&nbsp;</p>
        <ul className="what-is-software-security-ana">
          <li className="what-is-software">Lập trình nhúng là gì</li>
          <li className="what-is-software">
            Phân biệt vi xử lý và vi điều khiển
          </li>
          <li className="what-is-software">
            Thiết kế các chương trình cơ bản
          </li>
          <li className="what-is-software">Các công cụ hỗ trợ</li>
          <li className="what-is-software">
            Triển khai dự án thực tế
          </li>
          <li className="what-is-software">IoT và lập trình nhúng</li>
          <li className="what-is-software">Đánh giá sản phẩm</li>
        </ul>
        <p className="course-details">&nbsp;</p>
      </div>
     
         <Button className="button-base">
            <div className="text-2">Join</div>
        </Button>     
    </div>
  );
};

export default Overview;
