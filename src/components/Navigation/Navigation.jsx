
import styles from './Navigation.module.css'
const Navigation = () => {

  console.log(styles);
  return (
    <nav className={styles.navigation}>
     



        <div className="logo">
            <img src="https://img.freepik.com/premium-vector/contact-us-icon-simple-element-illustration-contact-us-concept-symbol-design-can-be-used-web-mobile_159242-6858.jpg" alt="logo" height="100px" />
        </div>

        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Navigation