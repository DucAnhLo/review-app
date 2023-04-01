import { useState } from 'react';
import { Box, Typography, TextField, Button, Divider } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

function ReviewAndRatings() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [reviews, setReviews] = useState([
    { stars: 5, count: 10 },
    { stars: 4, count: 5 },
    { stars: 3, count: 3 },
    { stars: 2, count: 1 },
    { stars: 1, count: 0 },
  ]);

  const handleRatingChange = (event, newValue) => {
    setRating(newValue);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = () => {
    // Do something with the rating and comment data
    console.log(`Rating: ${rating}, Comment: ${comment}`);
    setRating(0);
    setComment('');
    const updatedReviews = [...reviews];
    updatedReviews[rating - 1].count++;
    setReviews(updatedReviews);
  };

  const overallRating = reviews.reduce(
    (total, review) => total + review.stars * review.count,
    0
  ) / reviews.reduce((total, review) => total + review.count, 0);

  return (
    <Box display="flex" flexDirection="column" alignItems="center" p={3}>
      <Typography variant="h5" gutterBottom>
        Leave a review
      </Typography>
      <Rating name="rating" value={rating} onChange={handleRatingChange} />
      <TextField
        label="Comment"
        variant="outlined"
        multiline
        rows={4}
        value={comment}
        onChange={handleCommentChange}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
      <Divider variant="middle" style={{ margin: '24px 0' }} />
      <Box display="flex" justifyContent="space-between" width="100%">
        {reviews.map((review) => (
          <Box key={review.stars}>
            <Typography variant="h6" component="span">
              {review.stars} stars
            </Typography>
            <Box display="flex" alignItems="center">
              <Rating name="read-only" value={review.stars} readOnly size="small" />
              <Typography variant="subtitle1" component="span" style={{ marginLeft: 8 }}>
                {review.count}
              </Typography>
            </Box>
          </Box>
        ))}
        <Box>
          <Typography variant="h6" component="span">
            Overall
          </Typography>
          <Box display="flex" alignItems="center">
            <Rating name="read-only" value={overallRating} readOnly size="small" />
            <Typography variant="subtitle1" component="span" style={{ marginLeft: 8 }}>
              {overallRating.toFixed(1)}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ReviewAndRatings;
