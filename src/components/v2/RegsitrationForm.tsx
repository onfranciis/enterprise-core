import { FormEvent, useState } from "react";

const RegistrationFormV1 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col items-center justify-center text-white font-bold my-10">
      <p className=" text-violet-500 text-4xl mb-6 mt-10">Registration V2</p>

      <form
        className="flex flex-col items-center justify-center gap-3 bg-violet-500 w-fit p-5 m-auto rounded-lg "
        onSubmit={handleSubmit}
      >
        <label
          htmlFor="name"
          className="flex flex-col items-center justify-center"
        >
          <p className="text-xl">Name</p>
          <input
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-lg text-black p-1"
          />
        </label>

        <label
          htmlFor="email"
          className="flex flex-col items-center justify-center"
        >
          <p className="text-xl">Email</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-lg text-black p-1"
          />
        </label>

        <label
          htmlFor="password"
          className="flex flex-col items-center justify-center"
        >
          <p className="text-xl">Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-lg text-black p-1"
          />
        </label>

        <input
          type="submit"
          value="Register"
          className="rounded-lg py-1 px-3 text-violet-900 bg-violet-200 cursor-pointer mt-3"
        />
      </form>
    </div>
  );
};

export default RegistrationFormV1;
