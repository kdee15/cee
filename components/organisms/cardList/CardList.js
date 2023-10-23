import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import classes from "./CardList.module.scss";

export default function CardList(contentModule) {
  const { title, cards, customClass } = contentModule.contentModule.fields;
  console.log("contentModule", contentModule);
  return (
    <section className={`${classes.oCardList} ${classes[customClass]}`}>
      <div className={`${classes.oContainer} container`}>
        <div className={`${classes.oRow} row`}>
          <h2 className={`${classes.aBlockTitle} fntH2`}>{title}</h2>
        </div>
      </div>
      <div className={classes.oCards}>
        {cards.map((item, index) => (
          <div
            key={index}
            className={`${classes.mCard} ${classes[item.fields.customClass]}`}
          >
            <figure
              className={classes.mImage}
              style={{
                backgroundImage: `url(http:${item.fields.image.fields.file.url})`,
              }}
            ></figure>
            <div className={`${classes.aTitle} fnt18f`}>
              {item.fields.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
