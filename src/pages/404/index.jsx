import Title from 'antd/es/typography/Title';
import './404.css';

function PageNotFound() {
  return (
    <div className="page-not-found">
      <div className="page-not-found__text">
        <Title level={1}>
          Oops! This page is not ready yet :(
        </Title>
        <Title level={5}>
          Be patient. Our team are working on this one.
        </Title>
      </div>
    </div>
  );
}

export default PageNotFound;
