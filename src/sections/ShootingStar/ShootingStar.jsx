import styles from './ShootingStarStyles.module.css';

const ShootingStars = () => {
  return (
    <div className={styles.night}>
      <div className={styles.starsContainer}>
        {/* Crear las estrellas */}
        {[...Array(16)].map((_, index) => (
          <div className={styles.star} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ShootingStars;
