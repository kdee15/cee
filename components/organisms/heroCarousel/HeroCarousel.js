import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import classes from "./HeroCarousel.module.scss";
import ImageCarousel from "../../molecules/imageCarousel/ImageCarousel";
import CtaList from "../../molecules/ctaList/CtaList";
// import testimonialSettings from "./config/carouselSettings.json";

export default function HeroCarousel(props) {
  /**
   * return null needed for react render func
   */
  if (!props) return null;

  const { title, copy, hasOverlay } = props.contentModule.fields;
  const CarouselImages = props.contentModule.fields.imageCarousel.fields.images;
  const ctaList = props.contentModule.fields;

  return (
    <div className={`${classes.oHeroCarouselBanner}`}>
      <div className={`${classes.oCarouselRegion}`}>
        <ImageCarousel contentModule={CarouselImages} />
        <div className={classes.mTitle}>
          <h2 className={`${classes.aTitle} fntH2`}>
            {documentToReactComponents(title)}
          </h2>
        </div>
      </div>
      <div className={`${classes.oBottom}`}>
        <div className={`${classes.mCopy} fnt18f`}>
          {documentToReactComponents(copy)}
        </div>
        <CtaList contentModule={ctaList} />
      </div>
      {hasOverlay ? (
        <div className={classes.oOverlays}>
          <span>
            <svg
              x="0px"
              y="0px"
              viewBox="0 0 287.3 286.9"
              style={{ enableBackground: `new 0 0 287.3 286.9` }}
              className={classes.aCircleThin}
            >
              <path
                d="M143.5,0C64.2,0,0,64.2,0,143.5S64.2,287,143.5,287S287,222.8,287,143.5S222.8,0,143.5,0z M143.5,264.3
	c-66.7,0-120.8-54.1-120.8-120.8S76.8,22.7,143.5,22.7s120.8,54.1,120.8,120.8S210.2,264.3,143.5,264.3z"
              />
            </svg>
          </span>
          <span>
            <svg
              x="0px"
              y="0px"
              viewBox="0 0 287.3 286.9"
              style={{ enableBackground: `new 0 0 287.3 286.9` }}
              className={classes.aCircle}
            >
              <path
                d="M143.5,0C64.2,0,0,64.2,0,143.5S64.2,287,143.5,287S287,222.8,287,143.5S222.8,0,143.5,0z M144,251.3
	c-59.8,0-108.3-48.5-108.3-108.3S84.2,34.7,144,34.7S252.3,83.2,252.3,143S203.8,251.3,144,251.3z"
              />
            </svg>
          </span>
          <span>
            <svg
              x="0px"
              y="0px"
              viewBox="0 0 128.3 289.9"
              style={{ enableBackground: `new 0 0 128.3 289.9` }}
              className={classes.aCircleHalf}
            >
              <path d="M0,0.3v23.3c59.3,8.8,104.8,59.9,104.8,121.6S59.3,258,0,266.7V290c72.1-9,127.8-70.4,127.8-144.9S72.1,9.2,0,0.3z" />
            </svg>
          </span>
          <span>
            <svg
              x="0px"
              y="0px"
              viewBox="0 0 264.3 289.9"
              style={{ enableBackground: `new 0 0 264.3 289.9` }}
              className={classes.aCircleQuarter}
            >
              <path
                d="M263.5,13.3C241.7,4.7,217.9,0,193,0C86.4,0,0,86.4,0,193c0,35.6,9.6,68.9,26.4,97.5H63c-20.4-27.2-32.5-60.9-32.5-97.5
	c0-89.7,72.8-162.5,162.5-162.5c25.3,0,49.2,5.8,70.5,16V13.3z"
              />
            </svg>
          </span>
        </div>
      ) : null}
    </div>
  );
}
