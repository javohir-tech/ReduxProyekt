import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function SingleProduct({
  id,
  image,
  title,
  price,
  originalPrice,
  currency = "so'm",
  reviews,
  label
}) {
  const handleChange = (e) => {
    e.preventDefault()
    return 1
  }

  // Xavfsiz toLocaleString funksiyasi
  const safeToLocaleString = (value) => {
    return typeof value === 'number' ? value.toLocaleString() : '0'
  }

  return (
    <Link to={`/product/${id}`} style={{ textDecoration: "none" }} className='d-block'>
      <Card className="position-relative h-100 border-0" style={{ maxWidth: '300px' }}>
        <div className="position-relative">
          <Button 
            variant="link"
            className="position-absolute top-0 end-0 z-3 p-2"
            aria-label="Add to wishlist"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </Button>
          
          <div className="position-relative" style={{ aspectRatio: '1/1' }}>
            <img
              src={image}
              alt={title}
              className="w-100 h-100 object-fit-cover rounded"
            />
          </div>
          
          {label && (
            <span className="position-absolute start-2 top-2 badge bg-warning text-dark">
              {label}
            </span>
          )}
        </div>

        <Card.Body className="d-flex flex-column justify-content-between p-3">
          <div>
            <Card.Title className="fs-6 mb-2" style={{
              display: '-webkit-box',
              WebkitLineClamp: '2',
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              minHeight: '40px'
            }}>
              {title}
            </Card.Title>
            
            <div className="text-secondary small mb-2">
              <span>{safeToLocaleString(reviews)} sharhlar</span>
            </div>
            
            <div className="d-flex align-items-baseline gap-2 mb-3">
              <span className="fs-5 fw-semibold">
                {safeToLocaleString(price)} {currency}
              </span>
              {originalPrice && (
                <span className="text-secondary small text-decoration-line-through">
                  {safeToLocaleString(originalPrice)} {currency}
                </span>
              )}
            </div>
          </div>

          <div className='d-flex justify-content-end'>
            <Button variant="primary" onClick={handleChange}>Go somewhere</Button>
          </div>
        </Card.Body>
      </Card>
    </Link>
  )
}

