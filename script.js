document.addEventListener('DOMContentLoaded', () => {
    // Toggle the display of the FAQ section
    const toggleButton = document.getElementById('toggleButton');
    const toggleSection = document.getElementById('toggleSection');
    toggleButton.addEventListener('click', () => {
        toggleSection.style.display = toggleSection.style.display === 'none' ? 'block' : 'none';
    });

    // Toggle the display of the testimonials form
    const showTestimonialFormButton = document.getElementById('showTestimonialFormButton');
    const testimonialsFormSection = document.getElementById('testimonialsFormSection');
    showTestimonialFormButton.addEventListener('click', () => {
        testimonialsFormSection.style.display = testimonialsFormSection.style.display === 'none' ? 'block' : 'none';
    });

    // Show all testimonials
    const createElementButton = document.getElementById('showTestimonialsButton');
    const testimonialsSection = document.getElementById('testimonialsSection');
    createElementButton.addEventListener('click', () => {
        testimonialsSection.style.display = 'block';
    });

    // Increment the subscription counter
    const counterButton = document.getElementById('counterButton');
    const counterSpan = document.getElementById('counter');
    let counter = 0;
    counterButton.addEventListener('click', () => {
        counter++;
        counterSpan.textContent = counter;
    });

    // Form submission with dynamic feedback and subscription list update
    const signupForm = document.getElementById('signupForm');
    const thankYouMessage = document.getElementById('thankYouMessage');
    const subscriptionsList = document.getElementById('subscriptionsList');
    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();  // Prevent the form from submitting the traditional way

        // Show the thank you message
        thankYouMessage.style.display = 'block';
        setTimeout(() => {
            thankYouMessage.style.display = 'none';
        }, 3000);  // Hide the message after 3 seconds

        // Increment the counter
        counter++;
        counterSpan.textContent = counter;

        // Add the subscription to the list
        const email = document.getElementById('email').value;
        const listItem = document.createElement('li');
        listItem.textContent = email;
        subscriptionsList.appendChild(listItem);

        // Show the subscriptions section
        document.getElementById('subscriptionsSection').style.display = 'block';
    });

    // Form submission for testimonials
    const testimonialForm = document.getElementById('testimonialForm');
    const testimonialsList = document.getElementById('testimonialsList');
    testimonialForm.addEventListener('submit', (event) => {
        event.preventDefault();  // Prevent the form from submitting the traditional way

        // Add the testimonial to the list
        const testimonial = document.getElementById('testimonial').value;
        const listItem = document.createElement('li');
        listItem.textContent = testimonial;
        testimonialsList.appendChild(listItem);

        // Show the testimonials section
        testimonialsSection.style.display = 'block';

        // Clear the testimonial input field
        document.getElementById('testimonial').value = '';
    });
});
