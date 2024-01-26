import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import classes from "./TestimonialCarouselCard.module.scss";

export default function TestimonialCarouselCard(props) {
  const { title, copy, image } = props.fields;
  // const author_image = author_picture?.data?.attributes?.url;

  return (
    <div className={`${classes.oCard} ${classes.testimonials}`}>
      <figure className={`${classes.oImage}`}>
        <div
          className={`${classes.aImage}`}
          style={{
            backgroundImage: `url(http:${image.fields.file.url})`,
          }}
        ></div>
        <p className={`${classes.aTitle} fnt16b`}>{title}</p>
      </figure>
      <div className={`${classes.oText}`}>
        <div className={`${classes.mCopy} fnt15f`}>
          {documentToReactComponents(copy)}
        </div>
      </div>
    </div>
  );
}
