// Global variables
let currentUser = null;
let currentProductId = null;
let isEditMode = false;

// API base URL
const API_BASE = '/api';

// DOM elements
const authContainer = document.getElementById('authContainer');
const mainContent = document.getElementById('mainContent');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const loginFormElement = document.getElementById('loginFormElement');
const registerFormElement = document.getElementById('registerFormElement');
const productModal = document.getElementById('productModal');
const productForm = document.getElementById('productForm');
const productsGrid = document.getElementById('productsGrid');
const alertDiv = document.getElementById('alert');

// Check if user is already logged in
document.addEventListener('DOMContentLoaded', () => {
    const token = localStorage.getItem('token');
    if (token) {
        checkAuthStatus();
    }
});

// Event listeners
loginFormElement.addEventListener('submit', handleLogin);
registerFormElement.addEventListener('submit', handleRegister);
productForm.addEventListener('submit', handleProductSubmit);

// Authentication functions
async function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    try {
        const response = await fetch(`${API_BASE}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        
        const data = await response.json();
        
        if (response.ok) {
            localStorage.setItem('token', data.token);
            currentUser = data.user;
            showMainContent();
            loadProducts();
            showAlert('Login successful!', 'success');
        } else {
            showAlert(data.message || 'Login failed', 'error');
        }
    } catch (error) {
        showAlert('Network error. Please try again.', 'error');
    }
}

async function handleRegister(e) {
    e.preventDefault();
    
    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    
    try {
        const response = await fetch(`${API_BASE}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password })
        });
        
        const data = await response.json();
        
        if (response.ok) {
            localStorage.setItem('token', data.token);
            currentUser = data.user;
            showMainContent();
            loadProducts();
            showAlert('Registration successful!', 'success');
        } else {
            showAlert(data.message || 'Registration failed', 'error');
        }
    } catch (error) {
        showAlert('Network error. Please try again.', 'error');
    }
}

async function checkAuthStatus() {
    const token = localStorage.getItem('token');
    if (!token) return;
    
    try {
        const response = await fetch(`${API_BASE}/auth/me`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        
        if (response.ok) {
            const data = await response.json();
            currentUser = data.user;
            showMainContent();
            loadProducts();
        } else {
            localStorage.removeItem('token');
        }
    } catch (error) {
        localStorage.removeItem('token');
    }
}

function logout() {
    localStorage.removeItem('token');
    currentUser = null;
    showAuthContainer();
    showAlert('Logged out successfully', 'success');
}

function showAuthContainer() {
    authContainer.style.display = 'block';
    mainContent.style.display = 'none';
}

function showMainContent() {
    authContainer.style.display = 'none';
    mainContent.style.display = 'block';
    updateUserInfo();
}

function updateUserInfo() {
    if (currentUser) {
        document.getElementById('userName').textContent = currentUser.username;
        document.getElementById('userEmail').textContent = currentUser.email;
        document.getElementById('userAvatar').textContent = currentUser.username.charAt(0).toUpperCase();
    }
}

function toggleAuth() {
    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    } else {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    }
}

// Product functions
async function loadProducts() {
    try {
        const response = await fetch(`${API_BASE}/products`);
        const products = await response.json();
        
        displayProducts(products);
    } catch (error) {
        showAlert('Failed to load products', 'error');
    }
}

function displayProducts(products) {
    productsGrid.innerHTML = '';
    
    if (products.length === 0) {
        productsGrid.innerHTML = '<p style="text-align: center; color: #666; grid-column: 1/-1;">No products found. Add your first product!</p>';
        return;
    }
    
    products.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    // Debug: Log the product and user data
    console.log('Product:', product);
    console.log('Current User:', currentUser);
    console.log('Product createdBy:', product.createdBy);
    console.log('Current User ID:', currentUser?.id);
    console.log('Current User Username:', currentUser?.username);
    
    // Fix: Check if current user owns the product
    // The test server uses 'id' instead of '_id', and createdBy can be user ID or username
    const isOwner = currentUser && (
        product.createdBy === currentUser.id || 
        product.createdBy === currentUser.username ||
        (typeof product.createdBy === 'string' && product.createdBy === currentUser.username)
    );
    
    console.log('Is Owner:', isOwner);
    
    // Create image HTML
    let imageHTML = '';
    if (product.imageUrl && product.imageUrl.trim() !== '') {
        console.log('Adding image URL:', product.imageUrl);
        imageHTML = `<img src="${product.imageUrl}" alt="${product.name}" class="product-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'; console.log('Image failed to load:', this.src);" onload="console.log('Image loaded successfully:', this.src);">`;
    }
    imageHTML += `<div class="product-image-placeholder" style="display: ${product.imageUrl && product.imageUrl.trim() !== '' ? 'none' : 'flex'}">
        <i class="fas fa-image"></i> No Image
    </div>`;

    card.innerHTML = `
        ${imageHTML}
        <div class="product-header">
            <div>
                <div class="product-title">${product.name}</div>
                <div class="product-category">${product.category}</div>
            </div>
        </div>
        <div class="product-description">${product.description}</div>
        <div class="product-meta">
            <div class="product-price">$${product.price.toFixed(2)}</div>
            <div class="product-stock">Stock: ${product.stock}</div>
        </div>
        ${isOwner ? `
            <div class="product-actions">
                <button class="btn btn-success" onclick="editProduct('${product.id || product._id}')">
                    <i class="fas fa-edit"></i> Edit
                </button>
                <button class="btn btn-danger" onclick="deleteProduct('${product.id || product._id}')">
                    <i class="fas fa-trash"></i> Delete
                </button>
            </div>
        ` : ''}
    `;
    
    return card;
}

function openAddProductModal() {
    isEditMode = false;
    currentProductId = null;
    document.getElementById('modalTitle').textContent = 'Add Product';
    document.getElementById('productForm').reset();
    productModal.style.display = 'block';
}

function closeProductModal() {
    productModal.style.display = 'none';
    document.getElementById('productForm').reset();
}

async function editProduct(productId) {
    try {
        const response = await fetch(`${API_BASE}/products/${productId}`);
        const product = await response.json();
        
        isEditMode = true;
        currentProductId = productId;
        document.getElementById('modalTitle').textContent = 'Edit Product';
        
        // Fill form with product data
        document.getElementById('productName').value = product.name;
        document.getElementById('productDescription').value = product.description;
        document.getElementById('productPrice').value = product.price;
        document.getElementById('productCategory').value = product.category;
        document.getElementById('productStock').value = product.stock;
        document.getElementById('productImageUrl').value = product.imageUrl || '';
        
        productModal.style.display = 'block';
    } catch (error) {
        showAlert('Failed to load product details', 'error');
    }
}

async function handleProductSubmit(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('productName').value,
        description: document.getElementById('productDescription').value,
        price: parseFloat(document.getElementById('productPrice').value),
        category: document.getElementById('productCategory').value,
        stock: parseInt(document.getElementById('productStock').value),
        imageUrl: document.getElementById('productImageUrl').value
    };
    
    try {
        const url = isEditMode ? `${API_BASE}/products/${currentProductId}` : `${API_BASE}/products`;
        const method = isEditMode ? 'PUT' : 'POST';
        
        const response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(formData)
        });
        
        if (response.ok) {
            closeProductModal();
            loadProducts();
            showAlert(
                isEditMode ? 'Product updated successfully!' : 'Product created successfully!', 
                'success'
            );
        } else {
            const data = await response.json();
            showAlert(data.message || 'Operation failed', 'error');
        }
    } catch (error) {
        showAlert('Network error. Please try again.', 'error');
    }
}

async function deleteProduct(productId) {
    if (!confirm('Are you sure you want to delete this product?')) {
        return;
    }
    
    try {
        const response = await fetch(`${API_BASE}/products/${productId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        
        if (response.ok) {
            loadProducts();
            showAlert('Product deleted successfully!', 'success');
        } else {
            const data = await response.json();
            showAlert(data.message || 'Delete failed', 'error');
        }
    } catch (error) {
        showAlert('Network error. Please try again.', 'error');
    }
}

// Utility functions
function showAlert(message, type) {
    alertDiv.textContent = message;
    alertDiv.className = `alert alert-${type}`;
    alertDiv.style.display = 'block';
    
    setTimeout(() => {
        alertDiv.style.display = 'none';
    }, 3000);
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target === productModal) {
        closeProductModal();
    }
} 