import { useEffect, MouseEventHandler } from "react"
import "../setPublic/scss/init.scss"
import anime from 'animejs/lib/anime.es.js';

import Anglia from "./country/anglia";
import Spania from "./country/spania";
import Sua from "./country/SUA";
import Franta from "./country/franta";
import Doc1 from "./docs/doc1";
import Doc2 from "./docs/doc2";
import Doc3 from "./docs/doc3";
import Italia from "./country/italia";
import Doc4 from "./docs/doc4";
import Doc5 from "./docs/doc5";
import Doc6 from "./docs/doc6";

function App() {
  // function bottomContainerSize(): void {
  //   const topContainer: any = document.getElementsByClassName('topContaienr')[0]
  //   const bottomContainer: any = document.getElementsByClassName('bottomContainer')[0]
  //   bottomContainer.style.height = window.innerHeight - topContainer.clientHeight - 32 + "px"
  // }
  function openClick(country: string): void {
    const animeCountry = anime.timeline({ targets: "."+country })
    animeCountry.add({
      begin: function() {
        const ele: any = document.querySelector("."+country)
        ele.style.display = 'flex';
      },
      translateY: [
        {value: 100, duration: 0},
        {value: 0}
      ],
      opacity: 1,
      duration: 1000
    })
  }
  function closeClick(country: string): any {
    const test = anime.timeline({ targets: "."+country })
    test.add({
      begin: function(): void {
        const ele: any = document.querySelectorAll('.'+country)
        for(let i = 0; i<ele.length; i++) {
          ele[i].style.display = 'none';
        }
      },
      translateY: 100,
      opacity: 0,
      duration: 1000
    })
  }
  return (<>
  <Spania closeClick={closeClick}/>
  <Franta closeClick={closeClick}/>
  <Sua closeClick={closeClick}/>
  <Anglia closeClick={closeClick}/>
  <Italia closeClick={closeClick}/>
  <div className="container">
    <div className="topContaienr">
      <div className="topContent">
        <div className="top">
          <div className="subTitle">Vol. 47 - No. 184</div>
          <div className="title">Drepturile Omului</div>
          <div className="subTitle">Price : 0.25$</div>
        </div>
        <div className="titleDescription">
          <div className="line"></div>
          <div className="text">top2 - Lorem, ipsum dolor.</div>
        </div>
        <div className="countryBox">
          <div onClick={() => openClick("spania")}>Spania</div>
          <div className="countryDes">|</div>
          <div onClick={() => openClick("anglia")}>Anglia</div>
          <div className="countryDes">|</div>
          <div onClick={() => openClick("sua")}>SUA</div>
          <div className="countryDes">|</div>
          <div onClick={() => openClick("franta")}>Franta</div>
          <div className="countryDes">|</div>
          <div onClick={() => openClick("italia")}>Italia</div>
        </div>
      </div>
    </div>
    <div className="bottomContainer">
      <div className="leftContent">
        <div className="text1">Epoca moderna</div>
        <div className="foto leftContentFoto"></div>
        <div className="groupText">
          <div className="text2">Prevederile epocii moderne.</div>
          <div className="text4">Epoca modernă este considerată a fi perioada ce a succedat Evului Mediu. Ca și epocile anterioare, aceasta nu are un început stabilit într-o dată anume. Tranziția de la Evul Mediu la Modernitate a fost relaționată în mod convențional cu evenimente majore ca Reforma Protestantă, care promova conștiința critică asupra religiei și bisericii, Descoperirea Americii, care a lărgit perspectivele asupra lumii sau Umanismul, care a contribuit la formarea unei noi viziuni în multe domenii.</div>
        </div>
      </div>
      <div className="centerContent">
          <div><Doc1 /></div>
          <div><Doc2 /></div>
          <div><Doc3 /></div>
          <div><Doc4 /></div>
          <div><Doc5 /></div>
          <div><Doc6 /></div>
      </div>
      <div className="rightContent">
        <div className="text1">Drepturile Omului</div>
        <div className="foto rightContentFoto"></div>
        <div className="groupText">
          <div className="text2">Secolul XVII-XX</div>
          <div className="text3">Drepturile naturale ale Omului</div>
          <div className="text4">În timp ce credința în sfințenia vieții umane are precedente vechi în multe religii ale lumii, fundamentele drepturilor omului moderne au început în epoca umanismului renascentist , în perioada modernă timpurie . Războaiele europene de religie și războaiele civile din Regatul Angliei din secolul al XVII-lea au dat naștere filozofiei liberalismului , iar credința în drepturile naturale a devenit o preocupare centrală a culturii intelectuale europene în timpul epocii iluminismului din secolul al XVIII-lea . Ideile de drepturi naturale , care aveau o bază în dreptul natural , s-au aflat în centrul americanului și revoluțiile franceze care au avut loc spre sfârșitul acelui secol, dar ideea drepturilor omului a apărut mai târziu. Evoluția democratică prin secolul al XIX-lea a deschis calea pentru apariția votului universal în secolul al XX-lea. Două războaie mondiale au dus la crearea Declarației Universale a Drepturilor Omului.
          <br />
          <br />
          Ziar Publicat De Cojocaru Savatie și Grăjdian Cristian
          </div>
        </div>
      </div>
    </div>
  </div>
  </>)
}

export default App