import { GoTop } from ".";

const goTop = {
  title: "GoTop",
  component: GoTop,
  args: {
    children: "GoTop",
  },
  argTypes: {
    children: { type: "string" },
  },
};

export const Template = () => {
  return (
    <div style={{ height: "400vh" }}>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, natus accusantium! Possimus consequatur
        voluptate tempore animi magni quibusdam illo, iste dolorem in sequi fuga inventore veniam obcaecati quae qui
        reiciendis!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, natus accusantium! Possimus consequatur
        voluptate tempore animi magni quibusdam illo, iste dolorem in sequi fuga inventore veniam obcaecati quae qui
        reiciendis!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, natus accusantium! Possimus consequatur
        voluptate tempore animi magni quibusdam illo, iste dolorem in sequi fuga inventore veniam obcaecati quae qui
        reiciendis!
      </p>
      <GoTop />
    </div>
  );
};

export default goTop;
