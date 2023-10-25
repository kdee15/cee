import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import classes from "./CardList.module.scss";
import Link from "next/dist/client/link";

export default function CardList(contentModule) {
  const { title, cards, buttonLabel, url, hasOverlay, customClass } =
    contentModule.contentModule.fields;
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
      <div className={`${classes.oCtaRegion}`}>
        <Link href={url}>
          <a className="aBtn btnAlt">
            <span className="fnt21f">{buttonLabel}</span>
          </a>
        </Link>
      </div>
      {hasOverlay ? (
        <div className={classes.oOverlays}>
          <span>
            <svg
              x="0px"
              y="0px"
              viewBox="0 0 287.3 286.9"
              style={{ enableBackground: `new 0 0 287.3 286.9` }}
              className={classes.aCircleThin}
            >
              <path
                d="M143.5,0C64.2,0,0,64.2,0,143.5S64.2,287,143.5,287S287,222.8,287,143.5S222.8,0,143.5,0z M143.5,264.3
	c-66.7,0-120.8-54.1-120.8-120.8S76.8,22.7,143.5,22.7s120.8,54.1,120.8,120.8S210.2,264.3,143.5,264.3z"
              />
            </svg>
          </span>
          <span>
            <svg
              x="0px"
              y="0px"
              viewBox="0 0 287.3 286.9"
              style={{ enableBackground: `new 0 0 287.3 286.9` }}
              className={classes.aCircle}
            >
              <path
                d="M143.5,0C64.2,0,0,64.2,0,143.5S64.2,287,143.5,287S287,222.8,287,143.5S222.8,0,143.5,0z M144,251.3
	c-59.8,0-108.3-48.5-108.3-108.3S84.2,34.7,144,34.7S252.3,83.2,252.3,143S203.8,251.3,144,251.3z"
              />
            </svg>
          </span>
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
