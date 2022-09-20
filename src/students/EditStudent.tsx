import React from 'react';
import BootstrapInput from '../components/BootstrapInput';
import StudentsTable from './LabTwo';

type Props = {};

const EditStudent = (props: Props) => {
  const handleSelectRow = (id: number) => {
    console.log(`You clicked student ${id}`);
  };

  return (
    <section className="row">
      <div className="col">
        <StudentsTable selectRow={handleSelectRow} />
      </div>
      <div className="col">
        <EditStudentForm />
      </div>
    </section>
  );
};

const EditStudentForm = () => {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const entries = Array.from(formData.entries());
  };

  return (
    <form>
      <BootstrapInput id="first-name" name="firstName" label="First Name" type="text" />
      <BootstrapInput id="last-name" name="lastName" label="Last Name" type="text" />
      <BootstrapInput id="date-of-birth" name="dateOfBirth" label="Date Of Birth" type="text" />
      <BootstrapInput id="email" name="email" label="Email" type="text" />
      <BootstrapInput id="phone-number" name="phoneNumber" label="Phone Number" type="text" />
      <BootstrapInput id="city" name="city" label="City" type="text" />
      <BootstrapInput id="province" name="province" label="Province" type="text" />
      <BootstrapInput id="country" name="country" label="Country" type="text" />
      <BootstrapInput id="postal-code" name="postalCode" label="Postal Code" type="text" />
      <div className="mt-2">
        <button className="btn btn-primary" type="submit">
          Edit Student
        </button>
      </div>
    </form>
  );
};

export default EditStudent;
