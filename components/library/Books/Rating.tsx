import React from 'react'

type RatingProps = {
  bookId: number
  rating: number
  readonly?: boolean
}

const Rating = ({ bookId, rating, readonly }: RatingProps) => {
  return (
    <div className="rating">
      {Array.from({ length: 5 }).map((_, i) => (
        <input
          type="radio"
          key={`rating-${bookId}-${i}`}
          name={`rating-${bookId}`}
          value={i + 1}
          checked={rating === i + 1}
          readOnly={readonly}
          className="mask mask-star-2 bg-accent"
        />
      ))}
    </div>
  )
}

export default Rating
