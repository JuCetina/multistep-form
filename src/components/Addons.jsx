const Addons = ({ register, completeStep, backStep, watch }) => {
  
  let yearly = watch("yearly");

  return (
    <div>
      <h2>Pick add-ons</h2>
      <p>Add-ons help enhance your gaming experience.</p>
      {!yearly && (
        <>
          <label htmlFor="online">
            <div>
              <p>Online service</p>
              <p>Access to multiplayer games</p>
            </div>
            <p>+$1/mo</p>
          </label>
          <input type="checkbox" id="online" {...register("online")} />

          <label htmlFor="storage">
            <div>
              <p>Larger storage</p>
              <p>Extra 1TB of cloud save</p>
            </div>
            <p>+$2/mo</p>
          </label>
          <input type="checkbox" id="storage" {...register("storage")} />

          <label htmlFor="profile">
            <div>
              <p>Customizable profile</p>
              <p>Custom theme on your profile</p>
            </div>
            <p>+$2/mo</p>
          </label>
          <input type="checkbox" id="profile" {...register("profile")} />
        </>
      )}

      {yearly && (
        <>
          <label htmlFor="online">
            <div>
              <p>Online service</p>
              <p>Access to multiplayer games</p>
            </div>
            <p>+$10/yr</p>
          </label>
          <input type="checkbox" id="online" {...register("online")} />

          <label htmlFor="storage">
            <div>
              <p>Larger storage</p>
              <p>Extra 1TB of cloud save</p>
            </div>
            <p>+$20/yr</p>
          </label>
          <input type="checkbox" id="storage" {...register("storage")} />

          <label htmlFor="profile">
            <div>
              <p>Customizable profile</p>
              <p>Custom theme on your profile</p>
            </div>
            <p>+$20/yr</p>
          </label>
          <input type="checkbox" id="profile" {...register("profile")} />
        </>
      )}

      <button type="button" onClick={backStep}>
        Back Step
      </button>
      <button type="button" onClick={completeStep}>
        Next Step
      </button>
    </div>
  );
};

export default Addons;
