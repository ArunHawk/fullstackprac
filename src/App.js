import React from "react";
import styles from "./App.module.css";
import { useForm } from "react-hook-form";

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Regiestration is successfully done");
  };

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.mainHeading}>Registration Form</h1>
      <div className={styles.subConatiner}>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.feildsContainer}>
          <label>Name:</label>
          <input type="text" {...register("Name", { required: true })} />
          {errors.Name && <span>Name is required.</span>}
        </div>

        <div className={styles.feildsContainer}>
          <label>Mobile:</label>
          <input type="text" {...register("mobile", { pattern: /\d+/ })} />
          {errors.mobile && <span>Please enter a valid Mobile Number.</span>}
        </div>

        <div className={styles.feildsContainer}>
          <label>Email:</label>
          <input
            type="text"
            {...register("Email", {
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please enter a valid email address.",
              },
            })}
          />
          {errors.Email && <span>{errors.Email.message}</span>}
        </div>

        <div className={styles.feildsContainer}>
          <label>Gender:</label>
          <select name="gender" {...register("gender", { required: true })}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </select>
          {errors.gender && <span>Please select a gender.</span>}
        </div>

        <div className={styles.feildsContainer}>
          <label>Commute:</label>
          <label>
            <input
              type="checkbox"
              name="commute"
              value="yes"
              {...register("commute", { required: true })}
              />
            Yes
          </label>
          <label>
            <input
              type="checkbox"
              name="commute"
              value="no"
              {...register("commute", { required: true })}
              />
            No
          </label>
          {errors.commute && <span>Please select a commute option.</span>}
        </div>

        <div className={styles.feildsContainer}>
          <label>Passport:</label>
          <label>
            <input
              type="radio"
              name="passport"

              value="Yes"
              {...register("passport", { required: true })}
              />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="passport"
              value="No"
              {...register("passport", { required: true })}
            />
            No
          </label>
          <label>
            <input
              type="radio"
              name="passport"
              value="Applied"
              {...register("passport", { required: true })}
              />
            Applied
          </label>
          {errors.passport && <span>Please select a passport option.</span>}
        </div>

        <div className={styles.feildsContainer}>
          <label>Password:</label>
          <input
            type="password"
            {...register("password", {
              required: true,
              pattern: {
                value:
                /^(?=.*[@#$])(?=.*[0-9]{1})(?=.*[A-Z]{1})(?=.*[a-z]{2}).{8,}$/,
                message:
                "Need 1 special character, 1 number, 1 capital letter, 2 small letters",
              },
            })}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>

        <div className={styles.feildsContainer}>
          <label>Re-enter Password:</label>
          <input
            type="password"
            {...register("passwordConfirmation", {
              validate: (value) =>
              value === watch("password") || "Passwords do not match.",
            })}
            />
          {errors.passwordConfirmation && (
            <span>{errors.passwordConfirmation.message}</span>
            )}
        </div>

        <div className={styles.feildsContainer}>
          <button type="submit">Submit</button>
        </div>
      </form>
            </div>
    </div>
  );
};
//second Commit for git check

export default App;