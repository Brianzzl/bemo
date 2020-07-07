import React, { useState } from "react";

const EmailForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    msg: "",
  });
  const { name, email, msg } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);
  };
  return (
    <>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="name"
            name="name"
            value={name}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="msg"
            name="msg"
            value={msg}
            onChange={(e) => onChange(e)}
          />
        </div>
        <button onClick={onSubmit}>submit</button>
      </form>
    </>
  );
};

export default EmailForm;
