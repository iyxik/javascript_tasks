document.addEventListener("DOMContentLoaded", () => {
    // Get stored orders from localStorage
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    
    const renderOrders = (filteredOrders) => {
      const ordersContainer = document.getElementById("ordersContainer");
      ordersContainer.innerHTML = "";
  
      // Loop through orders and render each one
      filteredOrders.forEach(order => {
        const toppingsText = Array.isArray(order.toppings) ? order.toppings.join(", ") : "No toppings";
        const extrasText = Array.isArray(order.extras) ? order.extras.join(", ") : "No extras";
  
        const orderDiv = document.createElement("div");
        orderDiv.classList.add("order");
        orderDiv.innerHTML = `
          <p><strong>Order ID:</strong> ${order.id}</p>
          <p><strong>Customer Name:</strong> ${order.customerName}</p>
          <p><strong>Pancake Type:</strong> ${order.selectedPancake}</p>
          <p><strong>Toppings:</strong> ${toppingsText}</p>
          <p><strong>Extras:</strong> ${extrasText}</p>
          <p><strong>Delivery Method:</strong> ${order.deliveryMethod}</p>
          <p><strong>Total Price:</strong> ${order.totalPrice}€</p>
          <p><strong>Status:</strong> <span class="status ${order.status}">${order.status}</span></p>
          
          <select onchange="updateOrderStatus(${order.id}, this.value)">
            <option value="waiting" ${order.status === "waiting" ? "selected" : ""}>Waiting</option>
            <option value="ready" ${order.status === "ready" ? "selected" : ""}>Ready</option>
            <option value="delivered" ${order.status === "delivered" ? "selected" : ""}>Delivered</option>
          </select>
          ${order.status === "delivered" ? `<button class="remove-btn" onclick="removeOrder(${order.id})">Remove</button>` : ""}
        `;

        ordersContainer.appendChild(orderDiv);
      });
    };
  
    // Function to update the order status
    window.updateOrderStatus = function(orderId, newStatus) {
      let orders = JSON.parse(localStorage.getItem("orders")) || [];
      const orderIndex = orders.findIndex(order => order.id === orderId);
      
      if (orderIndex !== -1) {
        orders[orderIndex].status = newStatus;
        localStorage.setItem("orders", JSON.stringify(orders));
        renderOrders(orders);
      }
    }
  
    // Function to remove an order
    window.removeOrder = function(orderId) {
      let orders = JSON.parse(localStorage.getItem("orders")) || [];
      orders = orders.filter(order => order.id !== orderId); 
      localStorage.setItem("orders", JSON.stringify(orders)); // Save updated orders
      renderOrders(orders); // Re-render orders after removal
    }
  
    // Search functionality to filter orders by name or ID
    window.searchOrders = function() {
      const searchInput = document.getElementById("searchInput").value.toLowerCase();
      const filteredOrders = orders.filter(order => {
        return order.customerName.toLowerCase().includes(searchInput) || order.id.toString().includes(searchInput);
      });
      renderOrders(filteredOrders); // Render the filtered orders
    }
  
    // Sort orders based on selected status
    window.sortOrders = function() {
      const sortSelect = document.getElementById("sortSelect").value;
      let sortedOrders = [...orders];
      
      if (sortSelect === "waiting") {
        sortedOrders.sort((a, b) => (a.status === "waiting" ? -1 : (b.status === "waiting" ? 1 : 0)));
      } else if (sortSelect === "ready") {
        sortedOrders.sort((a, b) => (a.status === "ready" ? -1 : (b.status === "ready" ? 1 : 0)));
      } else {
        sortedOrders.sort((a, b) => (a.status === "delivered" ? -1 : (b.status === "delivered" ? 1 : 0)));
      }
      renderOrders(sortedOrders); // Re-render the orders after sorting
    }
  
    // Initial rendering of orders
    renderOrders(orders);
});