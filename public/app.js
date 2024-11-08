document.addEventListener("DOMContentLoaded", function () {
    fetch("/courses")
        .then((response) => {
            console.log('Response:', response);
            return response.json();
        })
        .then((data) => {
            console.log('Courses Data:', data);
            const courseList = document.getElementById("course-list");
            function calculateDiscountPercentage(originalPrice, discountedPrice) {
                const discount = ((originalPrice - discountedPrice) / originalPrice) * 100;
                return Math.round(discount);
            }

            data.forEach(course => {
                const courseCard = document.createElement("div");
                courseCard.classList.add("course-card");
                const discountPercentage = calculateDiscountPercentage(course.price, course.discountedPrice);
                courseCard.innerHTML = `<h3>${course.name}</h3>
                                        <div class="description">${course.description}</div>
                                        <div class="container">
                                        <div class="price-section">
                                        <div><p class="original-price">$${course.price}</p>
                                        <p class="discounted-price">$${course.discountedPrice}</p></div>
                                        <span class="discount">${discountPercentage}% <br>OFF</span>
                                        </div>
                                        <button class="btn" onclick="purchaseCourse(${course.id})">Buy</button></div> `;
                courseList.appendChild(courseCard);
            });
        })
        .catch(error => console.error('Error fetching courses:', error))

});
function submitdata(event) {
    event.preventDefault(); 
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    console.log("Contact Form Submission:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    alert("Submitted successfully!");
}


function purchaseCourse(courseId) {
    window.location.href = `/checkout.html?courseId=${courseId}`;
}
