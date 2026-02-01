import React from "react";
import styles from "./Blog.module.css";
import ContactNav from "../components/navbar/ContactNav";
import MenuBar from "../components/navbar/MenuBar";
import photo1 from "../assets/blogPhoto1.jpg";
import photo2 from "../assets/blogPhoto2.jpg";
export default function Blog() {
  return (
    <div className={styles.Blog}>
      <div>
        <ContactNav />
        <MenuBar title="FSD Fooder" />
      </div>
      <div className={styles.page}>
        <div className={styles.h2}>
          <h2>
            The secret tips & tricks to prepare a<br />
            perfect burger & pizza for our customers
          </h2>
        </div>
        <div className={styles.BlogPhoto1}>
          <img src={photo1} alt="Blog food preparation" />
        </div>
        <div className={styles.content1}>
          <h5> What do you need to prepare a home-made burger?</h5>
          <p>
            Creating the perfect burger and pizza is an art, combining
            ingredients, techniques, and passion to craft dishes that truly
            delight the palate. Today, we'll unveil some closely guarded secrets
            and insider tips for mastering these beloved staples of the culinary
            world.
          </p>

          <p>
            <span>Quality Beef:</span> The heart of a perfect burger is
            top-notch beef. Opt for fresh, high-quality ground beef with a fat
            content of about 20% for the juiciest, most flavorful results.
          </p>
          <p>
            <span>Seasoning:</span> Simplicity is key here. A generous pinch of
            salt and black pepper just before cooking will enhance the beef's
            natural flavors without overshadowing them. Don’t Overwork the Meat:
            When forming your patties, be gentle. Overworking the meat can lead
            to dense, tough burgers. You want a patty that's firm enough to hold
            together, but not compressed.
          </p>
          <p>
            <span>Cooking:</span> High heat is crucial. Whether you're grilling
            or pan-searing, make sure your cooking surface is hot enough to form
            a nice crust on the patty, sealing in those delicious juices.
          </p>
          <p>
            <span>Resting</span>: Allow your cooked burgers to rest for a few
            minutes before serving. This lets the juices redistribute throughout
            the patty, ensuring a moist and flavorful bite.
          </p>
        </div>
        <div className={styles.content2}>
          <h5>What are the right ingredients to make it delicious?</h5>
          <p>
            Creating the perfect burger and pizza is an art, combining
            ingredients, techniques, and passion to craft dishes that truly
            delight the palate. Today, we'll unveil some closely guarded secrets
            and insider tips for mastering these beloved staples of the culinary
            world.
          </p>

          <p>
            <span>Quality Beef:</span> The heart of a perfect burger is
            top-notch beef. Opt for fresh, high-quality ground beef with a fat
            content of about 20% for the juiciest, most flavorful results.
          </p>
          <p>
            <span>Seasoning:</span> Simplicity is key here. A generous pinch of
            salt and black pepper just before cooking will enhance the beef's
            natural flavors without overshadowing them. Don’t Overwork the Meat:
            When forming your patties, be gentle. Overworking the meat can lead
            to dense, tough burgers. You want a patty that's firm enough to hold
            together, but not compressed.
          </p>
          <p>
            <span>Cooking:</span> High heat is crucial. Whether you're grilling
            or pan-searing, make sure your cooking surface is hot enough to form
            a nice crust on the patty, sealing in those delicious juices.
          </p>
          <p>
            <span>Resting</span>: Allow your cooked burgers to rest for a few
            minutes before serving. This lets the juices redistribute throughout
            the patty, ensuring a moist and flavorful bite.
          </p>
        </div>
              <div className={styles.BlogPhoto2}>
                  <img src={photo2} alt="Delicious homemade burger and pizza" />
        </div>
        <div className={styles.content3}></div>
        <div className={styles.article}></div>
        <div className={styles.footer}></div>
      </div>
    </div>
  );
}
