import styles from'./index.module.css'

const Container = () => {
  return (
    <div className={styles.container}>
      <h1 className= {styles.tittle}> Este é o título</h1>
      <p className= {styles.paragraph}>E este é um paragrafo</p>
    </div>  
  )
}

export default Container