import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import classes from "./TwoColumnCopyImage.module.scss";
import Image from "next/image";

export default function TwoColumnCopyImage(contentModule) {
  const { title, copy, image, isBackground, copyPosition, customClass } =
    contentModule.contentModule.fields;
  console.log("copyPosition", copyPosition);
  return (
    <section
      className={`${classes.oTwoColumnCopyImage} ${classes[customClass]} ${
        isBackground ? classes.yes : classes.no
      }`}
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
        <div className={`${classes.oRow} ${classes[copyPosition]} row`}>
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
