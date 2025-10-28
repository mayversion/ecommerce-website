import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProducts } from '../actions/productActions';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Chip,
  Rating,
  CircularProgress,
  Alert,
  Paper,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  ShoppingCart,
  Star,
  TrendingUp,
  LocalShipping,
  Security,
  Support
} from '@mui/icons-material';

const Home = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const { loading, products, error } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const features = [
    {
      icon: <LocalShipping />,
      title: 'Free Shipping',
      description: 'Free shipping on orders over $50'
    },
    {
      icon: <Security />,
      title: 'Secure Payment',
      description: '100% secure payment processing'
    },
    {
      icon: <Support />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support'
    }
  ];

  const categories = [
    { name: 'Electronics', image: '/images/electronics.jpg', count: 150 },
    { name: 'Clothing', image: '/images/clothing.jpg', count: 200 },
    { name: 'Home & Garden', image: '/images/home.jpg', count: 100 },
    { name: 'Sports', image: '/images/sports.jpg', count: 75 }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: (theme) => `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
          color: 'white',
          py: 10,
          textAlign: 'center'
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to May Store
          </Typography>
          <Typography variant="h5" component="p" sx={{ mb: 4, opacity: 0.9 }}>
            Discover premium products. Curated selection, trusted quality.
          </Typography>
          <Button
            variant="contained"
            size="large"
            component={Link}
            to="/products"
            sx={{
              backgroundColor: 'white',
              color: 'primary.dark',
              '&:hover': {
                backgroundColor: '#f5f5f5'
              }
            }}
          >
            Shop Now
          </Button>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography variant="h4" component="h2" textAlign="center" gutterBottom>
          Why Choose Us?
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  textAlign: 'center',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
              >
                <Box
                  sx={{
                    backgroundColor: 'primary.main',
                    color: 'white',
                    borderRadius: '50%',
                    p: 2,
                    mb: 2
                  }}
                >
                  {feature.icon}
                </Box>
                <Typography variant="h6" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Categories Section */}
      <Box sx={{ backgroundColor: 'background.default', py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" textAlign="center" gutterBottom>
            Shop by Category
          </Typography>
          <Grid container spacing={3} sx={{ mt: 2 }}>
            {categories.map((category, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card component={Link} to={`/products?category=${category.name.toLowerCase()}`}
                  sx={{ textDecoration: 'none', height: 220, position: 'relative', overflow: 'hidden',
                    transition: 'transform 0.2s ease', '&:hover': { transform: 'translateY(-4px)' } }}>
                  <Box sx={{ position: 'absolute', inset: 0, background:
                    (theme)=>`linear-gradient(135deg, ${theme.palette.primary.light}33, ${theme.palette.primary.main}66)` }} />
                  <Box sx={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant="h6" sx={{ color: 'white', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
                      {category.name}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Featured Products Section */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
          <TrendingUp sx={{ mr: 1, color: 'primary.main' }} />
          <Typography variant="h4" component="h2">
            Featured Products
          </Typography>
        </Box>

        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
            <CircularProgress />
          </Box>
        ) : error ? (
          <Alert severity="error">{error}</Alert>
        ) : (
          <Grid container spacing={3}>
            {products && products.slice(0, 8).map((product) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={product._id}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)'
                    }
                  }}
                >
                  {product.images[0]?.url ? (
                    <CardMedia component="img" height="200" image={product.images[0].url} alt={product.name} sx={{ objectFit: 'cover' }} />
                  ) : (
                    <Box sx={{ height: 200, backgroundColor: 'grey.200' }} />
                  )}
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" component="h3" gutterBottom>
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                      {product.description.substring(0, 100)}...
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Rating value={product.ratings} readOnly size="small" />
                      <Typography variant="body2" sx={{ ml: 1 }}>
                        ({product.numOfReviews})
                      </Typography>
                    </Box>
                    <Typography variant="h6" color="primary">
                      ${product.price}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      component={Link}
                      to={`/product/${product._id}`}
                      startIcon={<ShoppingCart />}
                      fullWidth
                    >
                      View Details
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}

        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button
            variant="outlined"
            size="large"
            component={Link}
            to="/products"
          >
            View All Products
          </Button>
        </Box>
      </Container>
      {/* Newsletter Section */}
      <Box sx={{ backgroundColor: 'primary.main', color: 'white', py: 8, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h4" gutterBottom>Stay Updated</Typography>
          <Typography variant="body1" sx={{ opacity: 0.9, mb: 3 }}>Get the latest products and offers.</Typography>
          <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Paper component="form" onSubmit={(e)=>e.preventDefault()} sx={{ display: 'flex', overflow: 'hidden', borderRadius: 2, width: { xs: '100%', sm: 480 } }}>
              <Box component="input" type="email" placeholder="Your email" aria-label="Email"
                sx={{ flex: 1, px: 2, border: 0, outline: 'none', height: 48 }} />
              <Button type="submit" variant="contained" color="secondary" sx={{ borderRadius: 0, px: 3 }}>Subscribe</Button>
            </Paper>
          </Box>
          <Typography variant="caption" sx={{ display: 'block', mt: 2, opacity: 0.8 }}>We respect your privacy.</Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;

