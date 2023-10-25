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
            <div>{documentToReactComponents(contactCopy.fields.copy)}</div>
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
    </section>
  );
}
