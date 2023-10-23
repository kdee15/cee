import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import classes from "./CapsuleItemList.module.scss";

export default function CapsuleItemList(contentModule) {
  const { title, copy, backgroundImage, customClass, capsules } =
    contentModule.contentModule.fields;
  return (
    <section className={`${classes.oCapsuleItemList} ${classes[customClass]}`}>
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
          {title ? (
            <h2 className={`${classes.aTitle} fntH2`}>{title}</h2>
          ) : null}
          {copy ? (
            <div className={`${classes.oColText} col fnt18f`}>
              {documentToReactComponents(copy)}
            </div>
          ) : null}
        </div>
      </div>
      <div className={classes.oCapsules}>
        {capsules.map((item, index) => (
          <div key={index} className={`${classes.mCapsuleCard}`}>
            <div className={`${classes.aTitle} fnt38f`}>
              <span>{item.fields.title}</span>
              <span>{item.fields.symbol}</span>
            </div>
            <p className={`${classes.mCopy} fnt28f`}>{item.fields.copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
