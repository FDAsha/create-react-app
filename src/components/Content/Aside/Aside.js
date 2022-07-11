const styles = {
  aside: {
    width: "200px",
    backgroundColor: "rgb(255, 242, 53)",
    marginRight: "30px"
  },
  p: {
    padding: "20px 0px 0 20px"
  }
}

function Aside() {
  return (
    <aside style={styles.aside}>
      <p style={styles.p}>сайдбар</p>
    </aside>
  )
}

export default Aside;