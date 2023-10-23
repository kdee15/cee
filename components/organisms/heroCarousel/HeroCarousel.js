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

  const { title, copy, ctaRegion } = props.contentModule.fields;
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
    </div>
  );
}
