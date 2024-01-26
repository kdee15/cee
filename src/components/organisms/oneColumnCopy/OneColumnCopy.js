import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import classes from "./OneColumnCopy.module.scss";

export default function OneColumnCopy(contentModule) {
  console.log("vision", contentModule);
  const { title, components, customClass, hasOverlay } =
    contentModule.contentModule.fields;
  return (
    <section className={`${classes.oOneColumnCopy} ${classes[customClass]}`}>
      {components.map((copy, index) => (
        <div
          className={`${classes.oCopy} ${classes[copy.fields.customClass]} ${
            copy.fields.customClass
          }`}
          key={index}
        >
          <h3 className={classes.aTitle}>{copy.fields.title}</h3>
          <div className={classes.mCopy}>
            {documentToReactComponents(copy.fields.copy)}
          </div>
        </div>
      ))}
      {hasOverlay ? (
        <div className={classes.oOverlays}>
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
        </div>
      ) : null}
    </section>
  );
}
