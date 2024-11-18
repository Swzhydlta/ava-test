import aboutImage from "../../assets/shutterstock_696636415.jpg";
import "./About.scss";

export default function About() {
  return (
    <div>
      <div className="section-type-1 mt-3">
        <div id="about-container" className="mx-2">
          <div className="font-box">
            <h2 className="header">About Us</h2>
            <p className="bold mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              placerat finibus est, eu semper metus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              placerat finibus est, eu semper metus. Cras faucibus sapien nec
              nulla congue ultricies. Curabitur sodales sed dui non porta. Donec
              vestibulum orci nisi. Ut viverra id ante id condimentum. Proin sed
              felis in urna aliquet pharetra vitae ac tellus. Vestibulum ante
              ipsum primis in faucibus orci luctus et ultrices posuere cubilia
              curae; Ut arcu sem, semper maximus eleifend et, dignissim sit amet
              ex. Morbi auctor nulla sit amet sem sollicitudin consectetur. Sed
              aliquet ultrices metus in sagittis. Quisque vel felis felis.{" "}
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              placerat finibus est, eu semper metus. Cras faucibus sapien nec
              nulla congue ultricies. Curabitur sodales sed dui non porta. Donec
              vestibulum orci nisi. Ut viverra id ante id condimentum. Proin sed
              felis in urna aliquet pharetra vitae ac tellus. Vestibulum ante
              ipsum primis in faucibus orci luctus et ultrices posuere cubilia
              curae; Ut arcu sem, semper maximus eleifend et, dignissim sit amet
              ex. Morbi auctor nulla sit amet sem sollicitudin consectetur. Sed
              aliquet ultrices metus in sagittis. Quisque vel felis felis.{" "}
            </p>
          </div>
          <img src={aboutImage} alt="" id="about-image" className="mt-1" />
          <div className="font-box">
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              placerat finibus est, eu semper metus. Cras faucibus sapien nec
              nulla congue ultricies. Curabitur sodales sed dui non porta. Donec
              vestibulum orci nisi. Ut viverra id ante id condimentum. Proin sed
              felis in urna aliquet pharetra vitae.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Integer placerat finibus est, eu
              semper metus. Cras faucibus sapien nec nulla congue ultricies.
              Curabitur sodales sed dui non porta. Donec vestibulum orci nisi.
              Ut viverra id ante id condimentum. Proin sed felis in urna aliquet
              pharetra vitae. Cras faucibus sapien nec nulla congue ultricies.
              Curabitur sodales sed dui non porta. Donec vestibulum orci nisi.
              Ut viverra id ante id condimentum. Proin sed felis in urna aliquet
              pharetra vitae.
            </p>
            <h4 className="mt-2">Curabitur sodales sed dui non porta</h4>
            <ul className="mt-2">
              <li>Te pri uscipit ligula et sodales dictum.</li>
              <li>Te nam blandit tortor sed arcu dapibus iaculis.</li>
              <li>Ut qui faucibus, dolor lacinia </li>
              <li>Ut indoctum sem metus, iaculis vel accumsan</li>
            </ul>
            <p>
              Ut viverra id ante id condimentum. Proin sed felis in urna aliquet
              pharetra vitae ac tellus. Vestibulum ante ipsum primis in faucibus
              orci luctus et ultrices posuere cubilia curae; Ut arcu sem, semper
              maximus eleifend et, dignissim sit amet ex. Morbi auctor nulla sit
              amet sem sollicitudin consectetur. Sed aliquet ultrices metus in
              sagittis. Quisque vel felis felis.{" "}
            </p>
            <p>
              Integer placerat finibus est, eu semper metus. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Cras faucibus sapien nec
              nulla congue ultricies. Curabitur sodales sed dui non porta. Donec
              vestibulum orci nisi. Ut viverra id ante id condimentum. Proin sed
              felis in urna aliquet pharetra vitae ac tellus. Vestibulum ante
              ipsum primis in faucibus orci luctus et ultrices posuere cubilia
              curae; Ut arcu sem, semper maximus eleifend et, dignissim sit amet
              ex. Morbi auctor nulla sit amet sem sollicitudin consectetur. Sed
              aliquet ultrices metus in sagittis. Quisque vel felis felis.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
