import { TypeAnimation } from "react-type-animation";

function Typing() {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Next.js",
        500,
        "Html",
        500,
        "CSS",
        500,
        "React.js",
        500,
      ]}
      wrapper="span"
      speed={10}
      preRenderFirstString={true}
      style={{
        marginLeft: "5px",
        fontSize: "1em",
        textAlign: "left",
        color: "#84ffff",
        fontWeight: "bold",
        display: "inline-block",
        width: "38.5%",
      }}
      repeat={2}
    />
  );
}

export default Typing;
