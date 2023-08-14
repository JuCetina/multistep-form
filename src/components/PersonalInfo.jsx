const PersonalInfo = ({ register, errors, isValid, completeStep }) => {
  return (
    <div>
      <h2>Personal Info</h2>
      <p>Please provide your name, email address, and phone number.</p>
      <label htmlFor="fullname">Name</label>
      {errors.fullname?.type === "required" && <p>This field is required</p>}
      <input
        type="text"
        id="fullname"
        placeholder="e.g. Stephen King"
        {...register("fullname", {
          required: true,
        })}
      />
      <label htmlFor="email">Email Address</label>
      {errors.email?.type === "required" && <p>This field is required</p>}
      {errors.email?.type === "pattern" && <p>Invalid Email</p>}
      <input
        type="email"
        id="email"
        placeholder="e.g. stephenking@lorem.com"
        {...register("email", {
          required: true,
          pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
        })}
      />
      <label htmlFor="phone">Phone Number</label>
      {errors.phone?.type === "required" && <p>This field is required</p>}
      <input
        type="text"
        id="phone"
        placeholder="e.g. +1 234 567 890"
        {...register("phone", {
          required: true,
        })}
      />
      <button type="button" disabled={!isValid} onClick={completeStep}>
        Next Step
      </button>
    </div>
  );
};

export default PersonalInfo;
