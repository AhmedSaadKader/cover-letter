import styles from './Links.module.css';
import { MdAlternateEmail } from 'react-icons/md';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineFacebook,
  AiOutlinePhone
} from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { CgWebsite } from 'react-icons/cg';

const Links = () => {
  return (
    <div className={styles.linksDiv}>
      <div className={styles.email}>
        <GoLocation size={25}/>
        <div>Cairo, Egypt</div>
      </div>
      <div className={styles.email}>
        <MdAlternateEmail size={25} />
        <div>ahmed.saad.kader@gmail.com</div>
      </div>
      <div className={styles.phone}>
        <AiOutlinePhone size={25} />
        <div>+201228610168</div>
      </div>
      <div className={styles.phone}>
        <a href="https://ahmedsaadkader.github.io/portfolio/" className={styles.individualLinks}>
          <div>
            <CgWebsite size={25} />
          </div>
          <div>Portfolio</div>
        </a>
      </div>
      <div className={styles.phone}>
        <a
          href="https://www.linkedin.com/in/ahmed-saad-60856892/"
          className={styles.individualLinks}
        >
          <AiFillLinkedin size={25} />
          <div>LinkedIn</div>
        </a>
      </div>
      <div className={styles.phone}>
        <a href="https://github.com/AhmedSaadKader" className={styles.individualLinks}>
          <AiFillGithub size={25} />
          <div>Github</div>
        </a>
        {/* <a href='' className={styles.individualLinks}>
          <AiFillTwitterCircle size={25} />
        </a> */}
        {/* <a className={styles.individualLinks}>
          <AiOutlineFacebook size={25} />
        </a> */}
      </div>
    </div>
  );
};

export default Links;
