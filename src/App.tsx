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
          <div className="text4">Epoca modern?? este considerat?? a fi perioada ce a succedat Evului Mediu. Ca ??i epocile anterioare, aceasta nu are un ??nceput stabilit ??ntr-o dat?? anume. Tranzi??ia de la Evul Mediu la Modernitate a fost rela??ionat?? ??n mod conven??ional cu evenimente majore ca Reforma Protestant??, care promova con??tiin??a critic?? asupra religiei ??i bisericii, Descoperirea Americii, care a l??rgit perspectivele asupra lumii sau Umanismul, care a contribuit la formarea unei noi viziuni ??n multe domenii.</div>
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
          <div className="text4">??n timp ce credin??a ??n sfin??enia vie??ii umane are precedente vechi ??n multe religii ale lumii, fundamentele drepturilor omului moderne au ??nceput ??n epoca umanismului renascentist , ??n perioada modern?? timpurie . R??zboaiele europene de religie ??i r??zboaiele civile din Regatul Angliei din secolul al XVII-lea au dat na??tere filozofiei liberalismului , iar credin??a ??n drepturile naturale a devenit o preocupare central?? a culturii intelectuale europene ??n timpul epocii iluminismului din secolul al XVIII-lea . Ideile de drepturi naturale , care aveau o baz?? ??n dreptul natural , s-au aflat ??n centrul americanului ??i revolu??iile franceze care au avut loc spre sf??r??itul acelui secol, dar ideea drepturilor omului a ap??rut mai t??rziu. Evolu??ia democratic?? prin secolul al XIX-lea a deschis calea pentru apari??ia votului universal ??n secolul al XX-lea. Dou?? r??zboaie mondiale au dus la crearea Declara??iei Universale a Drepturilor Omului.
          <br />
          <br />
          Ziar Publicat De Cojocaru Savatie ??i Gr??jdian Cristian
          </div>
        </div>
      </div>
    </div>
  </div>
  </>)
}

export default App