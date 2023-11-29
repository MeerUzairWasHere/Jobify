const FormRow = ({ type, name, labelText, defaultValue, onChange }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className="form-input"
        placeholder={"Your " + name}
        defaultValue={defaultValue || ""}
        required
        onChange={onChange}
      />
    </div>
  );
};
export default FormRow;
