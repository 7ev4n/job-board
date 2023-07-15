// Mock job data
const jobs = [
    {
      title: "Full Stack Developer",
      company: "XYZ Tech",
      location: "San Francisco, CA",
      description: "We are seeking a skilled Full Stack Developer to join our team. You will be responsible for developing and maintaining web applications using modern technologies. Strong knowledge of HTML, CSS, JavaScript, and experience with popular frameworks like React or Angular is required.",
      requirements: "Bachelor's degree in Computer Science or a related field, 3+ years of experience in web development, proficiency in front-end and back-end technologies, strong problem-solving skills, and excellent teamwork abilities.",
      salary: "$90,000 - $120,000",
    },
    {
      title: "Data Scientist",
      company: "Data Insights Co.",
      location: "New York, NY",
      description: "We are looking for a talented Data Scientist to join our team. You will work on analyzing and interpreting complex data sets to extract valuable insights. Proficiency in statistical analysis, machine learning, and programming languages such as Python or R is required.",
      requirements: "Master's or Ph.D. in Data Science, Statistics, or a related field, 2+ years of experience in data analysis and modeling, strong knowledge of statistical techniques and machine learning algorithms, proficiency in Python, R, or similar programming languages, and excellent communication skills.",
      salary: "$100,000 - $150,000",
    },
    {
      title: "UX/UI Designer",
      company: "Design Innovators",
      location: "Seattle, WA",
      description: "We are seeking a creative UX/UI Designer to join our team. You will be responsible for designing intuitive and visually appealing user interfaces for web and mobile applications. Proficiency in design tools such as Sketch or Adobe XD, as well as a solid understanding of user-centered design principles, is required.",
      requirements: "Bachelor's degree in Design, Human-Computer Interaction, or a related field, 3+ years of experience in UX/UI design, proficiency in design tools (e.g., Sketch, Adobe XD), strong portfolio demonstrating previous design projects, and excellent collaboration and communication skills.",
      salary: "$80,000 - $110,000",
    },
    {
      title: "DevOps Engineer",
      company: "Cloud Solutions Inc.",
      location: "Austin, TX",
      description: "We are looking for a skilled DevOps Engineer to join our team. You will be responsible for automating and streamlining our software development processes, as well as managing infrastructure and deployment pipelines. Experience with cloud platforms (e.g., AWS, Azure), containerization technologies (e.g., Docker, Kubernetes), and CI/CD tools is required.",
      requirements: "Bachelor's degree in Computer Science or a related field, 3+ years of experience in DevOps or system administration, strong knowledge of cloud platforms and infrastructure-as-code concepts, experience with containerization and orchestration tools, proficiency in scripting languages (e.g., Python, Bash), and strong problem-solving skills.",
      salary: "$95,000 - $130,000",
    },
    {
      title: "Product Manager",
      company: "Tech Innovations Ltd.",
      location: "Boston, MA",
      description: "We are seeking a skilled Product Manager to join our team. You will be responsible for defining and executing product strategies, conducting market research, and collaborating with cross-functional teams to deliver successful products. Strong analytical, leadership, and communication skills are required.",
      requirements: "Bachelor's degree in Business, Marketing, or a related field, 5+ years of experience in product management, solid understanding of product development lifecycle, excellent analytical and problem-solving skills, ability to collaborate effectively with diverse teams, and strong market research abilities.",
      salary: "$110,000 - $140,000",
    },
    {
      title: "Cybersecurity Analyst",
      company: "Secure Systems Corp.",
      location: "Washington, D.C.",
      description: "We are looking for a talented Cybersecurity Analyst to join our team. You will be responsible for analyzing security systems, detecting vulnerabilities, and implementing appropriate measures to protect against cyber threats. Strong knowledge of network security, incident response, and cybersecurity best practices is required.",
      requirements: "Bachelor's degree in Computer Science, Cybersecurity, or a related field, 3+ years of experience in cybersecurity, industry certifications such as CISSP or CISM, strong knowledge of network protocols and security technologies, experience with SIEM tools and incident response procedures, and excellent problem-solving skills.",
      salary: "$95,000 - $125,000",
    },
    {
      title: "Mobile App Developer",
      company: "App Creators Inc.",
      location: "Los Angeles, CA",
      description: "We are seeking a skilled Mobile App Developer to join our team. You will be responsible for developing and maintaining mobile applications for iOS and/or Android platforms. Strong knowledge of mobile app development frameworks (e.g., React Native, Flutter) and proficiency in programming languages (e.g., Swift, Kotlin) is required.",
      requirements: "Bachelor's degree in Computer Science or a related field, 3+ years of experience in mobile app development, proficiency in programming languages (e.g., Swift, Kotlin), experience with mobile app frameworks (e.g., React Native, Flutter), strong problem-solving skills, and excellent teamwork abilities.",
      salary: "$90,000 - $120,000",
    },
    {
      title: "Artificial Intelligence Engineer",
      company: "AI Solutions Co.",
      location: "San Diego, CA",
      description: "We are looking for a talented Artificial Intelligence Engineer to join our team. You will work on developing and implementing AI models and algorithms for various applications. Strong knowledge of machine learning, deep learning, and programming languages (e.g., Python, TensorFlow) is required.",
      requirements: "Master's or Ph.D. in Computer Science, Artificial Intelligence, or a related field, 2+ years of experience in AI development, solid understanding of machine learning and deep learning algorithms, proficiency in programming languages (e.g., Python, TensorFlow), and excellent problem-solving skills.",
      salary: "$100,000 - $140,000",
    },
    {
      title: "Quality Assurance Engineer",
      company: "QualityTech Solutions",
      location: "Chicago, IL",
      description: "We are seeking a meticulous Quality Assurance Engineer to join our team. You will be responsible for designing and executing test plans, identifying and reporting bugs, and ensuring the overall quality of our software products. Strong knowledge of testing methodologies and experience with test automation tools is required.",
      requirements: "Bachelor's degree in Computer Science or a related field, 3+ years of experience in software quality assurance, solid understanding of software testing methodologies, experience with test automation frameworks and tools, strong problem-solving skills, and excellent attention to detail.",
      salary: "$80,000 - $110,000",
    },
    {
      title: "Data Engineer",
      company: "Data Solutions Corp.",
      location: "Denver, CO",
      description: "We are looking for a skilled Data Engineer to join our team. You will be responsible for designing and implementing data pipelines, as well as optimizing data storage and retrieval. Strong knowledge of data modeling, SQL, and experience with big data technologies (e.g., Hadoop, Spark) is required.",
      requirements: "Bachelor's degree in Computer Science, Data Engineering, or a related field, 3+ years of experience in data engineering, proficiency in SQL and data modeling, experience with big data technologies (e.g., Hadoop, Spark), strong problem-solving skills, and excellent teamwork abilities.",
      salary: "$90,000 - $120,000",
    },
    {
      title: "IT Project Manager",
      company: "Tech Solutions Ltd.",
      location: "Dallas, TX",
      description: "We are seeking an experienced IT Project Manager to join our team. You will be responsible for planning, executing, and delivering IT projects within scope, schedule, and budget. Strong project management skills, leadership abilities, and excellent communication skills are required.",
      requirements: "Bachelor's degree in Information Technology, Computer Science, or a related field, 5+ years of experience in IT project management, PMP or PRINCE2 certification is a plus, solid understanding of project management methodologies, excellent leadership and communication skills, and strong problem-solving abilities.",
      salary: "$100,000 - $130,000",
    },
    {
      title: "Network Administrator",
      company: "Network Solutions Inc.",
      location: "Atlanta, GA",
      description: "We are looking for a skilled Network Administrator to join our team. You will be responsible for managing and maintaining network infrastructure, troubleshooting network issues, and ensuring optimal network performance. Strong knowledge of network protocols, firewall configuration, and experience with network monitoring tools is required.",
      requirements: "Bachelor's degree in Information Technology, Computer Science, or a related field, 3+ years of experience in network administration, strong knowledge of network protocols and technologies, experience with firewall configuration and network security, familiarity with network monitoring tools, and excellent problem-solving skills.",
      salary: "$85,000 - $110,000",
    },
    {
      title: "Business Analyst",
      company: "BizTech Solutions",
      location: "Houston, TX",
      description: "We are seeking a detail-oriented Business Analyst to join our team. You will work closely with stakeholders to gather and analyze business requirements, create functional specifications, and support the development of business applications. Strong analytical, communication, and documentation skills are required.",
      requirements: "Bachelor's degree in Business Administration, Information Systems, or a related field, 3+ years of experience in business analysis, solid understanding of business processes and requirements gathering, proficiency in requirements management tools, excellent analytical and communication skills, and strong attention to detail.",
      salary: "$80,000 - $110,000",
    },
    {
      title: "Cloud Architect",
      company: "Cloud Services Co.",
      location: "Seattle, WA",
      description: "We are looking for a talented Cloud Architect to join our team. You will be responsible for designing and implementing cloud-based solutions, as well as providing guidance on cloud adoption strategies. Strong knowledge of cloud platforms (e.g., AWS, Azure), infrastructure-as-code, and security best practices is required.",
      requirements: "Bachelor's degree in Computer Science, Cloud Computing, or a related field, 5+ years of experience in cloud architecture, strong knowledge of cloud platforms (e.g., AWS, Azure), experience with infrastructure-as-code tools (e.g., Terraform, CloudFormation), familiarity with security best practices, and excellent problem-solving skills.",
      salary: "$110,000 - $150,000",
    },
    {
      title: "Technical Writer",
      company: "Tech Publications Inc.",
      location: "San Francisco, CA",
      description: "We are seeking a skilled Technical Writer to join our team. You will be responsible for creating and maintaining technical documentation, user manuals, and other written materials. Strong writing skills, technical knowledge, and attention to detail are required.",
      requirements: "Bachelor's degree in Technical Writing, Computer Science, or a related field, 3+ years of experience in technical writing, excellent writing and editing skills, ability to explain complex technical concepts clearly, strong attention to detail, and familiarity with documentation tools and formats.",
      salary: "$70,000 - $90,000",
    },
  ];
  
// Function to generate HTML for a job listing
const generateJobListingHTML = (job) => {
    return `
      <div class="job-box">
        <h2>${job.title}</h2>
        <p>Company: ${job.company}</p>
        <p>Location: ${job.location}</p>
        <p>Description: ${job.description}</p>
        <p>Requirements: ${job.requirements}</p>
        <p>Salary: ${job.salary}</p>
        <div class="apply-box">
          <a class="apply-button" href="https://github.com/7ev4n" target="_blank">Apply</a>
        </div>
      </div>
    `;
  };
  
  
  // Function to display job listings
  const displayJobListings = (jobs) => {
    const jobListingsContainer = document.getElementById("job-listings");
  
    jobs.forEach((job) => {
      const jobListingHTML = generateJobListingHTML(job);
      jobListingsContainer.innerHTML += jobListingHTML;
    });
  };
  
  // Function to clear job listings
  const clearJobListings = () => {
    const jobListingsContainer = document.getElementById("job-listings");
    jobListingsContainer.innerHTML = "";
  };
  
  // Function to handle the filter button click event
  const handleFilterButtonClick = () => {
    const locationFilterValue = document.getElementById("location-filter").value;
    const jobFilterValue = document.getElementById("job-filter").value;
  
    // Apply filters based on filter values (example logic)
    const filteredJobs = jobs.filter((job) => {
      const locationMatch = job.location.toLowerCase().includes(locationFilterValue.toLowerCase());
      const jobTitleMatch = job.title.toLowerCase().includes(jobFilterValue.toLowerCase());
      return locationMatch && jobTitleMatch;
    });
  
    // Clear the previous job listings
    clearJobListings();
  
    // Display the filtered job listings
    displayJobListings(filteredJobs);
  };
  
  // Add event listener to the filter button
  const applyFiltersButton = document.getElementById("apply-filters-button");
  applyFiltersButton.addEventListener("click", handleFilterButtonClick);
  
  // Initial display of all job listings
  displayJobListings(jobs);


  // Toggle button functionality
const toggleButton = document.getElementById('toggle-button');
const body = document.body;

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});
