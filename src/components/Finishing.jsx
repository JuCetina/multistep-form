const Finishing = ({ backStep, backToPlan, watch }) => {
  let plan = watch("plan");
  let yearly = watch("yearly");
  let online = watch("online");
  let storage = watch("storage");
  let profile = watch("profile");

  const total = () => {
    let subtotal = 0;

    if(yearly){
      if (plan === "arcade"){
        subtotal = 90;
      }
      if (plan === "advanced"){
        subtotal = 120;
      }
      if (plan === "pro"){
        subtotal = 150;
      }
      if(online){
        subtotal+=10
      }
      if(storage){
        subtotal+=20
      }
      if(profile){
        subtotal+=20
      }
    }
    else{
      if (plan === "arcade"){
        subtotal = 9;
      }
      if (plan === "advanced"){
        subtotal = 12;
      }
      if (plan === "pro"){
        subtotal = 15;
      }
      if(online){
        subtotal+=1
      }
      if(storage){
        subtotal+=2
      }
      if(profile){
        subtotal+=2
      }
    }

    return subtotal;
  }

  return (
    <div>
      <h2>Finishing up</h2>
      <p>Double-check everything looks OK before confirming.</p>
      <div>
        {!yearly ? (
          <div>
            <div>
              <p>{plan} (Monthly)</p>
              <button onClick={backToPlan}>Change</button>
            </div>
            {plan === "arcade" && <p>$9/mo</p>}
            {plan === "advanced" && <p>$12/mo</p>}
            {plan === "pro" && <p>$15/mo</p>}
          </div>
        ) : (
          <div>
            <div>
              <p>{plan} (Yearly)</p>
              <button onClick={backToPlan}>Change</button>
            </div>
            {plan === "arcade" && <p>$90/yr</p>}
            {plan === "advanced" && <p>$120/yr</p>}
            {plan === "pro" && <p>$150/yr</p>}
          </div>
        )}

        {online && (
          <div>
            <p>Online service</p>
            {yearly ? <p>+$10/yr</p> : <p>+$1/mo</p>}
          </div>
        )}

        {storage && (
          <div>
            <p>Larger storage</p>
            {yearly ? <p>+$20/yr</p> : <p>+$2/mo</p>}
          </div>
        )}

        {profile && (
          <div>
            <p>Customizable profile</p>
            {yearly ? <p>+$20/yr</p> : <p>+$2/mo</p>}
          </div>
        )}
      </div>
      <div>
        {yearly ? <p>Total (per year)</p> : <p>Total (per month)</p>}

        <p>${total()}{yearly ? <span>/yr</span> : <span>/mo</span>}</p>
      </div>

      <button type="button" onClick={backStep}>
        Back Step
      </button>
      <button type="submit">Confirm</button>
    </div>
  );
};

export default Finishing;
