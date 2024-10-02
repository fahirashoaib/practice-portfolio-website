document.addEventListener('DOMContentLoaded', function() {
    const dropdownBtn = document.getElementById('dropdownBtn');
    const dropdownContent = document.getElementById('dropdownContent');
    const dropdownLinks = dropdownContent.querySelectorAll('a');

    // Toggle dropdown on click
    dropdownBtn.addEventListener('click', function() {
        dropdownContent.classList.toggle('show');
    });

    // Handle click event for each dropdown link
    dropdownLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove 'active' class from all links
            dropdownLinks.forEach(l => l.classList.remove('active'));
            // Add 'active' class to the clicked link
            this.classList.add('active');

            // Optionally, close the dropdown after a link is clicked
            dropdownContent.classList.remove('show');
        });
    });

    // Close the dropdown if clicked outside
    window.addEventListener('click', function(event) {
        if (!dropdownBtn.contains(event.target) && !dropdownContent.contains(event.target)) {
            dropdownContent.classList.remove('show');
        }
    });

});



document.addEventListener("DOMContentLoaded", function () {
    const langBtn = document.querySelector(".langBtn");
    const languageContent = document.getElementById("languageContent");
    const quoteElement = document.getElementById("quote");
    
    langBtn.addEventListener("click", function () {
        // Toggle language content visibility
        if (languageContent.style.display === "none" || languageContent.style.display === "") {
            languageContent.style.display = "block"; // Show language options
        } else {
            languageContent.style.display = "none"; // Hide language options
        }
    });

    // Change language when a language link is clicked
    languageContent.addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
            event.preventDefault(); // Prevent the default anchor click behavior
            
            const selectedLang = event.target.getAttribute("data-lang");
            // Hide language options after selection
            languageContent.style.display = "none"; 
            // Update the quote based on the selected language
            const quotes = {
                en: '"The only limit to our realization of tomorrow is our doubts of today."',
                es: '"El único límite para nuestra realización de mañana son nuestras dudas de hoy."',
                fr: '"La seule limite à notre réalisation de demain est nos doutes d\'aujourd\'hui."'
            };

            quoteElement.textContent = quotes[selectedLang] || quotes.en; // Default to English
        }
    });
});


// Above code is handling button clicking events occuring on my webpage //


const profileData = {
    courses: ["Coursera: Algorithms part I and part II by Princeton University","Coursera: Introduction to Python Programming by University of Pennsylvania"],
    experiences: ["Use of Data Structures and Object Oriented Programming to build games and some other projects","Use of mongodb","Use of git and github with visual studio scode and visual studio","Use of water paints, oil paints, poster paints and drawing, painting and sketching"],
    project1: ["Tribute Page","Skyline painting","Survey Form","Product Landing Page","Technical Documentation","Calorie Counter","Rock, Paper, Scissors game"],
    project2: ["More projects to be done soon....."],
    project3: ["More projects to be done soon....."],
    project4: ["More projects to be done soon....."],
    videos: [{
        title: "About ITU alumini: ",
        url: "https://www.youtube.com/embed/pH75SkiFURY"
    }],
    instaPosts:
        [{
        type: 'instagram',
        url: 'https://www.instagram.com/reel/C_Kp3dnNsIq/'
    }],
    fbPosts: [
    {
        type: 'facebook',
        url: 'https://www.facebook.com/ITU.punjab/posts/948487790654882'
    },
    {
        type: 'facebook',
        url: 'https://www.facebook.com/facebook/videos/10153231379946729/'
    }
]
}

function populateProfile(){
    // Add courses in the learning section
    const coursesLists=document.getElementById("my-courses");
    profileData.courses.forEach(course =>{
        const li=document.createElement('li');
        li.textContent=course;
        coursesLists.appendChild(li);
    })

    // Add experience in the learning section
    const experienceList=document.getElementById("my-experience");
    profileData.experiences.forEach(experience=>{
        const li=document.createElement('li');
        li.textContent=experience;
        experienceList.appendChild(li);
    })

    // Add projects made in html css and js 
    const htmlCssJsProjects=document.getElementById("html-css-js-projects");
    profileData.project1.forEach(project=>{
        const li=document.createElement('li');
        li.textContent=project;
        htmlCssJsProjects.appendChild(li);
    })

    const pythonProjects=document.getElementById("python-projects");
    profileData.project2.forEach(project=>{
        const li=document.createElement('li');
        li.textContent=project;
        pythonProjects.appendChild(li);
    })

    const cHashProjects=document.getElementById("c#-projects");
    profileData.project3.forEach(project=>{
        const li=document.createElement('li');
        li.textContent=project;
        cHashProjects.appendChild(li);
    })

    const cppProjects=document.getElementById("cpp-projects");
    profileData.project4.forEach(project=>{
        const li=document.createElement('li');
        li.textContent=project;
        cppProjects.appendChild(li);
    })

    // Embed another video

    const videoContainer = document.getElementById('video-container2');
    videoContainer.innerHTML = ''; // Clear existing content

    profileData.videos.forEach(video => {
        const iframe = document.createElement('iframe');
        iframe.className = 'my-video';
        iframe.src = video.url;
        iframe.frameBorder = '0';
        iframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;

        const videoWrapper = document.createElement('div');
        videoWrapper.className = 'video-wrapper';
        
        const title = document.createElement('h3');
        title.textContent = video.title;
        
        videoWrapper.appendChild(title);
        videoWrapper.appendChild(iframe);
        videoContainer.appendChild(videoWrapper);
    });

    // Add insta post

    const instaContainer = document.getElementById('post-container2');
    instaContainer.innerHTML = ''; // Clear existing content

    profileData.instaPosts.forEach(post => {
        const postWrapper = document.createElement('div');
            postWrapper.className = 'my-media';

            const blockquote = document.createElement('blockquote');
            blockquote.className = 'instagram-media';
            blockquote.setAttribute('data-instgrm-permalink', post.url);
            blockquote.setAttribute('data-instgrm-version', '14');

            const link = document.createElement('a');
            link.href = post.url;

            blockquote.appendChild(link);
            postWrapper.appendChild(blockquote);
            instaContainer.appendChild(postWrapper);
    });

    // Reload Instagram embed script
    if (window.instgrm) {
        window.instgrm.Embeds.process();
    }

    // const fbContainer = document.getElementById('post-container3');
    // fbContainer.innerHTML = ''; // Clear existing content

    // profileData.fbPosts.forEach(post => {
    //     const postWrapper = document.createElement('div');
    //     postWrapper.className = 'my-media';

    //     const div = document.createElement('div');
    //     div.setAttribute('data-href', post.url);

    //     postWrapper.appendChild(div);
    //     fbContainer.appendChild(postWrapper);
    // });


    // if (window.FB) {
    //     window.FB.XFBML.parse();
    // }
}
window.onload = populateProfile;