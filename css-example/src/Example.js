import styles from "./styles.module.css";

export default function Example() {
  const data = 'milkbot';

  console.log('data',data);
  return (

    <div className={styles.example}>
      <div className="example_css">
        <button className={styles.button}>Hello
        </button>
        {/* <h2 className="h2">H2</h2> */}
      </div>
    </div>
  );

}