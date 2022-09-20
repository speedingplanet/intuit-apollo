import React from 'react';

type Props = {
  id: string;
  name: string;
  type: string;
  label: string;
  [key: string]: string;
};

const BootstrapInput = ({ id, name, label, type, ...props }: Props) => {
  return (
    <div {...props}>
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input type={type} className="form-control" id={id} name={name} />
    </div>
  );
};

export default BootstrapInput;
