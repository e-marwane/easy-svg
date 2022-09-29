

function Head(props) {
  return (
    <header>
       <div className="head-wrapper">
            <h1 className="logo">Easy Icons by me ♥</h1>
            <a onClick={props.theme} className="theme-toggle"><img src={"/img/svg/moon.svg"} alt="Toggle theme" /></a>
       </div>
    </header>
  );
}

export default Head;
