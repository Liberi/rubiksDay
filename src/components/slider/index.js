import { observer } from "mobx-react-lite";

import SliderController from "../../store/sliderController.js";
import HederMenuController from "../../store/hederMenuController.js";
import SliderItem from "./sliderItem";
import "./stiles.slyder.css";
import "./slider.anim.css";

export default observer(function Slider(props) {
  SliderController.updateDataSlider(props.dataSlider);

  return (
    <section className="flex sectionSlider"
      style={HederMenuController.isOpenMenu ? {paddingTop: 70} : null}
    >
      <div className="buttonContainer flex">
        <button
          className={
            `${SliderController.isFirstClick ? 'buttonPulsation' : ''}`
          }
          onClick={() => {
            !SliderController.isFirstClick || SliderController.firstClick();
            SliderController.updateAnimSlider(true);
            SliderController.updateIndexSlider(-1);
            /* setTimeout(() =>{
              // SliderController.updateAnimSlider(false);
              SliderController.updateIndexSlider(-1);
            }, 500); */
          }}
        />
      </div>
      <div className="comtainerSlider">
        <SliderItem />
      </div>
      <div className="buttonContainer flex">
        <button
          className={
            `${SliderController.isFirstClick ? 'buttonPulsation' : ''}`
          }
          onClick={() => {
            !SliderController.isFirstClick || SliderController.firstClick();
            SliderController.updateAnimSlider(true);
            SliderController.updateIndexSlider(1);
            /* setTimeout(() =>{
              // SliderController.updateAnimSlider(true);
              SliderController.updateIndexSlider(1);
            }, 500); */
          }}
        />
      </div>
    </section>
  );
});
