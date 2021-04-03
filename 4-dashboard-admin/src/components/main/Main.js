import React from 'react';
import './Main.css';
import Hello from '../../assets/images/hello.png';
import Chart from '../charts/Chart';

const Main = () => {
  return (
    <main>
      <div className="main__container">
        <div className="main__title">
          <img src={Hello} alt="Hello" />
          <div className="main__gretting">
            <h1>Hello MRTECH</h1>
            <p>Bem-Vindo ao seu painel administrativo</p>
          </div>
        </div>
        <div className="main__cards">
          <div className="card">
            <i className="fa fa-user-o fa-2x text-lightblue"></i>
            <div className="card_inner">
              <p className="text-primary-p">Número de inscritos</p>
              <span className="font-bold text-title">500</span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-calendar fa-2x text-red"></i>
            <div className="card_inner">
              <p className="text-primary-p">Tempo Assistindo</p>
              <span className="font-bold text-title">2400</span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-video-camera fa-2x text-yellow"></i>
            <div className="card_inner">
              <p className="text-primary-p">Número de Vídeos</p>
              <span className="font-bold-text-title">10</span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-thumbs-up fa-2x text-green"></i>
            <div className="card_inner">
              <p className="text-primary-p">Número de Curtidas</p>
              <span className="font-bold text-title">100</span>
            </div>
          </div>
        </div>

        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Relatórios Diários</h1>
                <p>Cuppertino, California, USA</p>
              </div>
              <i className="fa fa-usd"></i>
            </div>
            <Chart />
          </div>

          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>Status Relatórios</h1>
                <p>Cupertino, California, USA</p>
              </div>
              <i className="fa fa-usd"></i>
            </div>

            <div className="charts__right__cards">
              <div className="card1">
                <h1>Entrada</h1>
                <p>R$ 300,00</p>
              </div>

              <div className="card2">
                <h1>Vendas</h1>
                <p>R$ 20,00</p>
              </div>

              <div className="card3">
                <h1>Usuários</h1>
                <p>211</p>
              </div>

              <div className="card4">
                <h1>Orders</h1>
                <p>1001</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
