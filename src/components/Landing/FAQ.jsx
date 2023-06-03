import { useState } from "react";
import { Link } from "react-router-dom";
import FAQData from "./FAQData";
import Question from "./Question";

export default function () {
  const [data, setData] = useState(FAQData);
  function handleClick(id) {
    const temp = [...data];
    for (let i in data) {
      if (data[i].id == id) {
        temp[i] = {
          ...temp[i],
          extended: !temp[i].extended,
        };
      } else if (data[i].extended) {
        temp[i] = {
          ...temp[i],
          extended: false,
        };
      }
      console.log(data)
    }
    setData((prevData) => temp);
  }
  return (
    <section id="FAQ" className="px-8 md:px-20 pb-48 pt-24">
      <div className="mx-auto w-max">
        <p className="text-center text-2xl font-light text-blue-700">
          Frequently asked questions
        </p>
        <div className="mx-auto h-[2px] w-1/6 rounded-3xl bg-blue-700"></div>
      </div>
      <h2 className="h2 | text-center">Have questions? We're here to help</h2>
      <div className="max-w-[42rem] mx-auto mt-10">
        {data.map((item) => (
          <Question
            key={item.question}
            question={item.question}
            answer={item.answer}
            extended={item.extended}
            handleClick={() => handleClick(item.id)}
          />
        ))}
      </div>
      <p className="text-2xl mx-auto w-fit mt-10 text-center">Got more questions? don’t hesitate to <span className="text-blue-700"><Link to="/contact">contact us!</Link></span></p>
    </section>
  );
}
