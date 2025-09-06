const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8082;

// In-memory storage for testing
let users = [];
let products = [];
let nextUserId = 1;
let nextProductId = 1;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Simple authentication middleware
const auth = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }
  
  const user = users.find(u => u.id.toString() === token);
  if (!user) {
    return res.status(401).json({ message: 'Invalid token.' });
  }
  
  req.user = user;
  next();
};

// Authentication routes
app.post('/api/auth/register', (req, res) => {
  try {
    const { username, email, password } = req.body;
    
    // Check if user already exists
    if (users.find(u => u.email === email || u.username === username)) {
      return res.status(400).json({ message: 'User already exists' });
    }
    
    // Create new user
    const user = {
      id: nextUserId++,
      username,
      email,
      password, // In real app, this would be hashed
      createdAt: new Date()
    };
    
    users.push(user);
    
    // Generate simple token (user ID)
    const token = user.id.toString();
    
    res.status(201).json({
      message: 'User created successfully',
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/api/auth/login', (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Find user by email
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    
    // Generate simple token
    const token = user.id.toString();
    
    res.json({
      message: 'Login successful',
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.get('/api/auth/me', auth, (req, res) => {
  try {
    res.json({
      user: {
        id: req.user.id,
        username: req.user.username,
        email: req.user.email
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Product routes
app.get('/api/products', (req, res) => {
  try {
    const productsWithUsers = products.map(product => ({
      ...product,
      createdBy: users.find(u => u.id === product.createdBy)?.username || 'Unknown'
    }));
    res.json(productsWithUsers);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.get('/api/products/:id', (req, res) => {
  try {
    const product = products.find(p => p.id.toString() === req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    const productWithUser = {
      ...product,
      createdBy: users.find(u => u.id === product.createdBy)?.username || 'Unknown'
    };
    res.json(productWithUser);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/api/products', auth, (req, res) => {
  try {
    const { name, description, price, category, stock, imageUrl } = req.body;
    
    const product = {
      id: nextProductId++,
      name,
      description,
      price: parseFloat(price),
      category,
      stock: parseInt(stock),
      imageUrl: imageUrl || '',
      createdBy: req.user.id,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    products.push(product);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.put('/api/products/:id', auth, (req, res) => {
  try {
    const product = products.find(p => p.id.toString() === req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    // Check if user owns the product
    if (product.createdBy !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized' });
    }
    
    const { name, description, price, category, stock, imageUrl } = req.body;
    
    product.name = name;
    product.description = description;
    product.price = parseFloat(price);
    product.category = category;
    product.stock = parseInt(stock);
    if (imageUrl) product.imageUrl = imageUrl;
    product.updatedAt = new Date();
    
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.delete('/api/products/:id', auth, (req, res) => {
  try {
    const productIndex = products.findIndex(p => p.id.toString() === req.params.id);
    if (productIndex === -1) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    const product = products[productIndex];
    
    // Check if user owns the product
    if (product.createdBy !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized' });
    }
    
    products.splice(productIndex, 1);
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Serve the main HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Test Server is running on port ${PORT}`);
  console.log(`No MongoDB required - using in-memory storage`);
  console.log(`Access the app at: http://localhost:${PORT}`);
}); 