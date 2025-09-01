import styles from "./about.module.css";
import ourStoryImg from "../../assets/images/contact-cellphone.jpg";

export default function About() {
    return (
        <section className={styles["about-page"]}>
            <div className={styles["about-container"]}>
                <div className={styles["heading"]}>
                    <h1>Your one stop electronic hub</h1>
                    <p>
                        Discover wide rage of trusted, high quality and lasting
                        perfomance electronics
                    </p>
                </div>
                <div className={styles["about-content"]}>
                    <article className={styles["our-story"]}>
                        <h2>Our Story</h2>
                        <div className={styles["our-story-content"]}>
                            <div className={styles["img-container"]}>
                                <img src={ourStoryImg} alt="" />
                            </div>
                            <div className={styles["our-story-description"]}>
                                <p>
                                    E-MALL was founded with a vision to make
                                    high-quality electronics accessible to
                                    everyone. From humble beginnings, we have
                                    grown into a trusted destination for the
                                    latest gadgets, reliable devices, and
                                    exceptional customer service. Our commitment
                                    to innovation and customer satisfaction
                                    drives us to continually expand our
                                    offerings and improve your shopping
                                    experience.
                                </p>
                                <p>
                                    Over the years, we have built strong
                                    partnerships with leading brands and
                                    suppliers, ensuring that every product we
                                    offer meets our strict standards for quality
                                    and performance. Our team is passionate
                                    about technology and dedicated to helping
                                    you find the perfect solution for your
                                    needs, whether it's for work, play, or
                                    everyday life.
                                </p>
                            </div>
                        </div>
                    </article>
                    <div className={styles["who-we-are-container"]}>
                        <h2>Mission, Vission and Values</h2>
                        <div className={styles["who-we-are"]}>
                            <article className={styles["mission"]}>
                                <h3>Mission</h3>
                                <p>
                                    Our mission is to empower our customers by
                                    providing a diverse selection of electronics
                                    at competitive prices, backed by expert
                                    advice and outstanding support. We strive to
                                    create a seamless and enjoyable shopping
                                    experience, both online and in-store.
                                </p>
                            </article>

                            <article className={styles["vission"]}>
                                <h3>Vission</h3>
                                <p>
                                    We envision a world where technology
                                    enhances every aspect of life. Our goal is
                                    to be at the forefront of this
                                    transformation, offering innovative products
                                    and services that inspire and enable our
                                    customers to achieve more.
                                </p>
                            </article>
                            <article className={styles["values"]}>
                                <h3>Values</h3>
                                <p>
                                    Integrity, customer focus, and continuous
                                    improvement are at the heart of everything
                                    we do. We believe in building lasting
                                    relationships with our customers, partners,
                                    and community through transparency, respect,
                                    and a commitment to excellence.{" "}
                                </p>
                            </article>
                        </div>
                    </div>
                    <div className={styles["c-t-a"]}></div>
                </div>
            </div>
        </section>
    );
}
