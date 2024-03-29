import classes from "./SignUp.module.scss";

export default function SignUp() {
  return (
    <section className={classes.oSignUp}>
      <h2 className={`${classes.aBlockTitle} fnt27f`}>
        STAY INFORMED. JOIN OUR MOVEMENT.
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
          <button className={`${classes.aBtn} aBtn`}>COUNT ME IN</button>
        </span>
      </form>
    </section>
  );
}
