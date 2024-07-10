import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <section id="Footer" className="p-1 bg-dark-override text-white route">
        <div className="container">
        <div className="row">
           <p className="text-center w-100">© Copyright {(new Date().getFullYear())} Vee.</p>
          </div>
        </div>
      </section>
    );
  }
}
export default Footer;