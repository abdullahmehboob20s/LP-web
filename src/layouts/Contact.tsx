import React from "react";
import Button from "components/Button";
import Checkbox from "components/Checkbox";

function Contact() {
  return (
    <div>
      <div className="container">
        <h1 className="title mb-6 sm:mb-10 text-center">Contact Us</h1>

        <form className="max-w-[32rem] mx-auto">
          <div className="flex mb-8">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-white rounded-[2rem] rounded-r-none py-4 px-8 text-black font-semibold border-none outline-none text-xs sm:text-sm xl:text-lg"
            />
            <Button title="Send" className="rounded-l-none" />
          </div>

          <div className="space-y-4 sm:space-y-0 sm:space-x-6 flex flex-col sm:flex-row sm:items-center justify-center mx-auto max-w-[8rem] sm:max-w-auto">
            <Checkbox title="Artist" id="Artist" name="abc" />
            <Checkbox title="Community Member" id="Community" name="abc" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
