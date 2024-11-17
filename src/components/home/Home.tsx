import "./Home.scss";
import Banner from "../banner/Banner";

export default function Home() {
  return (
    <div>
      {/* section */}
      <Banner />
      {/* section */}
      <div className="section-type-1">
        <div className="container-mobile-reverse mx-1">
          <div className="col font-box">
            <h3 className="header">
              Justo pententium a risus ultricies dignissim.
            </h3>
            <div className="mt-2">
              Donec ut lacus fermentum, viverra nunc et, posuere nibh. Nullam
              tempor libero et neque ornare, ut porttitor mauris porttitor.
              Donec pellentesque ut massa ac volutpat. Suspendisse mattis,
              tortor non fermentum lacinia, arcu odio condimentum ex, non dictum
              nulla est non eros. Donec tristique interdum semper. Nam ut felis
              lorem. Aliquam lacus lorem, scelerisque a nunc fringilla,
              efficitur euismod mi. Sed ut tincidunt lacus. Ut viverra, ipsum et
              fermentum egestas, mi nunc rhoncus felis, in porta dui enim vel
              lacus.{" "}
            </div>
            <div className="mt-2">
              <ul>
                <li>Te pri uscipit ligula et sodales dictum.</li>
                <li>Te nam blandit tortor sed arcu dapibus iaculis.</li>
                <li>Ut qui faucibus, dolor lacinia </li>
                <li>Ut indoctum sem metus, iaculis vel accumsan</li>
              </ul>
            </div>
            <div className="mt-2">
              <button className="button-dark">Learn more</button>
            </div>
          </div>

          <div id="office-image" className="col"></div>
        </div>
      </div>
      {/* section */}
      <div id="home-login-container" className="section-type-1">
        <div className="container-center mx-1">
          <div className="col font-box-dark rounded-corners p2">
            <h3 className="header-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h3>
            <div className="mt-2">
              Mauris suscipit ligula et sodales dictum. Donec blandit tortor sed
              arcu dapibus iaculis. Donec faucibus, dolor lacinia ullamcorper
              dictum, dui eros accumsan sapien, at laoreet magna erat ac quam.
              Morbi sem metus, iaculis vel accumsan nec, lacinia finibus purus.
              Donec pharetra purus nec sem pellentesque gravida. Maecenas semper
              eget felis quis volutpat. Integer euismod et eros quis sagittis.
              Praesent consequat augue eu mattis sagittis.
            </div>
            <div className="mt-2">
              {" "}
              <button className="button-light">Log in</button>
            </div>
          </div>
          <div className="col home-banner-placeholder-col m2"></div>
        </div>
      </div>

      {/* section */}
      <div className="section-type-2">
        <div className="container-default">
          <div className="col font-box-center">
            <h4>Mauris suscipit ligula et sodales dictum</h4>
            <h5>Mauris suscipit ligula et sodales dictum</h5>
          </div>
        </div>
        <div className="container-default">
          <div className="col font-box px-1 p-md-1">
            <p className="bold">
              Mauris suscipit ligula et sodales dictum. Donec blandit tortor sed
              arcu dapibus iaculis. Donec faucibus, dolor lacinia ullamcorper
              dictum, dui eros accumsan sapien, at laoreet magna erat ac quam.
              Morbi sem metus, iaculis vel accumsan nec, lacinia finibus purus.
              Donec pharetra purus nec sem pellentesque gravida. Maecenas semper
              eget felis quis volutpat. Integer euismod et eros quis sagittis.
              Praesent consequat augue eu mattis sagittis. Maecenas semper eget
              felis quis volutpat.{" "}
            </p>
            <p>
              Integer euismod et eros quis sagittis. Praesent consequat augue eu
              mattis sagittis.
            </p>
          </div>
          <div className="col font-box px-1 p-md-1">
            <p>
              Mauris suscipit ligula et sodales dictum. Donec blandit tortor sed
              arcu dapibus iaculis. Donec faucibus, dolor lacinia ullamcorper
              dictum, dui eros accumsan sapien, at laoreet magna erat ac quam.
              Morbi sem metus, iaculis vel accumsan nec, lacinia finibus purus.
              Donec pharetra purus nec sem pellentesque gravida. Maecenas semper
              eget felis quis volutpat. Integer euismod et eros quis sagittis.
              Praesent consequat augue eu mattis sagittis.Integer euismod et
              eros quis sagittis. Praesent consequat augue eu mattis sagittis.
            </p>
            <p>
              Integer euismod et eros quis sagittis. Praesent consequat augue eu
              mattis sagittis.
            </p>
          </div>
          <div className="col font-box px-1 p-md-1">
            <p>
              Mauris suscipit ligula et sodales dictum. Donec blandit tortor sed
              arcu dapibus iaculis. Donec faucibus, dolor lacinia ullamcorper
              dictum, dui eros accumsan sapien, at laoreet magna erat ac quam.
              Morbi sem metus, iaculis vel accumsan nec, lacinia finibus purus.
              Donec pharetra purus nec sem pellentesque gravida. Maecenas semper
              eget felis quis volutpat. Integer euismod et eros quis sagittis.
              Praesent consequat augue eu mattis sagittis. Morbi sem metus,
              iaculis vel accumsan nec, lacinia finibus purus. Donec pharetra
              purus nec sem pellentesque gravida. Maecenas semper eget felis
              quis volutpat. Integer euismod et eros quis sagittis. Praesent
              consequat augue eu mattis sagittis.
            </p>
          </div>
        </div>
        <div>
          <div>
            <button className="button-dark">Contact us</button>
          </div>
        </div>
      </div>
    </div>
  );
}
