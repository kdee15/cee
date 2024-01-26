import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import classes from "./HeroBanner.module.scss";
import CtaList from "../../molecules/ctaList/CtaList";
// import testimonialSettings from "./config/carouselSettings.json";

export default function HeroBanner(props) {
  /**
   * return null needed for react render func
   */
  if (!props) return null;

  const { title, copy, backgroundImage, customClass } =
    props.contentModule.fields;
  const ctaList = props.contentModule.fields;

  return (
    <div className={`${classes.oHeroBanner} ${classes[customClass]}`}>
      <div className={`${classes.oBody}`}>
        <div className={classes.mTitle}>
          <div className={`${classes.aTitle} fnt29`}>
            {documentToReactComponents(title)}
          </div>
        </div>
        <div className={`${classes.mCopy} fnt18`}>
          {documentToReactComponents(copy)}
          <CtaList contentModule={ctaList} />
        </div>
      </div>

      <div
        className={`${classes.aBackgroundImage}`}
        style={{
          backgroundImage: `url(http:${backgroundImage.fields.file.url})`,
        }}
      ></div>
    </div>
  );
}
