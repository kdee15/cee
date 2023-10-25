import Image from "next/image";
import Link from "next/dist/client/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import classes from "./Footer.module.scss";

export default function ComponentFooter(contentModule) {
  console.log("footer", contentModule);
  const {
    title,
    logo,
    logoCopy,
    socialMedia,
    contactCopy,
    quickLinks,
    copyrightText,
    hasOverlay,
  } = contentModule.contentModule;
  return (
    <section className={classes.oFooter}>
      <div className={`${classes.oContainer} container`}>
        <div className={`${classes.oRow} row`}>
          <div className={`${classes.oCol}  col-12 col-md`}>
            <figure className={classes.mLogo}>
              {logo && (
                <Image
                  className={`${classes.aImage}`}
                  src={`${logo?.fields?.file?.url}`}
                  alt={`title`}
                  width={logo?.fields.file.details.image.width}
                  height={logo?.fields.file.details.image.height}
                  aria-hidden="true"
                  layout="responsive"
                  priority="true"
                />
              )}
            </figure>
            <div className={classes.mLogoCopy}>
              {documentToReactComponents(logoCopy.fields.copy)}
            </div>
            <h3 className={`${classes.aTitle} ${classes.socialMedia}`}>
              {socialMedia.fields.title}
            </h3>
            <ul className={`${classes.mFooterNav} ${classes.socialMedia}`}>
              {socialMedia.fields.menuLinks.map((link, index) => (
                <li className={classes.navLink} key={index}>
                  <Link href={link.fields.url}>
                    <a
                      className={classes.aLink}
                      target={`${
                        link.fields.isExternal ? "_blank" : "_parent"
                      }`}
                    >
                      {link.fields.image && (
                        <Image
                          className={`${classes.aImage}`}
                          src={`${link.fields.image.fields.file.url}`}
                          alt={link.fields.image.fields.label}
                          width={
                            link.fields.image.fields.file.details.image.width
                          }
                          height={
                            link.fields.image.fields.file.details.image.height
                          }
                          aria-hidden="true"
                          layout="responsive"
                          priority="true"
                        />
                      )}
                      {!link.fields.image && (
                        <span className={`${classes.aText} fnt13f`}>
                          {link.fields.label}
                        </span>
                      )}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={`${classes.oCol} col-12 col-md`}>
            <h3 className={`${classes.aTitle} fnt18f`}>
              {contactCopy.fields.title}
            </h3>
            <div className={`${classes.mCopy} ${classes.contactCopy} fnt12`}>
              {documentToReactComponents(contactCopy.fields.copy)}
            </div>
          </div>
          <div className={`${classes.oCol}  col-12 col-md`}>
            <h3 className={`${classes.aTitle} fnt18f`}>
              {quickLinks.fields.title}
            </h3>
            <ul className={`${classes.mFooterNav} ${classes.quickLinks}`}>
              {quickLinks.fields.menuLinks.map((link, index) => (
                <li className={classes.navLink} key={index}>
                  <Link href={link.fields.url}>
                    <a
                      className={classes.aLink}
                      target={`${
                        link.fields.isExternal ? "_blank" : "_parent"
                      }`}
                    >
                      {link.fields.image && (
                        <Image
                          className={`${classes.aImage}`}
                          src={`${logo?.fields?.file?.url}`}
                          alt={link.fields.label}
                          width={logo?.fields.file.details.image.width}
                          height={logo?.fields.file.details.image.height}
                          aria-hidden="true"
                          layout="responsive"
                          priority="true"
                        />
                      )}
                      {!link.fields.imag && (
                        <span className={`${classes.aText} fnt13f`}>
                          {link.fields.label}
                        </span>
                      )}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={`${classes.oCol} ${classes.copyright} col-12`}>
            {copyrightText}
          </div>
        </div>
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
              viewBox="0 0 83 255.5"
              style={{ enableBackground: `new 0 0 83 255.5` }}
              className={classes.aCircleSliver}
            >
              <path
                d="M83,39V0C32.8,34.9,0,92.9,0,158.6c0,35.6,9.6,68.9,26.4,97.5H63c-20.4-27.2-32.5-60.9-32.5-97.5
	C30.5,111.3,50.7,68.7,83,39z"
              />
            </svg>
          </span>
          <span>
            <svg
              x="0px"
              y="0px"
              viewBox="0 0 264.3 289.9"
              style={{ enableBackground: `new 0 0 264.3 289.9` }}
              className={classes.aCircleQuarter}
            >
              <path
                d="M263.5,13.3C241.7,4.7,217.9,0,193,0C86.4,0,0,86.4,0,193c0,35.6,9.6,68.9,26.4,97.5H63c-20.4-27.2-32.5-60.9-32.5-97.5
	c0-89.7,72.8-162.5,162.5-162.5c25.3,0,49.2,5.8,70.5,16V13.3z"
              />
            </svg>
          </span>
        </div>
      ) : null}
    </section>
  );
}
