import React,{useState} from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assests/logo.png";
import CommonButton from "../commonButton/CommonButton";
import styles from "../../../styles/Header.module.css";



export default function Header() {
  const [isOpen,setIsOpen] = useState(false);
  const openMenu= ()=> setIsOpen(!isOpen);
  return (
    <nav className={`${styles.navbar} mainContainer bgColor  `} >
      <Link href='/'>
        <a className={styles.navlogo}><Image src={logo} width={220} height={60}/></a>
      </Link>
      <ul className={`${!isOpen? styles.navmenu : styles.navmenu+' '+styles.active} `}>
        {['about','courses','success stories','blog','faqs','contact'].map(item=>(
          <li key={`link-${item}`} className={styles.navitem+" navLinksMobile"}>
          <Link href={`/${item}`}>
            <a className={!isOpen? styles.navlink : styles.navlink+' '+styles.active+" navLinksMobile "+styles.fromLeft} onClick={openMenu}>
              {item}
            </a>
          </Link>
          </li>
        ))}
        <CommonButton title="Login"/>
      </ul>
      <button style={{background:"transparent",border:"none",outline:"none",cursor:"pointer",padding:"0"}}  className={!isOpen ? styles.hamburger : styles.hamburger+' '+styles.active} onClick={openMenu} >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
      </button>

    </nav>
  );
}



