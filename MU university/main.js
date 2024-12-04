// wait for the dom to fully load before running scripts
document.addEventListener('DOMContentLoaded', () => {
    // handles the toggling of the navigation menu on smaller screens
    const navLinks = document.getElementById('navLinks');

    window.showMenu = () => {
        navLinks.style.right = '0';
    };

    window.hideMenu = () => {
        navLinks.style.right = '-200px';
    };

    // validates the contact form when submitted
    const contactForm = document.querySelector('form[action="form-handler.php"]');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            const name = contactForm.name.value.trim();
            const email = contactForm.email.value.trim();
            const subject = contactForm.subject.value.trim();
            const message = contactForm.message.value.trim();
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            let errorMessage = '';

            // checks if the name field is filled
            if (!name) errorMessage += 'name is required.\n';
            // ensures a valid email format is provided
            if (!email || !emailPattern.test(email)) errorMessage += 'a valid email is required.\n';
            // ensures the subject field is not empty
            if (!subject) errorMessage += 'subject is required.\n';
            // ensures the message field is not empty
            if (!message) errorMessage += 'message is required.\n';

            // if there are validation errors, show an alert and prevent form submission
            if (errorMessage) {
                alert(errorMessage);
                e.preventDefault();
            }
        });
    }

    // dynamically creates and adds a paragraph to the page
    const dynamicElement = document.createElement('p');
    dynamicElement.classList.add('dynamic-paragraph');
    dynamicElement.onclick = function () {
        alert('this is a dynamic paragraph.');
    };
    dynamicElement.textContent = 'click me to see an alert!';

    const body = document.getElementsByTagName('body')[0];
    body.appendChild(dynamicElement);

    // dynamically generates course elements and adds them to the course section
    const courseSection = document.querySelector('.course .row');
    if (courseSection) {
        const courses = [
            { title: 'computer science', description: 'Software engineers design and maintain large-scale, complex software infrastructures. Our program combines theoretical computer science with principles and practices used in the modern software industry, providing you with real-world experience. ' },
            { title: 'Accounting & Finance (ACCA)', description: 'Our faculty offers unique ACCA track courses that enable students to sit for ACCA exams and obtain nine major certificates. Unlike other universities, we provide comprehensive instruction in ACCA track courses, assisting students at every step of their journey.' },
            { title: 'business management', description: 'The course “Business Management”, operating on the basis of the Faculty of International Business, teaches students to organize, carry out state registration, liquidate and manage global and local corporate structures and small businesses, regardless of ownership forms. ' },
        ];

        courses.forEach(course => {
            // creates a container for each course
            const courseCol = document.createElement('div');
            courseCol.classList.add('course-col');

            // creates and adds the course title
            const courseTitle = document.createElement('h3');
            courseTitle.textContent = course.title;

            // creates and adds the course description
            const courseDesc = document.createElement('p');
            courseDesc.textContent = course.description;

            courseCol.appendChild(courseTitle);
            courseCol.appendChild(courseDesc);
            courseSection.appendChild(courseCol);
        });
    }
});