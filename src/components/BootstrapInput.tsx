import React from 'react';

type Props = {
  id: string;
  name: string;
  type: string;
  label: string;
  initialValue?: string;
  [key: string]: string | undefined;
};

const BootstrapInput = ({ id, name, label, type, initialValue, ...props }: Props) => {
  return (
    <div {...props}>
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input type={type} className="form-control" id={id} name={name} value={initialValue} />
    </div>
  );
};

export default BootstrapInput;
