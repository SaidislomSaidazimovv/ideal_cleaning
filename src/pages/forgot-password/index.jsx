import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import auth from "../../components/service/auth";

const Index = () => {
  const [form, setForm] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await auth.forgot_password(form);
      console.log(result);
      if (result.status === 200) {
        localStorage.setItem("email", form.email);
        navigate("/update");
      }
    } catch (error) {
      toast.error("email kiritishda xatolik yuzaga keldi");
    }

    // e.target.reset();
  };

  return (
    <main id="content" role="main" className="w-full  max-w-lg mx-auto p-5">
      <div className="mt-24 bg-white  rounded-xl shadow-lg dark:bg-gray-400 dark:border-gray-700 border-2 border-indigo-300 ">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              Forgot password?
            </h1>
          </div>

          <div className="mt-7">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-y-4">
                <div>
                  <label
                    for="email"
                    className="block font-bold ml-1 mb-2 dark:text-white "
                  >
                    Email address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-2xl focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                      required
                      aria-describedby="email-error"
                      onChange={handleChange}
                    />
                  </div>
                  <p
                    className="hidden text-xs text-red-600 mt-2"
                    id="email-error"
                  >
                    Please include a valid email address so we can get back to
                    you
                  </p>
                </div>
                <button
                  type="submit"
                  className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all dark:focus:ring-offset-gray-800 text-xl"
                >
                  Reset password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Index;
