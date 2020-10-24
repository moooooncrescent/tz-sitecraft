import React from "react";
import pic2 from "../../images/pic2.png";
import pic3 from "../../images/pic3.png";
import { Link } from "react-router-dom";
import "./index.css";
import { useHistory } from "react-router-dom";

function AllArticles() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/article1");
  };
  return (
    <div className="allarticles">
      <div className="homehead">
        <div className="title">
          <h1>Статьи</h1>
        </div>
        <div className="headblocks">
          <a
            className="btn btn-outline-warning text-dark"
            data-toggle="collapse"
            href="/"
            role="button"
            aria-expanded="false"
          >
            Все
            <span className="badge badge-pill badge-warning ml-2">20</span>
          </a>
          <a
            className="btn btn-outline-warning text-dark"
            data-toggle="collapse"
            href="/help"
            role="button"
            aria-expanded="false"
          >
            Помощь в выборе
            <span className="badge badge-pill badge-warning ml-2">3</span>
          </a>
          <a
            className="btn btn-outline-warning text-dark"
            data-toggle="collapse"
            href="/tutorial"
            role="button"
            aria-expanded="false"
          >
            Обучающий материал
            <span className="badge badge-pill badge-warning ml-2">7</span>
          </a>
          <a
            className="btn btn-outline-warning text-dark"
            data-toggle="collapse"
            href="/news"
            role="button"
            aria-expanded="false"
          >
            Новости
            <span className="badge badge-pill badge-warning ml-2">1</span>
          </a>
          <a
            className="btn btn-outline-warning text-dark"
            data-toggle="collapse"
            href="/about"
            role="button"
            aria-expanded="false"
          >
            О добыче
            <span className="badge badge-pill badge-warning ml-2">9</span>
          </a>
          <a
            className="btn btn-outline-warning text-dark"
            data-toggle="collapse"
            href="/more"
            role="button"
            aria-expanded="false"
          >
            Еще
          </a>
        </div>
      </div>
      <div className="articlesblocks">
        <div className="blockscontainer">
          <div className="articleblock1">
            <img
              className="pic21"
              src={pic2}
              alt="pic21"
              onClick={handleClick}
            />
            <div className="font-weight-light">
              <p className="articleblockdata1">12 марта 2020</p>
              <h4 className="articleblocklabel1" onClick={handleClick}>
                Как выбрать камень для дорожек?
              </h4>
              <p className="articleblocktext1">
                Рассказываем как выбрать камень для мощения садовых дорожек и
                дорожек с большой проходимостью.
                <p className="articleblocklinks1">
                  <Link className="articleblocklink1" to="/tutorial">
                    Обучающий материал
                  </Link>
                  <Link className="articleblocklink1" to="/article1">
                    Камень для дорожек
                  </Link>
                </p>
              </p>
            </div>
          </div>
          <div className="articleblock2">
            <img
              className="pic22"
              src={pic3}
              alt="pic22"
              onClick={handleClick}
            />
            <div className="font-weight-light">
              <p className="articleblockdata2">12 марта 2020</p>
              <h4 className="articleblocklabel2" onClick={handleClick}>
                Как выбрать камень для дорожек?
              </h4>
              <p className="articleblocktext2">
                Рассказываем как выбрать камень для мощения садовых дорожек и
                дорожек с большой проходимостью.
                <p className="articleblocklinks2">
                  <Link className="articleblocklink2" to="/tutorial">
                    Обучающий материал
                  </Link>
                  <Link className="articleblocklink2" to="/article1">
                    Камень для дорожек
                  </Link>
                </p>
              </p>
            </div>
          </div>
        </div>
        <div className="blockscontainer">
          <div className="articleblock1">
            <img
              className="pic21"
              src={pic2}
              alt="pic21"
              onClick={handleClick}
            />
            <div className="font-weight-light">
              <p className="articleblockdata1">12 марта 2020</p>
              <h4 className="articleblocklabel1" onClick={handleClick}>
                Как выбрать камень для дорожек?
              </h4>
              <p className="articleblocktext1">
                Рассказываем как выбрать камень для мощения садовых дорожек и
                дорожек с большой проходимостью.
                <p className="articleblocklinks1">
                  <Link className="articleblocklink1" to="/tutorial">
                    Обучающий материал
                  </Link>
                  <Link className="articleblocklink1" to="/article1">
                    Камень для дорожек
                  </Link>
                </p>
              </p>
            </div>
          </div>
          <div className="articleblock2">
            <img
              className="pic22"
              src={pic3}
              alt="pic22"
              onClick={handleClick}
            />
            <div className="font-weight-light">
              <p className="articleblockdata2">12 марта 2020</p>
              <h4 className="articleblocklabel2" onClick={handleClick}>
                Как выбрать камень для дорожек?
              </h4>
              <p className="articleblocktext2">
                Рассказываем как выбрать камень для мощения садовых дорожек и
                дорожек с большой проходимостью.
                <p className="articleblocklinks2">
                  <Link className="articleblocklink2" to="/tutorial">
                    Обучающий материал
                  </Link>
                  <Link className="articleblocklink2" to="/article1">
                    Камень для дорожек
                  </Link>
                </p>
              </p>
            </div>
          </div>
        </div>
        <div className="blockscontainer">
          <div className="articleblock1">
            <img
              className="pic21"
              src={pic2}
              alt="pic21"
              onClick={handleClick}
            />
            <div className="font-weight-light">
              <p className="articleblockdata1">12 марта 2020</p>
              <h4 className="articleblocklabel1" onClick={handleClick}>
                Как выбрать камень для дорожек?
              </h4>
              <p className="articleblocktext1">
                Рассказываем как выбрать камень для мощения садовых дорожек и
                дорожек с большой проходимостью.
                <p className="articleblocklinks1">
                  <Link className="articleblocklink1" to="/tutorial">
                    Обучающий материал
                  </Link>
                  <Link className="articleblocklink1" to="/article1">
                    Камень для дорожек
                  </Link>
                </p>
              </p>
            </div>
          </div>
          <div className="articleblock2">
            <img
              className="pic22"
              src={pic3}
              alt="pic22"
              onClick={handleClick}
            />
            <div className="font-weight-light">
              <p className="articleblockdata2">12 марта 2020</p>
              <h4 className="articleblocklabel2" onClick={handleClick}>
                Как выбрать камень для дорожек?
              </h4>
              <p className="articleblocktext2">
                Рассказываем как выбрать камень для мощения садовых дорожек и
                дорожек с большой проходимостью.
                <p className="articleblocklinks2">
                  <Link className="articleblocklink2" to="/tutorial">
                    Обучающий материал
                  </Link>
                  <Link className="articleblocklink2" to="/article1">
                    Камень для дорожек
                  </Link>
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AllArticles;
