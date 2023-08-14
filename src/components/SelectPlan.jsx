const SelectPlan = ({
  register,
  isValid,
  completeStep,
  backStep,
  watch
}) => {

  let yearly = watch('yearly');
  
  return (
    <div>
      <h2>Select your plan</h2>
      <p>You have the option of monthly or yearly billing.</p>
      
      {!yearly && (
        <>
          <label htmlFor="arcade">
            <p>Arcade</p>
            <p>$9/mo</p>
          </label>
          <input
            type="radio"
            id="arcade"
            value="arcade"
            {...register("plan", {
              required: true,
            })}
          />

          <label htmlFor="advanced">
            <p>Advanced</p>
            <p>$12/mo</p>
          </label>
          <input
            type="radio"
            id="advanced"
            value="advanced"
            {...register("plan", {
              required: true,
            })}
          />

          <label htmlFor="pro">
            <p>Pro</p>
            <p>$15/mo</p>
          </label>
          <input
            type="radio"
            id="pro"
            value="pro"
            {...register("plan", {
              required: true,
            })}
          />
        </>
      )}

      {yearly && (
        <>
          <label htmlFor="arcade">
            <p>Arcade</p>
            <p>$90/yr</p>
            <p>2 months free</p>
          </label>
          <input
            type="radio"
            id="arcade"
            value="arcade"
            {...register("plan", {
              required: true,
            })}
          />

          <label htmlFor="advanced">
            <p>Advanced</p>
            <p>$120/yr</p>
            <p>2 months free</p>
          </label>
          <input
            type="radio"
            id="advanced"
            value="advanced"
            {...register("plan", {
              required: true,
            })}
          />

          <label htmlFor="pro">
            <p>Pro</p>
            <p>$150/yr</p>
            <p>2 months free</p>
          </label>
          <input
            type="radio"
            id="pro"
            value="pro"
            {...register("plan", {
              required: true,
            })}
          />
        </>
      )}

      <label htmlFor="billing">Yearly</label>
      <input type="checkbox" id="billing" {...register("yearly")} />

      <button type="button" onClick={backStep}>
        Back Step
      </button>
      <button type="button" disabled={!isValid} onClick={completeStep}>
        Next Step
      </button>
    </div>
  );
};

export default SelectPlan;
