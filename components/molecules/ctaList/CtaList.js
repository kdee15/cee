import Link from "next/dist/client/link";
import classes from "./CtaList.module.scss";

export default function CtaList(contentModule) {
  const { ctaRegion } = contentModule.contentModule;

  return (
    <section className={classes.mCtaList}>
      {ctaRegion.map((item, index) => (
        <Link key={index} href={item.fields.url}>
          <a
            className={`${classes[item.fields.customClass]} ${[
              item.fields.customClass,
            ]}`}
            target={`${item.fields.isExternal ? "_blank" : "_parent"}`}
          >
            {item.fields.label}
          </a>
        </Link>
      ))}
    </section>
  );
}
