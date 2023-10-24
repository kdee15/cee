import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import classes from "./TwoColumnText.module.scss";

export default function TwoColumnText(contentModule) {
  const {
    title,
    copyRight,
    copyRightPosition,
    copyLeft,
    copyLeftPosition,
    backgroundImage,
    customClass,
  } = contentModule.contentModule.fields;
  return (
    <section
      className={`${classes.oTwoColumnTextBlock} ${classes[customClass]}`}
    >
      {backgroundImage ? (
        <div
          className={`${classes.oBackgroundImage}`}
          style={{
            backgroundImage: `url(http:${backgroundImage.fields.file.url})`,
          }}
        ></div>
      ) : null}
      <div className={`${classes.oContainer} container`}>
        <div className={`${classes.oRow} row`}>
          <div
            className={`${classes.oColLeft} col-12 col-md-6`}
            style={{
              alignSelf: `${copyLeftPosition}`,
            }}
          >
            {documentToReactComponents(copyLeft)}
          </div>
          <div
            className={`${classes.oColRight} col-12 col-md-6`}
            style={{
              alignSelf: `${copyRightPosition}`,
            }}
          >
            {documentToReactComponents(copyRight)}
          </div>
        </div>
      </div>
    </section>
  );
}
