import { useNavigate } from "react-router-dom";
import { Button } from '../../components/Button/Button';
import notFoundImg from '../../assets/notFoundPage.png';

import "./NotFoundPage.scss";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <main className="pageWrapper NotFoundPage">
      <section className="NotFoundPage__left">
        <h1 className="NotFoundPage__title">Oops....</h1>
        <h1 className="NotFoundPage__title">Page not found</h1>
        <p className="NotFoundPage__text">This Page doesn`t exist or was removed! We suggest you go back.</p>
        <Button
          className="Button NotFoundPage__button"
          onClick={() => navigate(-1)}
        >
          Go Back
        </Button>
      </section>
      <img
        className="NotFoundPage__img"
        src={notFoundImg}
        alt="Not found page"
        width={526}
        height={526}
      />
    </main>
  );
}
export default NotFoundPage;