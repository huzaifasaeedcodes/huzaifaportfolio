import styles from "./ContactMeStyles.module.css";


const ContactMe = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.center}>Feel free to reach out!</h2>
      <div className={styles.contactDetails}>
        <p className={styles.phone}>
          <strong>Phone:</strong> <a href="tel:+923255434787">+923255434787</a>
        </p>
        <p className={styles.email}>
          <strong>Email:</strong> <a href="mailto:huzaifasaeed460@gmail.com">huzaifasaeed460@gmail.com</a>
        </p>
      </div>
    </div>
  );
};

export default ContactMe;
