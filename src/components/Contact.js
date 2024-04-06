const Contact = () => {
  return (
    <div className="text-center">
      <form>
        <h1 className="font-bold text-center p-3">Contact Us</h1>
        <div>
          <div className="ml-32 py-4">
            <label htmlFor="name">Name</label>
            <input id="name" placeholder="Name" className="ml-16"></input>
          </div>
          <div className="ml-32">
            <label htmlFor="email">Email</label>
            <input id="email" placeholder="Email" className="ml-16"></input>
          </div>
          <button
            type="submit"
            className="py-1 px-4 mt-4 rounded-lg bg-gray-200 hover:bg-gray-400 font-bold"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
