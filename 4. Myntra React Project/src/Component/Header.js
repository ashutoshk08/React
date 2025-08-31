function Header() {
  return (
    <header className="header">
      <a href="/" className="logo">
        <img
          src="https://cdn.iconscout.com/icon/free/png-512/free-myntra-icon-svg-png-download-2249158.png?f=webp&w=512"
          alt="myntra logo"
        />
      </a>
      <nav className="categories">
        <ul>
          <li>
            <a>MEN</a>
          </li>
          <li>
            <a>WOMEN</a>
          </li>
          <li>
            <a>KIDS</a>
          </li>
          <li>
            <a>HOME</a>
          </li>
          <li>
            <a>BEAUTY</a>
          </li>
          <li>
            <a>GENZ</a>
          </li>
          <li>
            <a>STUDIO</a>
          </li>
        </ul>
      </nav>
      <div className="search">
        <input type="text" placeholder="Search for products, brands and more" />
      </div>
      <nav className="user">
        <ul>
          <li>
            <a>Profile</a>
          </li>
          <li>
            <a>Wishlist</a>
          </li>
          <li>
            <a>Bag</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
