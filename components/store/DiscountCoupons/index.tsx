import React from 'react'
import styles from './DiscountCoupons.module.css'

interface DiscountCouponsProps {
  coupons: string[]
}

const DiscountCoupons: React.FC<DiscountCouponsProps> = ({ coupons }) => {
  if (!coupons) return null

  const handleCopy = (coupon: string) => {
    navigator.clipboard.writeText(coupon)
    alert(`Cupom ${coupon} copiado!`)
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Cupom:</h3>

      <div className={styles.couponsList}>
        {coupons.map((coupon, index) => (
          <span key={index} className={styles.coupon} onClick={() => handleCopy(coupon)}>
            {coupon}
          </span>
        ))}
      </div>
    </div>
  )
}

export default DiscountCoupons
