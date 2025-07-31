const products = [
  {
    id: 1,
    name: "Men's Denim Jacket",
    category: "Men",
    price: 1299,
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR41LZvza40TeJUPFCAZPQeruYpf8Ag9ijKt_zYPCkbMdOSBVmEg7B7qlI3RqoRnWOhF1BlJsD-RrkgWlvnbODHE0sB9nSRq_7KHPzfyys",
    size: "M, L, XL",
    description: "Classic fit, cotton blend, ideal for everyday wear.",
    link: "https://www.myntra.com/product/men-jacket-demo"
  },
  {
    id: 2,
    name: "Women's Printed Kurti",
    category: "Women",
    price: 899,
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTBrWQaOHbXXZQ4znqm2wH7f07pUp35FNHLFEJ6EO1TFPNx73F2-zpweiY3TgzQ7t6yQTHVrwtlihGdHYtxWLbGNlQD3qdaIluXeaE6MVhQpYNGR0y-h8G2ZCI&usqp=CAc",
    size: "S, M, L",
    description: "Floral print kurti with vibrant colors, ideal for everyday wear.",
    link: "https://www.myntra.com/product/women-kurti-demo"
  },
  {
    id: 3,
    name: "Kids Graphic T-Shirt",
    category: "Kids",
    price: 499,
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRqrHQX0EWEZABtfiZ81jiBOmALHUkQbdiEmhn4OU40tCw00oiYE5RKqDNIoEDu7R0ZQaQZYnHTh-FIOwmimP35Hh7FbCyn2sPtJtfJ3IXuQmWrRFterJWtQx7JIIx91EOYShx5Vb-u3J9F&usqp=CAc",
    size: "5-6Y, 7-8Y",
    description: "100% cotton, colorful cartoon print.",
    link: "https://www.myntra.com/product/kids-tshirt-demo"
  },
  {
    id: 4,
    name: "Men's Casual Shoes",
    category: "Men",
    price: 1599,
    image: "data:image/jpeg;base64,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",
    size: "8, 9, 10",
    description: "Trendy lace-up shoes for casual outings.",
    link: "https://www.myntra.com/product/men-shoes-demo"
  },
  {
    id: 5,
    name: "Women's Sneakers",
    category: "Women",
    price: 1799,
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT7J9u52Jf7XKBrDez5XxOn7X3a91K8TcgO3MYJsUHeterC7hDj5khWeRa9Oc0Jqc2b1kQag4s23IUArrM6oY3hByBd9eJrjvXxQ8PK_CNOOCw0ZJ8Y2Tt1",
    size: "6, 7, 8",
    description: "Comfortable sneakers with cushioned sole for daily use purpose.",
    link: "https://www.myntra.com/product/women-sneakers-demo"
  },
  {
    id: 6,
    name: "Kids Shorts",
    category: "Kids",
    price: 349,
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRhCPMo4rwVV3nvVN0w1bLQcIQanBXAL7FpO751HeTF1sI3EHi-oea-lzx676s7WujAeZQZ6XQ4HpAY2Wf9tSSXbT6TPTTtoAwVmZz7Q5M",
    size: "5-6Y, 7-8Y",
    description: "Soft shorts for play and daily wear.",
    link: "https://www.myntra.com/product/kids-shorts-demo"
  }
];

let filteredProducts = [...products];

function renderProducts() {
  const container = document.getElementById("productContainer");
  container.innerHTML = "";
  filteredProducts.forEach(p => {
    container.innerHTML += `
      <div class="product-card">
        <a href="${p.link}" target="_blank" style="text-decoration:none;color:inherit;">
          <img src="${p.image}" alt="${p.name}">
          <div class="product-card-body">
            <h6>${p.name}</h6>
            <p>₹${p.price}</p>
            <p style="font-size:12px;color:#555;">${p.description}</p>
            <p style="font-size:12px;color:#888;">Available sizes: ${p.size}</p>
          </div>
        </a>
        <button class="btn btn-sm btn-primary" style="margin: 0 10px 10px 10px;">Add to Bag</button>
      </div>
    `;
  });
}

function applyFilters() {
  const selectedCategories = [...document.querySelectorAll('.filter-checkbox:checked')].map(cb => cb.value);
  filteredProducts = products.filter(p => {
    return selectedCategories.length === 0 || selectedCategories.includes(p.category);
  });
  applySorting();
}

function applySorting() {
  const sort = document.getElementById("sortSelect").value;
  if (sort === "lowToHigh") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "highToLow") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }
  renderProducts();
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.filter-checkbox').forEach(cb => {
    cb.addEventListener('change', applyFilters);
  });

  const sortSelect = document.getElementById("sortSelect");
  if (sortSelect) {
    sortSelect.addEventListener("change", applySorting);
  }

  renderProducts();
});
