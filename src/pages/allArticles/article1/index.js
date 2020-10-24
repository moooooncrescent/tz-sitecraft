import React from "react";
import "./index.css";
import check from "../../../images/check.png";
import pic1 from "../../../images/pic1.png";
import pic2 from "../../../images/pic2.png";
import pic3 from "../../../images/pic3.png";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/article1");
  };
  return (
    <div className="home">
      <div className="articleup">
        <p>
          12 марта 2020
          <Link className="articleuplink1" to="/about">
            Лемезит
          </Link>
          <Link className="articleuplink2" to="/tutorial">
            Обучающий материал
          </Link>
          <Link className="articleuplink3" to="/article1">
            Камень для дорожек
          </Link>
        </p>
      </div>

      <div className="article" id="article">
        <hr />
        <h1 className="articletitle">Как выбрать камень для дорожек?</h1>
        <p className="font-weight-light">
          Ландшафтный дизайн на сегодняшний день развивается чрезвычайно
          активно, а для создания завершенного образа приусадебного участка
          необходимо выполнить мощение дорожек из красивого природного камня,
          гармонирующего с другими элементами, так как дорожка связывает все
          объекты на участке.
        </p>

        <p className="font-weight-light">
          Среди огромного ассортимента представленных в нашем каталоге видов
          природных материалов, достаточно сложно подобрать оптимальный вариант,
          так как необходимо учитывать огромное количество параметров. В первую
          очередь стоит разделить понятия породы и типа натурального камня.
        </p>
        <img className="pic1" src={pic1} alt="pic1" />
        <h3>Как выбрать камень для дорожек?</h3>
        <p className="font-weight-light">
          Ландшафтный дизайн на сегодняшний день развивается чрезвычайно
          активно, а для создания завершенного образа приусадебного участка
          необходимо выполнить мощение дорожек из красивого природного камня,
          гармонирующего с другими элементами, так как дорожка связывает все
          объекты на участке.
        </p>
        <p className="font-weight-light">
          Среди огромного ассортимента представленных в нашем каталоге видов
          природных материалов, достаточно сложно подобрать оптимальный вариант,
          так как необходимо учитывать огромное количество параметров. В первую
          очередь стоит разделить понятия породы и типа натурального камня.
        </p>

        <p className="font-weight-light">
          <img src={check} width="20" height="20" alt="check" /> Порода связана
          с его физическими параметрами и химическим составом. Наиболее
          доступной, надёжной и востребованной для мощения дорожки породой
          является песчаник, обладающий различными разновидностями.
        </p>
        <p className="font-weight-light">
          <img src={check} width="20" height="20" alt="check" /> Тип указывает в
          первую очередь на его форму, размер и способ обработки, которую он
          прошел от этапа добычи до попадания в магазин. Основными типами
          являются булыжник, плитняк и брусчатка.
        </p>
      </div>
      <div className="morearticles">
        <div className="heading">
          <h1>Читайте так же:</h1>
        </div>
        <Link className="allarticleslink" to="/">
          Все статьи &gt;
        </Link>
        <div className="blocks">
          <div className="block1">
            <img className="pic2" src={pic2} alt="pic2" onClick={handleClick} />
            <div className="font-weight-light">
              <p className="blockdata1">12 марта 2020</p>
              <h4 className="blocklabel1" onClick={handleClick}>
                Как выбрать камень для дорожек?
              </h4>
              <p className="blocktext1">
                Рассказываем как выбрать камень для мощения садовых дорожек и
                дорожек с большой проходимостью.
                <p className="blocklinks1">
                  <Link className="blocklink1" to="/tutorial">
                    Обучающий материал
                  </Link>
                  <Link className="blocklink1" to="article1">
                    Камень для дорожек
                  </Link>
                </p>
              </p>
            </div>
          </div>
          <div className="block2">
            <img className="pic3" src={pic3} alt="pic3" onClick={handleClick} />
            <div className="font-weight-light">
              <p className="blockdata2">12 марта 2020</p>
              <h4 className="blocklabel2" onClick={handleClick}>
                Почему важно покупать у проверенных поставщиков
              </h4>
              <p className="blocktext2">
                Рассказываем как выбрать камень для мощения садовых дорожек и
                дорожек с большой проходимостью.
                <p className="blocklinks2">
                  <Link className="blocklink2" to="/tutorial">
                    Обучающий материал
                  </Link>
                  <Link className="blocklink2" to="/article1">
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
export default Home;
