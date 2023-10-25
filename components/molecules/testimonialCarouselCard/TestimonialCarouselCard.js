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
      </figure>
      <div className={`${classes.oText}`}>
        <p className={`${classes.aTitle} fnt21f`}>{title}</p>
        <div className={`${classes.mCopy} fnt21f`}>
          {documentToReactComponents(copy)}
        </div>
      </div>
    </div>
  );
}
