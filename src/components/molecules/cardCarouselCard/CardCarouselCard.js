import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import classes from "./CardCarouselCard.module.scss";

export default function CardCarouselCard(props) {
  const { title, copy, image, isBackground, copyPosition, customClass } =
    props.fields;
  // const author_image = author_picture?.data?.attributes?.url;

  return (
    <section
      className={`${classes.oCard} ${classes.cardCarouselCard} ${
        classes[customClass]
      } ${isBackground ? classes.backgroundCard : classes.normCard}`}
    >
      {isBackground ? (
        <div
          className={`${classes.aBackgroundImage} ${classes[copyPosition]}`}
          style={{
            backgroundImage: `url(http:${image.fields.file.url})`,
          }}
        ></div>
      ) : null}
      <div className={`${classes.oContainer} container`}>
        <div className={`${classes.oRow}  ${classes[copyPosition]} row`}>
          <div className={`${classes.oColImage} col-12 col-md-6`}>
            {isBackground ? null : (
              <Image
                className={`${classes.aImage}`}
                src={`https:${image?.fields?.file?.url}`}
                alt={`title`}
                width={image?.fields.file.details.image.width}
                height={image?.fields.file.details.image.height}
                aria-hidden="true"
                layout="responsive"
                priority="true"
              />
            )}
          </div>
          <div className={`${classes.oColBody} col-12 col-md-6 fnt31`}>
            {documentToReactComponents(copy)}
          </div>
        </div>
      </div>
    </section>
  );
}
