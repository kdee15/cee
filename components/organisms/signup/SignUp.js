import classes from "./SignUp.module.scss";

export default function SignUp() {
  const hasOverlay = true;
  return (
    <section className={classes.oSignUp}>
      <h2 className={`${classes.aBlockTitle} fnt27f`}>
        SUBSCRIBE TO GET THE LATEST NEWS AND UPDATES
      </h2>
      <form action="" className={classes.oForm}>
        <label
          htmlFor="name"
          className={`${classes.mInput} ${classes.name} fnt18f`}
        >
          <input type="text" name="name" className={`${classes.aInput}`} />
        </label>
        <label
          htmlFor="email"
          className={`${classes.mInput} ${classes.email} fnt18f`}
        >
          <input type="text" name="email" className={classes.aInput} />
        </label>
        <span>
          <button className={`${classes.aBtn} aBtn`}>Sign Up</button>
        </span>
      </form>
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
