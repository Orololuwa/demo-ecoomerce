import React from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Carousel = (props) => (
  <AutoPlaySwipeableViews enableMouseEvents>
    {props.children}
  </AutoPlaySwipeableViews>
);

export default Carousel;
